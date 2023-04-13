<template>
  <div class="graph__shadow" role="tabpanel" :class="shadowClass">
    <div
      ref="graphContainer"
      v-dragscroll.x="!isTouchDevice"
      class="graph__container"
      :class="{ hidden: mode === 'table' }"
      aria-hidden="true"
      @scroll="drawShadows"
    >
      <div v-if="loading" class="spinner">
        <spinner></spinner>
        <span class="spinner__text">{{ $t('loading.loadingData') }}</span>
      </div>
      <div v-if="error" class="error">
        <h2>{{ errorMessage }}</h2>
      </div>
      <svg
        v-if="!error"
        ref="svg"
        class="graph__svg"
        aria-hidden="true"
        :class="{ loading }"
        @click="showHelp = false"
      />
    </div>
    <div
      ref="tableContainer"
      v-dragscroll.x="!isTouchDevice"
      :class="{ 'visually-hidden': mode === 'graph' }"
      class="graph__tablecontainer"
      @scroll="drawShadows"
    >
      <h3 class="table-heading"></h3>
      <table ref="table" :class="{ compareDistrictsTable: compareDistricts }">
        <thead></thead>
        <tbody></tbody>
      </table>
      <p v-if="compareDistricts" class="table-footnote">
        <small>{{ $t('graphCard.table.footnote') }}</small>
      </p>
    </div>
    <!-- <table class="visually-hidden"> -->
    <resize-observer @notify="handleResize"></resize-observer>
    <div v-if="settings.help && mode === 'graph'" class="help">
      <button
        class="help__button"
        :aria-label="showHelp ? $t('graphCard.help.ariaHide') : $t('graphCard.help.ariaShow')"
        @click="showHelp = !showHelp"
      >
        <ok-icon icon-ref="question" :options="{ size: 'small', margin: '0' }"></ok-icon>
      </button>
      <div v-if="showHelp" class="help__text">{{ settings.help }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mean } from 'd3';
import * as Sentry from '@sentry/vue';
import { mapState } from 'vuex';
import { dragscroll } from 'vue-dragscroll';
import TemplateBars from '@/util/graph-templates/templateBars';
import TemplateLines from '@/util/graph-templates/templateLines';
import TemplateLinesMulti from '@/util/graph-templates/templateLinesMulti';
import TemplateAgeDistribution from '@/util/graph-templates/templateAgeDistribution';
import TemplatePyramid from '@/util/graph-templates/templatePyramid';
import TemplateBoxPlot from '@/util/graph-templates/templateBoxPlot';
import TemplatePopulationDetailsTable from '@/util/graph-templates/templatePopulationDetailsTable';
import TemplateTernaryPlot from '@/util/graph-templates/templateTernaryPlot';
import TemplateStackedBars from '@/util/graph-templates/templateStackedBars';
import TemplateLivingConditions from '@/util/graph-templates/templateLivingConditions';
import TemplateComboHistogram from '@/util/graph-templates/templateComboHistogram';
import TemplateBarsAndLines from '@/util/graph-templates/templateBarsAndLines';
import districtNames from '@/config/districtNames';
import Spinner from '@/components/Spinner.vue';
import OkIcon from './OkIcon.vue';

