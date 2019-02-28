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
          :link="`${$route.path}/${topics[`${topicName}`].value}`"
        />
      </div>
    </div>
    <div class="main-container__map">
      <h3>{{ $t('district.map') }}</h3>
      <v-leaflet :district="geoDistricts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VCategory from '../components/VCategory.vue';
import VLeaflet from '../components/VLeaflet.vue';
import { topics, topicNames } from '../config/topics';
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
      required: true,
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.topics-grid {
  min-width: 300px;
  padding: 0 1em;
  flex: 2 1 800px;
  justify-content: flex-start;
  display: grid;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  grid-template-rows: auto;

  grid-template-columns: repeat(1, 1fr);
  @media screen and (min-width: $break-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: $break-md) {
    grid-template-columns: repeat(3, 1fr);
  }

  // Fallback to flexbox
  @media all and (-ms-high-contrast: none) {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>

