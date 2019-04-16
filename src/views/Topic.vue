<template>
  <div class="main-container">
    <div class="main-container__cards">
      <template v-for="(card, cardIndex) in topics[topic].cards">
        <graph-card
          :key="`card-${cardIndex}`"
          :settings="card"
          v-if="
            card.show === productionMode && card.show !== null
              ? true
              : card.show === true && productionMode === false
              ? true
              : productionMode === null
          "
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
            :txt-color="topics[`${item}`].options.txtColor"
            :district="$route.params.district"
            :disabled="
              topics[`${topic}`].show === productionMode && topics[`${topic}`].show !== null
                ? false
                : topics[`${topic}`].show === true && productionMode === false
                ? false
                : productionMode !== null
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import VCategory from '../components/VCategory.vue';
import GraphCard from '../components/GraphCard.vue';

import { topics, disabledTopics } from '../config/topics';

export default {
  name: 'Topic',
  components: {
    GraphCard,
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
    ...mapState(['productionMode']),
    ...mapGetters(['geoDistricts']),
  },
};
</script>

<style scoped>
.related {
  width: 100%;
}
</style>
