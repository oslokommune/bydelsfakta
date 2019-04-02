<template>
  <div style="height: 100%; width: 100%;">
    <div class="legend" v-if="settings.labels">
      <div class="legend__labels">
        <span v-for="(label, i) in settings.labels" :key="i" v-text="label"></span>
      </div>
      <div class="colorstrip" :style="gradient"></div>
    </div>
    <div class="container">
      <l-map ref="leafletMap" :zoom="zoom" :center="center" :options="mapOptions">
        <l-tile-layer ref="tileLayer" :url="url" :attribution="attribution" />
        <l-feature-group @layeradd="fitMap" ref="featureGroup">
          <l-geo-json ref="geojsonLayer" @layeradd="fitBounds" :geojson="district" :options-style="style"></l-geo-json>
        </l-feature-group>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LFeatureGroup, LGeoJson } from 'vue2-leaflet';
import L from 'leaflet';
import * as d3 from 'd3';
import { color, interpolator } from '../util/graph-templates/colors';

export default {
  name: 'VLeaflet',
  components: {
    LMap,
    LFeatureGroup,
    LTileLayer,
    LGeoJson,
  },

  props: {
    settings: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    district: {
      type: Object,
      required: true,
    },
    dataUrl: {
      type: String,
      required: false,
      default: '',
    },
  },

  computed: {
    gradient() {
      let steps = [];
      for (let i = 0; i <= 1; i += 0.1) {
        steps.push(interpolator(i));
      }

      return `background-image: linear-gradient(to right, ${steps})`;
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

    fitMap() {
      this.$refs.leafletMap.mapObject.flyToBounds(this.$refs.geojsonLayer.getBounds(), {
        duration: 0.6,
      });
    },

    async getData(url) {
      if (!url) return;
      this.data = await fetch(url).then(d => d.json().then(d => d.data));
      this.createChoropleth(this.data);
    },

    createChoropleth(data) {
      const colorStrength = d3
        .scaleLinear()
        .range([0, 1])
        .domain(this.settings.scale);

      let allDataValues = [];

      const layers = this.$refs.geojsonLayer.mapObject._layers;
      for (let key in layers) {
        const layer = layers[key];
        const layerId = layer.feature.properties.id;
        let dataValue;

        if (this.settings.method === 'avg') {
          let values = data.find(geo => geo.geography == layerId).values.map(d => d.value);
          let mean = d3.sum(values.map((val, i) => val * i)) / d3.sum(values);

          dataValue = mean;
        } else {
          if (this.settings.series) {
            dataValue = data.find(geo => geo.geography === layerId).values[this.settings.series][this.settings.method];
          } else {
            dataValue = data.find(geo => geo.geography === layerId).values[0][this.settings.method];
          }
        }

        allDataValues.push(dataValue);

        const fill = interpolator(colorStrength(dataValue));

        const popupContent = `
          <h4>${layer.feature.properties.name}</h4>
          <p>${d3.format('n')(dataValue)}</p>
        `;

        layer.setStyle({ fillColor: fill, fillOpacity: 0.6 }).bindPopup(popupContent);
      }

      // Add circles
      d3.select('.colorstrip')
        .selectAll('.circle')
        .data(allDataValues)
        .join('div')
        .attr('class', 'circle')
        .transition()
        .style('left', d => colorStrength(d) * 100 + '%');
    },
  },

  data() {
    return {
      data: [],
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
@import '../styles/variables';

.container {
  height: 100%;
  width: 100%;
}

.legend + .container {
  height: calc(100% - 50px);
}

.vue2leaflet-map {
  z-index: 0;
}

.legend {
  border-bottom: 1px solid $color-grey-100;
  font-size: $font-small;
  font-weight: 500;
  height: 50px;
  letter-spacing: 0.05em;
  padding: 1em;
  text-transform: uppercase;

  &__labels {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 500px;
  }
}

.colorstrip {
  height: 0.5em;
  margin: 0.25em auto 0;
  max-width: 500px;
  position: relative;
  width: 100%;
}

.circle {
  background: rgba(black, 0.4);
  border: 2px solid rgba(black, 0.5);
  border-radius: 50%;
  height: 0.8em;
  mix-blend-mode: multiply;
  position: absolute;
  transform: translate(-0.15em, -0.15em);
  width: 0.8em;
}

.leaflet-popup-content {
  font-family: 'OsloSans', serif !important;
  font-size: 1rem !important;
  margin: 0 !important;
  padding: 1.5rem !important;

  & > p,
  & > h4 {
    margin: 0 !important;
    padding: 0 !important;
  }
}

.leaflet-popup-content-wrapper {
  background: $color-purple !important;
  border: 0 !important;
  border-radius: 0 !important;
  color: $color-yellow !important;
}

.leaflet-popup-tip {
  background: $color-purple !important;
}
</style>
