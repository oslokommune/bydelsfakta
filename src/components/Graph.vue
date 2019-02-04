<template>
  <div class="graph__container">
    <svg class="graph__svg" ref="svg"></svg>
    <resize-observer @notify="svg.resize(data, {method: settings.method })"/>
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
    data: null,
    currentTemplate: false,
  }),

  watch: {
    settings: function() {
      this.draw();
    },
  },

  mounted() {
    this.draw();
  },

  methods: {
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

      this.data = await d3.json(this.settings.url);
      this.svg.render(this.data, {
        method: this.settings.method,
        range: '[0, 50]',
      });
      this.currentTemplate = this.settings.template;
    },
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>

