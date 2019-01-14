<template>
  <div class="graph__container">
    <select
      class="graph__dropdown"
      name
      id
      v-if="showDropdown"
      @input="svg.render(res, 'ratio', $event.target.value)"
    >
      <option
        v-for="(element, index) in dropDownList"
        :key="index"
        :value="element.range"
        :selected="element.selected"
      >{{element.label}}</option>
    </select>
    <svg class="graph__svg" ref="svg"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
import ageRanges from '../config/ageRanges';
import TemplateA from '../lib/templateA';
import TemplateB from '../lib/templateB';
import TemplateC from '../lib/templateC';
import TemplateD from '../lib/templateD';
import TemplateE from '../lib/templateE';
import TemplateI from '../lib/templateI';

export default {
  data: () => ({
    svg: false,
    res: null,
    currentTemplate: false,
    heading: 'loading ...',
    showDropdown: false,
    dropDownList: ageRanges,
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
            this.showDropdown = false;
            this.svg = new TemplateA(this.$refs['svg']);
            break;
          case 'b':
            this.showDropdown = false;
            this.svg = new TemplateB(this.$refs['svg']);
            break;
          case 'c':
            this.showDropdown = false;
            this.svg = new TemplateC(this.$refs['svg']);
            break;
          case 'd':
            this.showDropdown = true;
            this.svg = new TemplateD(this.$refs['svg']);
            break;
          case 'e':
            this.showDropdown = false;
            this.svg = new TemplateE(this.$refs['svg']);
            break;
          case 'i':
            this.showDropdown = false;
            this.svg = new TemplateI(this.$refs['svg']);
            break;
          default:
            break;
        }
      }

      d3.json(this.settings.url).then(res => {
        this.res = res;
        this.heading = res.meta.heading;
        this.svg.render(this.res, this.settings.method);
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

<style scoped>
.graph__container {
  position: relative;
}
.graph__dropdown {
  position: absolute;
  top: 164px;
  left: 0;

  padding: 1em;
  border: 1px solid black;
}
</style>
