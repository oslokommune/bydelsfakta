<template>
  <div class="main-container">
    <div class="main-container__cards main-container__cards--district">
      <div class="topics-grid">
        <v-category
          v-for="topicName in names"
          :id="topics[`${topicName}`].value"
          :key="topics[`${topicName}`].value"
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
import VCategory from '@/components/VCategory.vue';
import VLeaflet from '@/components/VLeaflet.vue';
import { topics, topicNames } from '@/config/topics';
import districts from '@/config/geoData/districts';
import { getDistrictName } from '@/util';

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

  data() {
    return {
      names: topicNames,
      topics,
      chosenDistrict: {},
      districts,
    };
  },

  metaInfo() {
    let title = '';
    if (this.$route.fullPath === '/') {
      title = 'Bydelsfakta – Visualisering av statistikk om befolkning, levekår og boforhold';
    } else if (this.compareDistricts || this.district === 'alle') {
      title = 'Sammenlign bydeler | Bydelsfakta';
    } else title = `${getDistrictName(this.district)} | Bydelsfakta`;

    return {
      title,
    };
  },

  computed: {
    ...mapState(['productionMode', 'compareDistricts']),
    ...mapGetters(['geoDistricts']),
  },
};
</script>
