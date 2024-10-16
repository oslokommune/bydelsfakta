<template>
  <div class="main-container">
    <ux-signals />

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
import UxSignals from '@/components/UxSignals.vue';
import { topics, topicNames } from '@/config/topics';
import districts from '@/config/geoData/districts';
import { getDistrictName } from '@/util';

export default {
  name: 'District',

  components: {
    VCategory,
    VLeaflet,
    UxSignals,
  },

  props: {
    district: {
      type: String,
      required: false,
      default: 'gamleoslo',
    },
  },

  data: () => ({
    names: topicNames,
    topics,
    chosenDistrict: {},
    districts,
  }),

  head() {
    let title = '';
    if (this.$route.fullPath === '/') {
      title = this.$t('title');
    } else if (this.compareDistricts || this.district === 'alle') {
      title = `${this.$t('navigationDrawer.linkCompare')} | Bydelsfakta`;
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
