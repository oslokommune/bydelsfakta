<template>
  <div>
    <svg ref="svg"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
import TemplateA from '../lib/templateA.js';
import TemplateB from '../lib/templateB.js';
import TemplateC from '../lib/templateC.js';
import TemplateD from '../lib/templateD.js';

export default {
  data: () => ({
    svg: false,
    currentTemplate: false,
    heading: 'loading ...',
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
    draw() {
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
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
