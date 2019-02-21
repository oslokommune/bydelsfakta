<template>
  <div class="main-container">
    <div class="main-container__cards">
      <v-category
        v-for="item in items"
        :key="item.value"
        :id="item.value"
        :kategori="item.options.kategori"
        :tema="item.options.tema"
        :bg-image="item.options.bgImage"
        :bg-color="item.options.bgColor"
        :txt-color="item.options.txtColor"
        :link="`${$route.path}/${item.value}`"
      />
    </div>
    <div class="main-container__map">
      <h3>Bydelskart</h3>
      <v-leaflet :district="geoDistricts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VCategory from '../components/VCategory.vue';
import VLeaflet from '../components/VLeaflet.vue';
import subpages from '../config/subpages';
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
      items: subpages,
      chosenDistrict: {},
      districts: districts,
    };
  },
};
</script>
