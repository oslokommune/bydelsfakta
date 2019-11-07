<template>
  <div class="main-container">
    <div class="main-container__cards main-container__cards--district">
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
      <div class="main-container__description">
        <v-leaflet :district="geoDistricts" :district-labels="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import VCategory from '../components/VCategory';
import VLeaflet from '../components/VLeaflet';
import { topics, topicNames } from '../config/topics';
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
      default: 'gamleoslo',
    },
  },

  metaInfo() {
    return {
      title:
        this.$route.fullPath === '/'
          ? 'Bydelsfakta – Visualisering av statistikk om befolkning, levekår og boforhold'
          : this.compareDistricts || this.district === 'alle'
          ? 'Sammenlign bydeler | Bydelsfakta'
          : `${getDistrictName(this.district)} | Bydelsfakta`,
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
    };
  },
};
</script>
