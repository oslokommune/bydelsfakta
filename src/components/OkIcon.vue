<template>
  <pkt-icon :name="iconRef" class="logo icon" :class="{ small, tiny }" :style="{ marginRight, transform }" />
</template>

<script>
import { PktIcon } from '@oslokommune/punkt-vue';

/*
  available options (optional):
    - 'size' : <String> 'small'
    - 'margin: <Number> px|em|rem
    - 'rotation' <Number> deg
*/

export default {
  components: {
    PktIcon,
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
