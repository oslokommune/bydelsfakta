<template>
  <component :is="iconRef" class="logo icon" :class="{ small, tiny }" :style="{ marginRight, transform }"></component>
</template>

<script>
// Import all icons (note the '?inline' suffix)
import hamburger from '../assets/icons/menu.svg';
import help from '../assets/icons/help.svg';
import photo from '../assets/icons/photo.svg';
import download from '../assets/icons/download.svg';
import arrowDown from '../assets/icons/arrow-down.svg';
import mapPin from '../assets/icons/map-pin.svg';
import graph from '../assets/icons/graph.svg';
import dataTable from '../assets/icons/data-table.svg';
import fullscreen from '../assets/icons/fullscreen.svg';
import fullscreenExit from '../assets/icons/fullscreen-exit.svg';
import oslologo from '../assets/oslo-logo.svg';
import cross from '../assets/icons/cross.svg';
import newWindow from '../assets/icons/new-window.svg';

/* 
  available options (optional):
    - 'size' : <String> 'small'
    - 'margin: <Number> px|em|rem
    - 'rotation' <Number> deg
*/

export default {
  // Bind SVGs as components
  components: {
    hamburger,
    help,
    photo,
    download,
    arrowDown,
    mapPin,
    graph,
    dataTable,
    fullscreen,
    fullscreenExit,
    oslologo,
    cross,
    newWindow,
  },

  props: {
    iconRef: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  computed: {
    small() {
      return this.options.size && this.options.size === 'small';
    },
    tiny() {
      return this.options.size && this.options.size === 'tiny';
    },
    marginRight() {
      return this.options.margin || '0';
    },

    transform() {
      let str = '';

      if (!this.options.rotation) {
        str += `rotate(0)`;
      } else {
        str += ` rotate(${this.options.rotation})`;
      }

      return str;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 2rem;
  height: 2rem;
  transition: transform 0.2s ease-in-out;

  &.small {
    width: 1.5rem;
    height: 1.5rem;
  }

  &.tiny {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
