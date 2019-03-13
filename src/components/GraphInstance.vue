<template>
  <div class="graph__shadow" role="tabpanel" :class="shadowClass">
    <div
      class="graph__container"
      :class="{ hidden: mode === 'table' }"
      ref="container"
      aria-hidden="true"
      @scroll="drawShadows"
    >
      <svg class="graph__svg" aria-hidden="true" ref="svg"></svg>
    </div>
    <div :class="{ 'visually-hidden': mode === 'graph' }" class="graph__tablecontainer">
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

export default {
  data: () => ({
    svg: false,
    shadow: {
      left: false,
      right: false,
    },
    data: null,
    currentTemplate: false,
  }),

  computed: {
    shadowClass() {
      if (this.mode === 'table') return '';

      let str = '';
      if (this.shadow.left) str += ' graph__shadow--left';
      if (this.shadow.right) str += ' graph__shadow--right';
      return str;
    },
  },

  watch: {
    settings: function() {
      this.draw();
    },
  },

  mounted() {
    this.draw();
  },

  methods: {
    drawShadows() {
      const width = this.$refs.container.parentElement.clientWidth;
      const spaceLeft = this.$refs.container.scrollLeft;
      const spaceRight = this.$refs.container.scrollWidth - width - spaceLeft;

      this.shadow.left = spaceLeft > 5;
      this.shadow.right = spaceRight > 5;
    },

    handleResize() {
      this.svg.resize(this.data, { method: this.settings.method });
      this.drawShadows();
    },

    async draw() {
      if (this.currentTemplate !== this.settings.template) {
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
      this.data = await d3.json('http://localhost:5000/api/dataset/boligpriser_historic-4owcY?geography=01');
      console.log(this.data);
      this.svg.render(this.data, {
        method: this.settings.method,
        initialRender: true,
      });
      this.currentTemplate = this.settings.template;
      this.drawShadows();
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
}

.tick text {
  font-size: $font-small;
  font-weight: 500;
  color: $color-grey-600;
  font-family: monospace;
  text-rendering: geometricPrecision;
}
</style>
