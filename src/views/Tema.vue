<template>
  <div class="main-container">
    <div class="main-container__cards">
      <div
        class="card-container"
        v-for="(subpage, index) in pages[`${componentName}`].subpages"
        :key="`subpage-${index}`"
      >
        <h2 v-show="subpage.title !== undefined" class="section-heading">{{ subpage.title }}</h2>
        <graph-card v-for="(card, cardIndex) in subpage.graphs" :key="`card-${cardIndex}`" :settings="card" />
      </div>
    </div>
    <div class="main-container__map">
      <h3>Kart</h3>
    </div>
  </div>
</template>

<script>
import { page, pages } from '../config/pages';

import GraphCard from '../components/GraphCard.vue';

export default {
  name: 'Tema',

  components: {
    GraphCard,
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
      pages: pages,
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
.card-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  min-width: 300px;
  max-width: 1300px;
}
</style>
