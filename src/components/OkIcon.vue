<template>
  <component :is="iconRef" class="icon" :class="{ small, tiny }" :style="{ marginRight, transform }"></component>
</template>

<script>
// Import all icons (note the '?inline' suffix)
import hamburger from '../assets/icons/menu.svg?inline';
import help from '../assets/icons/help.svg?inline';
import photo from '../assets/icons/photo.svg?inline';
import download from '../assets/icons/download.svg?inline';
import arrowDown from '../assets/icons/arrow-down.svg?inline';
import mapPin from '../assets/icons/map-pin.svg?inline';
import graph from '../assets/icons/graph.svg?inline';
import dataTable from '../assets/icons/data-table.svg?inline';

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

      if(!this.options.rotation) {
        str += `rotate(0)`
      } else {
        str += ` rotate(${this.options.rotation})`
      }
      
      return str
    }

    
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
};
</script>

<style lang="scss" scoped>
.icon {
  height: 2rem;
  width: 2rem;
  
  transition: transform 0.2s ease-in-out;

  &.small {
    height: 1.5rem;
    width: 1.5rem;
  }

  &.tiny {
    height: 1.25rem;
    width: 1.25rem;
  }

}
</style>
