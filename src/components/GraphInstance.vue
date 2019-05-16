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
        <img src="../assets/spinner.svg" alt="" />
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
      <table :class="{ compareDistrictsTable: compareDistricts }">
        <caption></caption>
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
import TemplateH from '../util/graph-templates/templateH';
import TemplateI from '../util/graph-templates/templateI';
import TemplateJ from '../util/graph-templates/templateJ';
import districtNames from '../config/districtNames';
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

  components: { OkIcon },

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
      this.svg.resize(this.data, { method: this.settings.method });
      this.drawShadows();
    },

    sortData(data) {
      const template = this.settings.template;

      data.data.sort((a, b) => {
        if (template === 'b' && a.values && a.values.length && b.values && b.values.length) {
          return (
            b.values[b.values.length - 1][this.settings.method] - a.values[a.values.length - 1][this.settings.method]
          );
        }

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
          .then(data => {
            this.$emit('updateDate', data.meta.publishedDate);

            data.data.map(district => {
              district.id = district.geography;
              district.noLink = !districtNames[district.geography]; // add noLink flag if geography is not a district
              district.geography = districtNames[district.geography] || district.geography;

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
          case 'h':
            this.svg = new TemplateH(this.$refs['svg']);
            break;
          case 'i':
            this.svg = new TemplateI(this.$refs['svg']);
            break;
          case 'j':
            this.svg = new TemplateJ(this.$refs['svg']);
            break;
          default:
            break;
        }
      }

      this.currentTemplate = this.settings.template;

      this.loading = false;

      this.svg.render(this.filteredData, {
        method: this.settings.method,
        initialRender: true,
        compareDistricts: this.compareDistricts,
        range: '[0, 40]', // default range
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
      bottom: 0;
      content: '';
      display: block;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      transition: opacity 0.1s ease-in-out;
      width: 2em;
      z-index: 1;
    }

    &::before {
      background: linear-gradient(to right, rgba(black, 0.3), rgba(black, 0.1) 60%, rgba(black, 0) 100%);
      left: 0;
    }

    &::after {
      background: linear-gradient(to left, rgba(black, 0.3), rgba(black, 0.1) 60%, rgba(black, 0) 100%);
      right: 0;
    }

    &--left::before {
      opacity: 1;
    }

    &--right::after {
      opacity: 1;
    }
  }

  &__container {
    overflow: auto;
    padding: 1em 1em 0 1em;
    position: relative;

    /deep/ &.hidden ~ .graph__dropdown {
      display: none;
    }
  }

  &__tablecontainer {
    overflow-x: auto;
    position: relative;
    width: 100%;
  }

  &__svg {
    &.loading {
      animation-delay: 0.5s;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
      animation-name: fadeOut;
      pointer-events: none;
    }
  }
}

.table-footnote {
  left: 0;
  padding: 0 1rem;
  position: sticky;

  &::before {
    content: '* ';
  }
}

.spinner {
  align-items: center;
  animation-delay: 0.5s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-name: fadeIn;
  background-color: rgba($color-light-blue, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;

  &__text {
    padding: 0.75em;
  }
}

.tick text {
  color: $color-grey-600;
  font-family: monospace;
  font-size: $font-small;
  font-weight: 500;
  text-rendering: geometricPrecision;
}

.help {
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  z-index: 1;

  &__button {
    align-items: center;
    border-radius: 50%;
    color: $color-purple;
    cursor: pointer;
    display: flex;
    height: 3em;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 3em;

    & > i {
      font-size: 1.5em;
      pointer-events: none;
    }

    &:hover {
      background: $color-blue;
    }

    &::before {
      background: white;
      content: '';
      display: block;
      height: 4rem;
      position: absolute;
      right: -0.5rem;
      top: -0.5rem;
      width: 4rem;
      z-index: -1;
    }
  }

  &__text {
    background: $color-purple;
    border-radius: 3px;
    box-shadow: 0 3px 4px rgba($color-purple, 0.5);
    color: $color-yellow;
    font-weight: 500;
    padding: 1em;
    position: absolute;
    right: 0;
    top: 3em;
    width: 250px;

    &::before {
      border-bottom: 0.75em solid $color-purple;
      border-left: 0.75em solid transparent;
      border-right: 0.75em solid transparent;
      content: '';
      display: block;
      position: absolute;
      right: 0.75em;
      top: -0.5em;
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
.compareDistrictsTable tbody tr:last-child th::after {
  content: ' *';
}
</style>
