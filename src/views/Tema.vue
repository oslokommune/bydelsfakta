<template>
  <div class="main-container">
    <div class="main-container__cards">
      <template v-for="(subpage, index) in pages[`${componentName}`].subpages">
        <h2 :key="`subpage-${index}`" v-show="subpage.title !== undefined" class="section-heading">
          {{ subpage.title }}
        </h2>
        <graph-card
          v-for="(card, cardIndex) in subpage.graphs"
          :key="`${subpage.name}-${cardIndex}`"
          :settings="card"
        />
      </template>
    </div>
    <div class="main-container__map">
      <h3>Kart</h3>
    </div>
  </div>
</template>

<script>
import pages from '../config/pages';

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
      return { settings: pages[this.tema] };
    },
  },
};
</script>

<style scoped></style>
