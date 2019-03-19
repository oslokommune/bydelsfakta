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
          :bg-color="topics[`${topicName}`].options.bgColor"
          :txt-color="topics[`${topicName}`].options.txtColor"
          :district="district"
          :disabled="disabledTopics.includes(topicName)"
        />
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
import VLeaflet from '../components/VLeaflet.vue';
import { topics, topicNames, disabledTopics } from '../config/topics';
import districts from '../config/geoData/districts';

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

  computed: {
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
