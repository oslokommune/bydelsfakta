<template>
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-geo-json :geojson="district"></l-geo-json>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LGeoJson, L } from 'vue2-leaflet';

export default {
  name: 'LeafletVue',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },

  props: {
    district: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      zoom: 10,
      url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png',
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      center: L.latLng(59.91695, 10.746589),
    };
  },
};
</script>

<style scoped></style>
