<template>
  <div class="graph__shadow" role="tabpanel" :class="shadowClass">
    <div
      class="graph__container"
      :class="{ hidden: mode === 'table' }"
      ref="graphContainer"
      aria-hidden="true"
      @scroll="drawShadows"
      v-dragscroll
    >
      <div class="spinner" v-if="loading">
        <img src="../assets/spinner.svg" alt="" />
      </div>
      <svg class="graph__svg" aria-hidden="true" ref="svg" :class="{ loading }"></svg>
    </div>
    <div
      :class="{ 'visually-hidden': mode === 'graph' }"
      class="graph__tablecontainer"
      ref="tableContainer"
      v-dragscroll
      @scroll="drawShadows"
    >
      <table>
        <caption></caption>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
    <!-- <table class="visually-hidden"> -->
    <resize-observer @notify="handleResize"></resize-observer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import * as d3 from 'd3';
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
import { dragscroll } from 'vue-dragscroll';

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
  }),

  computed: {
    shadowClass() {
      let str = '';
      if (this.shadow.left && this.mode === 'graph') str += ' graph__shadow--left';
      if (this.shadow.right) str += ' graph__shadow--right';
      return str;
    },
    ...mapState(['districts', 'compareDistricts']),
    filteredData() {
      if (!this.compareDistricts || this.districts.includes('alle')) return this.data;

      return {
        meta: this.data.meta,
        data: this.data.data.filter(d => this.districts.includes(d.geography)),
      };
    },
  },

  watch: {
    settings: function() {
      this.draw();
    },
    districts: function(to, from) {
      if (from.length > 1 && (to.length > 1 || this.compareDistricts)) {
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
      if (this.mode == 'graph') {
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
      this.svg.resize(this.data, { method: this.settings.method });
      this.drawShadows();
    },

    async draw(options = {}) {
      this.loading = true;

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

      //this.data = await d3.json(this.settings.url);
      const geoParam = this.compareDistricts ? '00' : this.districts[0];
      if (!options.keepData) {
        this.data = await d3.json(`${this.settings.url}?geography=${geoParam}`);
      }

      this.svg.render(this.filteredData, {
        method: this.settings.method,
        initialRender: true,
      });
      this.currentTemplate = this.settings.template;
      this.drawShadows();

      this.loading = false;
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
      z-index: 1;
      content: '';
      display: block;
      width: 2em;
      position: absolute;
      top: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.1s ease-in-out;
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
  }

  &__tablecontainer {
    width: 100%;
    overflow-x: auto;
    position: relative;
  }

  &__svg {
    &.loading {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}

.spinner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}

.tick text {
  font-size: $font-small;
  font-weight: 500;
  color: $color-grey-600;
  font-family: monospace;
  text-rendering: geometricPrecision;
}
</style>
