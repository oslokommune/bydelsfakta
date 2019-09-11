<template>
  <div class="main-container">
    <div class="main-container__cards">
      <template v-for="(card, cardIndex) in topics[topic].cards">
        <graph-card
          :key="`card-${cardIndex}`"
          :settings="card"
          v-if="
            card.production === productionMode && card.production !== null
              ? true
              : card.production === true && productionMode === false
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
            :district="district"
            :disabled="
              topics[`${item}`].production === productionMode && topics[`${item}`].production !== null
                ? false
                : topics[`${item}`].production === true && productionMode === false
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
import VCategory from '../components/VCategory';
import GraphCard from '../components/GraphCard';

import { topics, disabledTopics } from '../config/topics';
import { getDistrictName, getHumanReadableTopic } from '../util';

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

  metaInfo() {
    return {
      title: `${getHumanReadableTopic(this.topic)} | ${
        this.compareDistricts ? 'Sammenlign bydeler' : getDistrictName(this.district)
      } | Bydelsfakta`,
    };
  },

  data() {
    return {
      topics: topics,
      disabledTopics: disabledTopics,
    };
  },

  computed: {
    ...mapState(['productionMode', 'compareDistricts']),
    ...mapGetters(['geoDistricts']),
  },
};
</script>

<style scoped>
.related {
  width: 100%;
}
</style>
