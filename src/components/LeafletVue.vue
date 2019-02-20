<template>
  <l-map ref="leafletMap" :zoom="zoom" :center="center" :options="mapOptions">
    <l-tile-layer ref="tileLayer" :url="url" :attribution="attribution"></l-tile-layer>
    <l-feature-group @layeradd="fitMap" ref="featureGroup">
      <l-geo-json ref="geojsonLayer" @layeradd="fitBounds" :geojson="district" :options-style="style"></l-geo-json>
    </l-feature-group>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LFeatureGroup, LGeoJson, L } from 'vue2-leaflet';

export default {
  name: 'LeafletVue',
  components: {
    LMap,
    LFeatureGroup,
    LTileLayer,
    LGeoJson,
  },

  props: {
    district: {
      type: Object,
      required: true,
    },
  },

  methods: {
    // Called for each added layer, calls fitMap that calls flyToBounds after all the layers are added to the map
    fitBounds(e) {
      if (Object.values(e.target._layers).length === this.district.features.length) {
        this.fitMap();
      }
    },

    fitMap() {
      this.$refs.leafletMap.mapObject.flyToBounds(this.$refs.geojsonLayer.getBounds(), {
        duration: 0.6,
      });
    },
  },

  data() {
    return {
      zoom: 10,
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution:
        '<a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      center: L.latLng(59.91695, 10.746589),
      style: {
        fillColor: 'blue',
        weight: 1,
      },
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        doubleClickZoom: false,
        dragging: false,
        scrollWheelZoom: false,
        touchZoom: false,
      },
    };
  },
};
</script>

<style scoped></style>
