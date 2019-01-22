<template>
  <div class="graph__container">
    <select
      class="graph__dropdown"
      name
      id
      v-if="showDropdown"
      @input="svg.render(data, { method: settings.method, range: $event.target.value})"
    >
      <option
        v-for="(element, index) in dropDownList"
        :key="index"
        :value="element.range"
        :selected="element.selected"
      >{{element.label}}</option>
    </select>
    <svg class="graph__svg" ref="svg" focusable="true" tabindex="-1"></svg>
    <resize-observer @notify="svg.resize(data, {method: settings.method })"/>
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
import TemplateF from '../lib/templateF';
import TemplateG from '../lib/templateG';
import TemplateH from '../lib/templateH';
import TemplateI from '../lib/templateI';
import TemplateJ from '../lib/templateJ';

export default {
  data: () => ({
    svg: false,
    data: null,
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
        // Show dropdown only for template d
        this.showDropdown = this.settings.template === 'd';

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

      d3.json(this.settings.url).then(data => {
        this.data = data;
        this.svg.render(this.data, {
          method: this.settings.method,
        });
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
  margin: 1em;
}
.graph__dropdown {
  position: absolute;
  top: 164px;
  left: 0;
  padding: 1em;
  border: 1px solid black;
}
</style>
