<template>
  <l-map ref="leafletMap" :zoom="zoom" :center="center" :options="mapOptions">
    <l-tile-layer ref="tileLayer" :url="url" :attribution="attribution" />
    <l-feature-group @layeradd="fitMap" ref="featureGroup">
      <l-geo-json ref="geojsonLayer" @layeradd="fitBounds" :geojson="district" :options-style="style">
        <l-popup>Hello!</l-popup>
      </l-geo-json>
    </l-feature-group>
  </l-map>
</template>

<script>
import { LPopup, LMap, LTileLayer, LFeatureGroup, LGeoJson, L } from 'vue2-leaflet';
import * as d3 from 'd3';
import { color, interpolator } from '../util/graph-templates/colors.js';

export default {
  name: 'VLeaflet',
  components: {
    LMap,
    LFeatureGroup,
    LTileLayer,
    LGeoJson,
    LPopup,
  },

  props: {
    district: {
      type: Object,
      required: true,
    },
    dataUrl: {
      type: String,
      required: false,
    },
    scale: {
      type: Array,
      required: false,
    },
  },

  mounted() {
    this.getData(this.dataUrl);
  },
  updated() {
    this.getData(this.dataUrl);
  },

  methods: {
    // Called for each added layer, calls fitMap that calls flyToBounds after all the layers are added to the map
    fitBounds(e) {
      if (Object.values(e.target._layers).length === this.district.features.length) {
        this.fitMap();
      }
    },

    fitMap(e) {
      this.$refs.leafletMap.mapObject.flyToBounds(this.$refs.geojsonLayer.getBounds(), {
        duration: 0.6,
      });
    },

    async getData(url) {
      if (!url) return;
      let data = await fetch(url).then(d => d.json().then(d => d.data));

      const colorStrength = d3
        .scaleLinear()
        .range([0, 1])
        .domain(this.scale);

      const layers = this.$refs.geojsonLayer.mapObject._layers;
      for (let key in layers) {
        const layer = layers[key];
        const layerId = layer.feature.properties.id;

        let dataValue = data.find(geo => geo.geography == layerId).values[0].value;
        const fill = interpolator(colorStrength(dataValue));

        const popupContent = `
          <h4>${layer.feature.properties.name}</h4>
          <p>${d3.format('n')(dataValue)}</p>
        `;

        layer.setStyle({ fillColor: fill, fillOpacity: 0.6 }).bindPopup(popupContent);
      }
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
        fillColor: color.yellow,
        fillOpacity: 0.7,
        color: color.purple,
        weight: 2,
      },
      mapOptions: {
        zoomControl: true,
        attributionControl: false,
        doubleClickZoom: false,
        dragging: true,
        scrollWheelZoom: false,
        touchZoom: false,
      },
    };
  },
};
</script>

<style lang="scss">
@import '../styles/_colors.scss';

.vue2leaflet-map {
  z-index: 0;
}

.leaflet-popup-content {
  padding: 1.5rem !important;
  margin: 0 !important;
  font-size: 1rem !important;
  font-family: 'OsloSans' !important;

  & > p,
  & > h4 {
    margin: 0 !important;
    padding: 0 !important;
  }
}

.leaflet-popup-content-wrapper {
  background: $color-purple !important;
  color: $color-yellow !important;
  border: 0 !important;
  border-radius: 0 !important;
}

.leaflet-popup-tip {
  background: $color-purple !important;
}
</style>
