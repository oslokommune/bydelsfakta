<template>
  <div></div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'LeafletVue',

  props: {
    district: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    console.log(window.document);
    var mymap = L.map('map').setView([36, 116], 4);
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);
  },
};
</script>

<style scoped>
#mapId {
  height: 300px;
}
</style>
