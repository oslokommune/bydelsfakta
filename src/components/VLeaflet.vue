<template>
  <div style="height: 100%; width: 100%;">
    <div class="legend" v-if="settings.labels">
      <h2 class="legend__heading" v-if="settings.heading">{{ settings.heading }}</h2>
      <div class="legend__labels">
        <span v-for="(label, i) in settings.labels" :key="i" v-text="label"></span>
      </div>
      <div class="colorstrip" ref="colorstrip" :style="gradient"></div>
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
import { GestureHandling } from 'leaflet-gesture-handling';
import { color, interpolator } from '../util/graph-templates/colors';
import * as locale from '@/util/graph-templates/locale';

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
      if (this.settings.reverse) {
        for (let i = 1; i >= 0; i -= 0.05) {
          steps.push(interpolator(i));
        }
      } else {
        for (let i = 0; i <= 1; i += 0.05) {
          steps.push(interpolator(i));
        }
      }
      return `background-image: linear-gradient(to right, ${steps})`;
    },
  },

  mounted() {
    L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);
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
      // Color calulator defined by the scale set in the map settings
      const colorStrength = d3
        .scaleLinear()
        .range([0, 1])
        .domain(this.settings.scale);

      // Store data to create
      let allLayerData = [];

      // Find all the layers on the map
      const layers = this.$refs.geojsonLayer.mapObject._layers;

      // Map layers in the map with the data returned
      for (let key in layers) {
        const layer = layers[key];
        let layerId = layer.feature.properties.id;
        const dataObj = data.find(
          geo => geo.id === layerId.substring(6, 10) || geo.id === layerId || geo.geography === layerId
        );
        if (!dataObj || !dataObj.values || !dataObj.values.length) return;

        const geography = dataObj.geography;

        // The data value depends on the method and/or series defined on the map settings object
        let dataValue;
        if (this.settings.method === 'avg') {
          const values = dataObj.values.map(d => d.value);
          dataValue = d3.sum(values.map((val, i) => val * i)) / d3.sum(values);
        } else {
          if (this.settings.series) {
            dataValue = dataObj.values[this.settings.series][this.settings.method];
          } else {
            dataValue = dataObj.values[0][this.settings.method];
          }
        }

        // Calculate the fill color based on the value
        const fill = this.settings.reverse
          ? interpolator(1 - colorStrength(dataValue))
          : interpolator(colorStrength(dataValue));

        // Set number formatting for popup
        const format =
          this.settings.method === 'ratio'
            ? locale.norwegianLocale.format('.3~p')
            : locale.norwegianLocale.format(',.0f');

        const popupContent = `
          <h4>${layer.feature.properties.name}</h4>
          <p>${format(dataValue)}</p>
        `;

        // Bind colors and popup content to the layer
        layer.setStyle({ fillColor: fill, fillOpacity: 0.6, weight: 1 }).bindPopup(popupContent);

        // Store the layer data for use in legend
        allLayerData.push({ dataValue, geography, layer });
      }

      // For each layer add an interactive dot on the legend.
      // Clicking the dot triggers the popop on the respective layer.
      d3.select(this.$refs.colorstrip)
        .selectAll('.legend-dot')
        .data(allLayerData)
        .join('div')
        .attr('class', 'legend-dot')
        .transition()
        .style('left', d => colorStrength(d.dataValue) * 100 + '%')
        .each((d, i, j) => {
          j[i].addEventListener('click', () => {
            d.layer.openPopup();
          });
        });
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
        fillColor: '#222',
        fillOpacity: 0.3,
        color: color.purple,
        weight: 4,
      },
      mapOptions: {
        zoomControl: true,
        attributionControl: false,
        doubleClickZoom: false,
        dragging: true,
        scrollWheelZoom: false,
        touchZoom: true,
        gestureHandling: true,
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
  height: calc(100% - 90px);
}

.vue2leaflet-map {
  z-index: 0;
}

.legend {
  border-bottom: 1px solid $color-grey-100;
  display: flex;
  flex-direction: column;
  font-size: $font-small;
  font-weight: 500;
  height: 90px;
  justify-content: center;
  padding: 1em;

  &__heading {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0;
    margin: 0 0 0.5rem;
    padding: 0;
    text-align: center;
    text-transform: none;
  }

  &__labels {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
}

.colorstrip {
  height: 0.5em;
  margin: 0.25em auto 0;
  max-width: 500px;
  position: relative;
  width: 100%;
}

.legend-dot {
  background: rgba(black, 0.4);
  border: 2px solid rgba(black, 0.5);
  border-radius: 50%;
  height: 0.8em;
  mix-blend-mode: multiply;
  position: absolute;
  transform: translate(-0.15em, -0.15em);
  transform-origin: 50%;
  transition: all 0.1s;
  width: 0.8em;

  &:hover {
    background-color: white;
    border: 2px solid $color-purple;
    mix-blend-mode: none;
    opacity: 1;
    transform: translate(-0.15em, -0.15em) scale(1.6);
    z-index: 2;
  }
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
