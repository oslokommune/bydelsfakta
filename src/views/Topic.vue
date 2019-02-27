<template>
  <div class="main-container">
    <div class="main-container__cards">
      <template v-for="(subpage, index) in topics[`${topic}`].subpages">
        <h2 :key="`subpage-${index}`" v-show="subpage.title !== undefined" class="section-heading">
          {{ subpage.title }}
        </h2>
        <graph-card
          v-for="(card, cardIndex) in subpage.graphs"
          :key="`${subpage.name}-${cardIndex}`"
          :settings="card"
        />
      </template>
      <template>
        <h2 class="section-heading">{{ $t('Se også') }}</h2>
        <v-category
          v-for="(item, relatedIndex) in topics[`${topic}`].related"
          :key="`related-${relatedIndex}`"
          :id="topics[`${item}`].value"
          :category="topics[`${item}`].options.kategori"
          :topic="topics[`${item}`].options.tema"
          :bg-image="topics[`${item}`].options.bgImage"
          :bg-color="topics[`${item}`].options.bgColor"
          :txt-color="topics[`${item}`].options.txtColor"
          :link="`/bydel/${$route.params.district}/${topics[`${item}`].value}`"
        />
      </template>
    </div>
    <div class="main-container__map">
      <h3>{{ $t('topic.map') }}</h3>
      <v-leaflet :district="geoDistricts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VCategory from '../components/VCategory.vue';
import GraphCard from '../components/GraphCard.vue';
import VLeaflet from '../components/VLeaflet.vue';

import { topics } from '../config/topics';

export default {
  name: 'Topic',

  components: {
    GraphCard,
    VLeaflet,
    VCategory,
  },

  props: {
    district: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      topics: topics,
    };
  },

  computed: {
    ...mapGetters(['geoDistricts']),
  },
};
</script>

<style scoped></style>