export default {
  components: { OkIcon, Spinner },

  directives: {
    dragscroll,
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

  computed: {
    shadowClass() {
      let str = '';
      if (this.shadow.left && this.mode === 'graph') {
        str += ' graph__shadow--left';
      }
      if (this.shadow.right) {
        str += ' graph__shadow--right';
      }
      return str;
    },
    ...mapState(['districts', 'compareDistricts', 'isTouchDevice']),
    filteredData() {
      this.sortData(this.data);

      if (!this.compareDistricts || this.districts.includes('alle') || this.settings.noFilter) {
        return this.data;
      }

      const selectedDistrictNames = this.districts.map((id) => districtNames[id]);

      return {
        meta: this.data.meta,
        data: this.data.data.filter((d) => {
          return selectedDistrictNames.includes(d.geography) || d.totalRow;
        }),
      };
    },
  },

  watch: {
    settings: {
      immediate: true,
      handler() {
        this.draw();
      },
    },

    districts(to, from) {
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
      if (!this.svg) return;

      this.svg.resize(this.data, { method: this.settings.method, compareDistricts: this.compareDistricts });
      this.drawShadows();
    },

    sortData(data) {
      const { template } = this.settings;

      data.data.sort((a, b) => {
        if (b.totalRow && a.avgRow) return -1;
        if (a.totalRow && b.avgRow) return 1;
        if (a.totalRow || a.avgRow) return 1;
        if (b.totalRow || b.avgRow) return -1;

        if (template === 'bars') {
          if (a.values.length && b.values.length) {
            return b.values[0][this.settings.method] - a.values[0][this.settings.method];
          }
        }

        if (template === 'boxPlot') {
          const meanA = mean(a.values.flatMap((obj) => [...Array(obj.value)].fill(+obj.age)));
          const meanB = mean(b.values.flatMap((obj) => [...Array(obj.value)].fill(+obj.age)));
          return meanA - meanB;
        }

        if (template === 'populationDetailsTable') {
          return b.values[0] - a.values[0];
        }

        if (template === 'stackedBars' && a.values && a.values.length && b.values && b.values.length) {
          const sumA = a.values[0][this.settings.method] + a.values[1][this.settings.method];
          const sumB = b.values[0][this.settings.method] + b.values[1][this.settings.method];
          return sumB - sumA;
        }

        return 0;
      });

      return data;
    },

    async draw(options = {}) {
      this.loading = true;

      const geoParam = this.compareDistricts ? '00' : this.districts[0];
      if (!options.keepData) {
        try {
          const { data } = await axios.get(`${this.settings.url}?geography=${geoParam}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          this.$emit('update-date', data[0].meta.publishedDate);

          data[0].data.map((district) => {
            district.noLink = !districtNames[district.id]; // add noLink flag if geography is not a district

            return district;
          });

          this.data = data[0];
          this.error = false;
          this.errorMessage = '';
        } catch (err) {
          this.error = true;
          this.errorMessage = this.$t('error.connectionLost');
          this.loading = false;
          Sentry.captureException(err);
          return;
        }
      }

      if (this.currentTemplate !== this.settings.template && !options.keepData) {
        switch (this.settings.template) {
          case 'bars':
            this.svg = new TemplateBars(this.$refs.svg);
            break;
          case 'lines':
            this.svg = new TemplateLines(this.$refs.svg);
            break;
          case 'linesMulti':
            this.svg = new TemplateLinesMulti(this.$refs.svg);
            break;
          case 'ageDistribution':
            this.svg = new TemplateAgeDistribution(this.$refs.svg);
            break;
          case 'pyramid':
            this.svg = new TemplatePyramid(this.$refs.svg);
            break;
          case 'boxPlot':
            this.svg = new TemplateBoxPlot(this.$refs.svg);
            break;
          case 'populationDetailsTable':
            this.svg = new TemplatePopulationDetailsTable(this.$refs.svg);
            break;
          case 'ternaryPlot':
            this.svg = new TemplateTernaryPlot(this.$refs.svg);
            break;
          case 'stackedBars':
            this.svg = new TemplateStackedBars(this.$refs.svg);
            break;
          case 'livingConditions':
            this.svg = new TemplateLivingConditions(this.$refs.svg);
            break;
          case 'comboHistogram':
            this.svg = new TemplateComboHistogram(this.$refs.svg);
            break;
          case 'barsAndLines':
            this.svg = new TemplateBarsAndLines(this.$refs.svg);
            break;
          default:
            break;
        }
      }

      this.currentTemplate = this.settings.template;

      this.svg.render(this.filteredData, {
        method: this.settings.method,
        showPermille: this.settings.showPermille,
        mode: this.settings.mode,
        sources: this.sources,
        initialRender: true,
        compareDistricts: this.compareDistricts,
        variant: this.settings.variant,
      });

      this.drawShadows();
      this.svg.setHeading(this.settings.heading);
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/styles/colors' as *;
@use '@/styles/variables' as *;

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

    ::v-deep &.hidden ~ .graph__dropdown {
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
