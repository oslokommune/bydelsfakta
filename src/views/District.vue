<template>
  <div class="main-container">
    <div class="main-container__cards">
      <div class="topics-grid">
        <v-category
          v-for="topicName in names"
          :key="topics[`${topicName}`].value"
          :id="topics[`${topicName}`].value"
          :category="topics[`${topicName}`].options.kategori"
          :topic="topics[`${topicName}`].options.tema"
          :bg-image="topics[`${topicName}`].options.bgImage"
          :txt-color="topics[`${topicName}`].options.txtColor"
          :district="district"
          :disabled="
            topics[`${topicName}`].production === productionMode && topics[`${topicName}`].production !== null
              ? false
              : topics[`${topicName}`].production === true && productionMode === false
              ? false
              : productionMode !== null
          "
        />
      </div>
    </div>
    <div class="main-container__map">
      <v-leaflet :district="geoDistricts" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import VCategory from '../components/VCategory.vue';
import VLeaflet from '../components/VLeaflet.vue';
import { topics, topicNames, disabledTopics } from '../config/topics';
import districts from '../config/geoData/districts';
import { getDistrictName } from '../util';

export default {
  name: 'District',
  components: {
    VCategory,
    VLeaflet,
  },

  props: {
    district: {
      type: String,
      required: false,
      default: 'alle',
    },
  },

  metaInfo() {
    return {
      title: `${this.compareDistricts ? 'Sammenlign bydeler' : getDistrictName(this.district)} | Bydelsfakta`,
    };
  },

  computed: {
    ...mapState(['productionMode', 'compareDistricts']),
    ...mapGetters(['geoDistricts']),
  },

  data() {
    return {
      names: topicNames,
      topics: topics,
      chosenDistrict: {},
      districts: districts,
      disabledTopics: disabledTopics,
    };
  },
};
</script>
