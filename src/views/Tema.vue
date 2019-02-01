<template>
  <component :is="componentName" v-bind="currentSettings"></component>
</template>

<script>
import page from '../config/pages';

import Alder from './subviews/Alder.vue';
import Boligpriser from './subviews/Boligpriser.vue';
import Bygningstyper from './subviews/Bygningstyper.vue';
import Eierform from './subviews/Eierform.vue';
import Flytting from './subviews/Flytting.vue';
import Folkemengde from './subviews/Folkemengde.vue';
import Husholdninger from './subviews/Husholdninger.vue';
import Innvandrerbefolkningen from './subviews/Innvandrerbefolkningen.vue';
import Kommunaleboliger from './subviews/Kommunaleboliger.vue';
import Levekaar from './subviews/Levekaar.vue';
import Trangboddhet from './subviews/Trangboddhet.vue';

export default {
  name: 'Tema',

  components: {
    Alder,
    Boligpriser,
    Bygningstyper,
    Eierform,
    Flytting,
    Folkemengde,
    Husholdninger,
    Innvandrerbefolkningen,
    Kommunaleboliger,
    Levekaar,
    Trangboddhet,
  },

  props: {
    bydel: {
      type: String,
      required: true,
    },
    tema: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      componentName: this.tema,
    };
  },

  watch: {
    tema() {
      this.componentName = this.tema;
    },
  },

  computed: {
    currentSettings() {
      return { settings: page[this.tema] };
    },
  },
};
</script>

<style scoped>
</style>
