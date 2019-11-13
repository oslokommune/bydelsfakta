<template>
  <div class="graph__shadow" role="tabpanel" :class="shadowClass">
    <div
      class="graph__container"
      :class="{ hidden: mode === 'table' }"
      ref="graphContainer"
      aria-hidden="true"
      @scroll="drawShadows"
      v-dragscroll.x="!isTouchDevice"
    >
      <div class="spinner" v-if="loading">
        <spinner></spinner>
        <span class="spinner__text">{{ $t('loading.loadingData') }}</span>
      </div>
      <div class="error" v-if="error">
        <h2>{{ errorMessage }}</h2>
      </div>
      <svg
        v-if="!error"
        class="graph__svg"
        aria-hidden="true"
        ref="svg"
        :class="{ loading }"
        @click="showHelp = false"
      ></svg>
    </div>
    <div
      :class="{ 'visually-hidden': mode === 'graph' }"
      class="graph__tablecontainer"
      ref="tableContainer"
      v-dragscroll.x="!isTouchDevice"
      @scroll="drawShadows"
    >
      <h3 class="table-heading"></h3>
      <table :class="{ compareDistrictsTable: compareDistricts }" ref="table">
        <thead></thead>
        <tbody></tbody>
      </table>
      <p v-if="compareDistricts" class="table-footnote">
        <small>{{ $t('graphCard.table.footnote') }}</small>
      </p>
    </div>
    <!-- <table class="visually-hidden"> -->
    <resize-observer @notify="handleResize"></resize-observer>
    <div class="help" v-if="settings.help && mode === 'graph'">
      <button
        class="help__button"
        @click="showHelp = !showHelp"
        :aria-label="showHelp ? $t('graphCard.help.ariaHide') : $t('graphCard.help.ariaShow')"
      >
        <ok-icon icon-ref="help" :options="{ size: 'small', margin: '0' }"></ok-icon>
      </button>
      <div v-if="showHelp" class="help__text">{{ settings.help }}</div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import { mapState } from 'vuex';
import { dragscroll } from 'vue-dragscroll';
import TemplateA from '../util/graph-templates/templateA';
import TemplateB from '../util/graph-templates/templateB';
import TemplateC from '../util/graph-templates/templateC';
import TemplateD from '../util/graph-templates/templateD';
import TemplateE from '../util/graph-templates/templateE';
import TemplateF from '../util/graph-templates/templateF';
import TemplateG from '../util/graph-templates/templateG';
import TemplateI from '../util/graph-templates/templateI';
import TemplateJ from '../util/graph-templates/templateJ';
import TemplateK from '../util/graph-templates/templateK';
import TemplateM from '../util/graph-templates/templateM';
import TemplateN from '../util/graph-templates/templateN';
import districtNames from '../config/districtNames';
import Spinner from '../assets/spinner.svg';
import OkIcon from './OkIcon';

