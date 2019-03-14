<template>
  <div class="main-container">
    <div class="main-container__cards">
      <template v-for="subpage in topics[`${topic}`].subpages">
        <graph-card
          v-for="(card, cardIndex) in subpage.graphs"
          :key="`${subpage.name}-${cardIndex}`"
          :settings="card"
        />
      </template>
      <div class="related">
        <h2 class="section-heading">{{ $t('topic.seeMore') }}</h2>
        <div class="topics-grid">
          <v-category
            v-for="(item, relatedIndex) in topics[`${topic}`].related"
            :key="`related-${relatedIndex}`"
            :id="topics[`${item}`].value"
            :category="topics[`${item}`].options.kategori"
            :topic="topics[`${item}`].options.tema"
            :bg-image="topics[`${item}`].options.bgImage"
            :bg-color="topics[`${item}`].options.bgColor"
            :txt-color="topics[`${item}`].options.txtColor"
            :district="$route.params.district"
            :disabled="disabledTopics.find(topicName => topicName === item)"
          />
        </div>
      </div>
    </div>
    <div class="main-container__map">
      <v-leaflet :district="geoDistricts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VCategory from '../components/VCategory.vue';
import GraphCard from '../components/GraphCard.vue';
import VLeaflet from '../components/VLeaflet.vue';

import { topics, disabledTopics } from '../config/topics';

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
      disabledTopics: disabledTopics,
    };
  },

  computed: {
    ...mapGetters(['geoDistricts']),
  },
};
</script>

<style scoped>
.related {
  width: 100%;
}
</style>
