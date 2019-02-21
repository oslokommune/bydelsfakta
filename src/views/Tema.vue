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
      <h3>Bydelskart</h3>
      <v-leaflet :district="geoDistricts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GraphCard from '../components/GraphCard.vue';
import VLeaflet from '../components/VLeaflet.vue';

import pages from '../config/pages';

export default {
  name: 'Tema',

  components: {
    GraphCard,
    VLeaflet,
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
    ...mapGetters(['geoDistricts']),
  },
};
</script>

<style scoped></style>
