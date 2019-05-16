<template>
  <component :is="iconRef" class="icon" :class="{ small }" :style="{ marginRight, transform }"></component>
</template>

<script>
// Import all icons (note the '?inline' suffix)
import hamburger from '../assets/icons/menu.svg?inline';
import help from '../assets/icons/help.svg?inline';
import photo from '../assets/icons/photo.svg?inline';
import download from '../assets/icons/download.svg?inline';
import arrowDown from '../assets/icons/arrow-down.svg?inline';

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
  },

  computed: {
    small() {
      return this.options.size && this.options.size === 'small';
    },
    marginRight() {
      return this.options.margin || '0.15rem';
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
  transition: transform 0.2s ease-in-out;
  width: 2rem;

  &.small {
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>