export default {
  data: () => ({
    svg: false,
    shadow: {
      left: false,
      right: false,
    },
    data: null,
    loading: true,
    currentTemplate: false,
    allDistricts: false,
    error: false,
    errorMessage: '',
    showHelp: false,
  }),

  components: { OkIcon, Spinner },

  computed: {
    shadowClass() {
      let str = '';
      if (this.shadow.left && this.mode === 'graph') str += ' graph__shadow--left';
      if (this.shadow.right) str += ' graph__shadow--right';
      return str;
    },
    ...mapState(['districts', 'compareDistricts', 'isTouchDevice']),
    filteredData() {
      this.sortData(this.data);

      if (!this.compareDistricts || this.districts.includes('alle') || this.settings.noFilter) return this.data;

      const selectedDistrictNames = this.districts.map(id => districtNames[id]);

      return {
        meta: this.data.meta,
        data: this.data.data.filter(d => {
          return selectedDistrictNames.includes(d.geography) || d.totalRow;
        }),
      };
    },
  },

  watch: {
    settings: function() {
      this.draw();
    },
    districts: function(to, from) {
      if (
        from.length > 1 &&
        (to.length > 1 || this.compareDistricts) &&
        this.currentTemplate === this.settings.template
      ) {
        this.draw({ keepData: true });
      } else {
        this.draw();
      }
    },
  },

  mounted() {
    this.draw();
  },

  methods: {
    drawShadows() {
      let ref;
      if (this.mode === 'graph') {
        ref = 'graphContainer';
      } else if (this.mode === 'table') {
        ref = 'tableContainer';
      } else {
        return;
      }

      const width = this.$refs[ref].parentElement.clientWidth;
      const spaceLeft = this.$refs[ref].scrollLeft;
      const spaceRight = this.$refs[ref].scrollWidth - width - spaceLeft;

      this.shadow.left = spaceLeft > 5;
      this.shadow.right = spaceRight > 5;
    },

    handleResize() {
      if (this.loading) return;
      if (!this.svg.resize) return;
      this.svg.resize(this.data, { method: this.settings.method, compareDistricts: this.compareDistricts });
      this.drawShadows();
    },

    sortData(data) {
      const template = this.settings.template;

      data.data.sort((a, b) => {
        if (b.totalRow && a.avgRow) return -1;
        else if (a.totalRow && b.avgRow) return 1;
        else if (a.totalRow || a.avgRow) return 1;
        else if (b.totalRow || b.avgRow) return -1;
        else {
          if (template === 'a') {
            if (a.values.length && b.values.length) {
              return b.values[0][this.settings.method] - a.values[0][this.settings.method];
            }
          }

          if (template === 'f') {
            const meanA = d3.mean(a.values.flatMap(obj => [...Array(obj.value)].fill(+obj.age)));
            const meanB = d3.mean(b.values.flatMap(obj => [...Array(obj.value)].fill(+obj.age)));
            return meanA - meanB;
          }

          if (template === 'g') {
            return b.values[0] - a.values[0];
          }

          if (template === 'j' && a.values && a.values.length && b.values && b.values.length) {
            const sumA = a.values[0][this.settings.method] + a.values[1][this.settings.method];
            const sumB = b.values[0][this.settings.method] + b.values[1][this.settings.method];
            return sumB - sumA;
          }
        }
      });

      return data;
    },

    async draw(options = {}) {
      this.loading = true;

      const geoParam = this.compareDistricts ? '00' : this.districts[0];
      if (!options.keepData) {
        this.data = await d3
          .json(`${this.settings.url}?geography=${geoParam}`)
          .then(rawData => {
            const data = rawData[0];
            this.$emit('updateDate', data.meta.publishedDate);

            data.data.map(district => {
              district.noLink = !districtNames[district.id]; // add noLink flag if geography is not a district

              return district;
            });
            return data;
          })
          .catch(() => {
            this.error = true;
            this.errorMessage = this.$t('error.connectionLost');
            this.loading = false;
          });
      }

      if (this.data) {
        this.error = false;
        this.errorMessage = '';
      } else {
        return;
      }

      if (this.currentTemplate !== this.settings.template && !options.keepData) {
        switch (this.settings.template) {
          case 'a':
            this.svg = new TemplateA(this.$refs['svg']);
            break;
          case 'b':
            this.svg = new TemplateB(this.$refs['svg']);
            break;
          case 'c':
            this.svg = new TemplateC(this.$refs['svg']);
            break;
          case 'd':
            this.svg = new TemplateD(this.$refs['svg']);
            break;
          case 'e':
            this.svg = new TemplateE(this.$refs['svg']);
            break;
          case 'f':
            this.svg = new TemplateF(this.$refs['svg']);
            break;
          case 'g':
            this.svg = new TemplateG(this.$refs['svg']);
            break;
          case 'i':
            this.svg = new TemplateI(this.$refs['svg']);
            break;
          case 'j':
            this.svg = new TemplateJ(this.$refs['svg']);
            break;
          case 'k':
            this.svg = new TemplateK(this.$refs['svg']);
            break;
          case 'm':
            this.svg = new TemplateM(this.$refs['svg']);
            break;
          case 'n':
            this.svg = new TemplateN(this.$refs['svg']);
            break;
          default:
            break;
        }
      }

      this.currentTemplate = this.settings.template;

      this.loading = false;

      this.svg.render(this.filteredData, {
        method: this.settings.method,
        showPermille: this.settings.showPermille,
        mode: this.settings.mode,
        sources: this.sources,
        initialRender: true,
        compareDistricts: this.compareDistricts,
        range: '[0, 40]', // default range
        variant: this.settings.variant,
      });
      this.drawShadows();
      this.svg.setHeading(this.settings.heading);
    },
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
    sources: {
      type: Array,
      required: false,
      default: () => [],
    },
    mode: {
      type: String,
      required: true,
    },
  },
  directives: {
    dragscroll,
  },
};
</script>

<style lang="scss" scoped>
@import './../styles/colors';
@import './../styles/variables';

.graph {
  &__shadow {
    position: relative;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      display: block;
      width: 2em;
      opacity: 0;
      transition: opacity 0.1s ease-in-out;
      content: '';
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, rgba(black, 0.3), rgba(black, 0.1) 60%, rgba(black, 0) 100%);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, rgba(black, 0.3), rgba(black, 0.1) 60%, rgba(black, 0) 100%);
    }

    &--left::before {
      opacity: 1;
    }

    &--right::after {
      opacity: 1;
    }
  }

  &__container {
    position: relative;
    padding: 1em 1em 0 1em;
    overflow: auto;

    /deep/ &.hidden ~ .graph__dropdown {
      display: none;
    }
  }

  &__tablecontainer {
    position: relative;
    width: 100%;
    overflow-x: auto;
  }

  &__svg {
    &.loading {
      animation-name: fadeOut;
      animation-duration: 1s;
      animation-delay: 0.5s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      pointer-events: none;
    }
  }
}

.table-footnote {
  &.hide-footnote {
    display: none;
  }

  position: sticky;
  left: 0;
  padding: 0 1rem;

  &::before {
    content: '* ';
  }
}

.spinner {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba($color-light-blue, 1);
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  &__text {
    padding: 0.75em;
  }
}

.tick text {
  color: $color-grey-600;
  font-weight: 500;
  font-size: $font-small;
  font-family: monospace;
  text-rendering: geometricPrecision;
}

.help {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 1;

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    color: $color-purple;
    border-radius: 50%;
    cursor: pointer;

    & > i {
      font-size: 1.5em;
      pointer-events: none;
    }

    &:hover {
      background: $color-blue;
    }

    &::before {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      z-index: -1;
      display: block;
      width: 4rem;
      height: 4rem;
      background: white;
      content: '';
    }
  }

  &__text {
    position: absolute;
    top: 3em;
    right: 0;
    width: 250px;
    padding: 1em;
    color: $color-yellow;
    font-weight: 500;
    background: $color-purple;
    border-radius: 3px;
    box-shadow: 0 3px 4px rgba($color-purple, 0.5);

    &::before {
      position: absolute;
      top: -0.5em;
      right: 0.75em;
      display: block;
      border-right: 0.75em solid transparent;
      border-bottom: 0.75em solid $color-purple;
      border-left: 0.75em solid transparent;
      content: '';
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>

<style lang="scss">
th[data-footnote='true']::after {
  content: ' *';
}
</style>
