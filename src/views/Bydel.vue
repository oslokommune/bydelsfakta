<template>
  <div class="main-container">
    <div class="main-container__cards">
      <card-image
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
      <g-map :district="geoDistricts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardImage from '../components/CardImage.vue';
import GMap from '../components/GMap.vue';
import subpages from '../config/subpages';
import districts from '../config/geoData/districts';

export default {
  name: 'Bydel',
  components: { CardImage, GMap },
  props: {
    bydel: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters(['geoDistricts']),
  },

  created() {
    this.chosenDistrict = this.districts[`${this.$route.params.bydel}`];
  },

  beforeUpdate() {
    this.chosenDistrict = this.districts[`${this.$route.params.bydel}`];
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
