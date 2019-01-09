<template>
  <div>
    <h3 v-text="heading"></h3>
    <svg ref="svg"></svg>
  </div>
</template>

<script>
import TemplateA from '../lib/templateA.js';
import TemplateB from '../lib/templateB.js';
import * as d3 from 'd3';

export default {
  data: () => ({
    svg: false,
    currentTemplate: false,
    heading: 'loading ...',
  }),

  watch: {
    settings: function() {
      if (this.currentTemplate !== this.settings.template) {
        switch (this.settings.template) {
          case 'a':
            this.svg = new TemplateA(this.$refs['svg']);
            break;
          case 'b':
            this.svg = new TemplateB(this.$refs['svg']);
            break;
          default:
            break;
        }
      }

      d3.json(this.settings.url).then(res => {
        this.heading = res.meta.heading;
        this.svg.render(res);
        this.currentTemplate = this.settings.template;
      });
    },
  },

  mounted() {
    if (this.currentTemplate !== this.settings.template) {
      switch (this.settings.template) {
        case 'a':
          this.svg = new TemplateA(this.$refs['svg']);
          break;
        case 'b':
          this.svg = new TemplateB(this.$refs['svg']);
          break;
        default:
          break;
      }
    }

    d3.json(this.settings.url).then(res => {
      this.heading = res.meta.heading;
      this.svg.render(res);
      this.currentTemplate = this.settings.template;
    });
  },
  props: ['settings'],
};
</script>

<style>
</style>
