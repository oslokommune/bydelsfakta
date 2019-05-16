<template>
  <component :is="iconRef" class="icon" :class="{ small }" :style="{ marginRight }"></component>
</template>

<script>
// Import all icons (note the '?inline' suffix)
import hamburger from '../assets/icons/menu.svg?inline';
import help from '../assets/icons/help.svg?inline';
import photo from '../assets/icons/photo.svg?inline';
import download from '../assets/icons/download.svg?inline';

/* 
  available options:
    - 'size' : 'small'
    - 'margin: <Number> 
*/

export default {
  // Bind SVGs as components
  components: {
    hamburger,
    help,
    photo,
    download,
  },

  computed: {
    small() {
      return this.options.size && this.options.size === 'small';
    },
    marginRight() {
      return this.options.margin || '0.15rem';
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
  width: 2rem;

  &.small {
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>
