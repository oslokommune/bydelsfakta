<template>
  <div style="width: 100%; height: 100%">
    <div v-if="settings.labels" class="legend">
      <h2 v-if="settings.heading || year" class="legend__heading">
        {{ settings.heading }} {{ year ? `(${year})` : '' }}
      </h2>
      <div class="legend__labels">
        <span v-for="(label, i) in settings.labels" :key="i" v-text="label"></span>
      </div>
      <div ref="colorstrip" class="legend__colorstrip" :style="gradient"></div>
    </div>
    <div class="container">
      <div id="map" ref="map"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import L from 'leaflet';
import { sum, select, scaleLinear } from 'd3';
import { GestureHandling } from 'leaflet-gesture-handling';
import * as locale from '@/util/graph-templates/locale';
import { color, interpolator } from '@/util/graph-templates/colors';

export default {
  name: 'VLeaflet',

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
    fullscreen: {
      type: Boolean,
      required: false,
      default: false,
    },
    districtLabels: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data: () => ({
    data: [],
    year: false,
    map: null,
    featureGroup: null,
    geojsonLayer: null,
    zoom: 10,
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution:
      '<a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    center: L.latLng(59.91695, 10.746589),
    style: {
      fillColor: '#222',
      fillOpacity: 0.3,
      color: color.purple,
      weight: 1,
    },
    mapOptions: {
      zoomControl: true,
      attributionControl: false,
      doubleClickZoom: true,
      dragging: true,
      scrollWheelZoom: false,
      touchZoom: true,
      gestureHandling: true,
    },
    scale: null,
  }),

  computed: {
    gradient() {
      const steps = [];
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

  watch: {
    district(geojson) {
      this.geojsonLayer.clearLayers();
      this.geojsonLayer.addData(geojson);
      this.fitMap();
    },

    fullscreen() {
      this.$nextTick(function () {
        this.map.invalidateSize();
        this.fitMap();
      });
    },
  },

  mounted() {
    this.initializeMap();

    if (this.dataUrl) {
      this.getData(this.dataUrl);
    }

    if (this.districtLabels) {
      this.$nextTick(function () {
        this.addPopup();
      });
    }
  },

  updated() {
    if (this.districtLabels) {
      this.addPopup();
    }
    if (this.dataUrl) {
      this.getData(this.dataUrl);
    }
  },

  methods: {
    initializeMap() {
      L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);
      this.map = L.map(this.$refs.map, this.mapOptions);
      this.map.setView(this.center, this.zoom);

      L.tileLayer(this.url, {
        attribution: this.attribution,
      }).addTo(this.map);

      this.featureGroup = L.featureGroup();
      this.featureGroup.on('layeradd', this.fitMap);
      this.featureGroup.addTo(this.map);

      this.geojsonLayer = L.geoJSON(this.district, {
        style: this.style,
      });
      this.geojsonLayer.addTo(this.featureGroup);
    },

    fitMap() {
      this.map.flyToBounds(this.geojsonLayer.getBounds(), {
        duration: 0.6,
      });
    },

    async getData(url) {
      if (!url) return;
      try {
        const { data } = await axios.get(url);

        this.meta = data[0].meta;
        this.data = data[0].data;
      } catch (err) {
        console.error(err);
        return;
      }

      this.createChoropleth(this.data);

      if (this.data && this.data[0] && this.data[0].values && this.data[0].values[0] && this.data[0].values[0].date) {
        this.year = this.data[0].values[0].date;
      } else {
        this.year = false;
      }
    },

    createChoropleth(data) {
      if (this.meta.scale && this.meta.scale.length !== 0) {
        if (this.settings.method === 'value') this.scale = this.meta.scale.value;
        else this.scale = this.meta.scale.ratio;
      } else {
        this.scale = this.settings.scale;
      }

      // Color calulator defined by the scale set in the map settings
      const colorStrength = scaleLinear().range([0, 1]).domain(this.scale);

      // Store data to create
      const allLayerData = [];

      // Map layers in the map with the data returned
      this.geojsonLayer.eachLayer((layer) => {
        const layerId = layer.feature.properties.id;
        const dataObj = data.find((geo) => geo.id === layerId.substring(6, 10) || geo.id === layerId);
        if (!dataObj || !dataObj.values || !dataObj.values.length) return;

        const { geography } = dataObj;

        // The data value depends on the method and/or series defined on the map settings object
        let dataValue;
        if (this.settings.method === 'avg') {
          const values = dataObj.values.map((d) => d.value);
          dataValue = sum(values.map((val, i) => val * i)) / sum(values);
        } else if (this.settings.series) {
          dataValue = dataObj.values[this.settings.series][this.settings.method];
        } else {
          dataValue = dataObj.values[0][this.settings.method];
        }

        // Calculate the fill color based on the value
        const fill = this.settings.reverse
          ? interpolator(1 - colorStrength(dataValue))
          : interpolator(colorStrength(dataValue));

        // Set number formatting for popup

        const format =
          this.settings.method === 'ratio' && !this.settings.showPermille
            ? locale.norwegianLocale.format('.3~p')
            : locale.norwegianLocale.format(',.0f');

        const popupContent = `
          <h4>${layer.feature.properties.name}</h4>
          <p>${this.settings.showPermille ? `${format(dataValue * 100)}‰` : format(dataValue)}</p>
        `;

        // Bind colors and popup content to the layer
        layer.setStyle({ fillColor: fill, fillOpacity: 0.6, weight: 1 }).bindPopup(popupContent);

        // Store the layer data for use in legend
        allLayerData.push({ dataValue, geography, layer });
      });

      // For each layer add an interactive dot on the legend.
      // Clicking the dot triggers the popop on the respective layer.
      select(this.$refs.colorstrip)
        .selectAll('.legend__dot')
        .data(allLayerData)
        .join('div')
        .attr('class', 'legend__dot')
        .transition()
        .style('left', (d) => `${colorStrength(d.dataValue) * 100}%`)
        .each((d, i, j) => {
          j[i].addEventListener('click', () => {
            d.layer.openPopup();
          });
        });
    },

    addPopup() {
      this.geojsonLayer.eachLayer((layer) => {
        const popupContent = `
          <h4>${layer.feature.properties.name}</h4>
        `;
        // Bind colors and popup content to the layer
        layer.bindPopup(popupContent);
      });
    },
  },
};
</script>

<style lang="scss">
@use '@/styles/colors' as *;
@use '@/styles/variables' as *;

.container,
#map {
  z-index: 0;
  width: 100%;
  height: 100%;
}

.legend + .container {
  height: calc(100% - 90px);
}

// https://github.com/Leaflet/Leaflet/issues/3575
.leaflet-tile-container img {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
}

.legend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90px;
  padding: 1em;
  font-weight: 500;
  font-size: $font-small;
  border-bottom: 1px solid $color-grey-100;

  &__heading {
    margin: 0 0 0.5rem;
    padding: 0;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0;
    text-align: center;
    text-transform: none;
  }

  &__labels {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  &__colorstrip {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 0.5em;
    margin: 0.25em auto 0;
  }

  &__dot {
    position: absolute;
    width: 0.8em;
    height: 0.8em;
    background: rgba(black, 0.4);
    border: 2px solid rgba(black, 0.5);
    border-radius: 50%;
    transform: translate(-0.15em, -0.15em);
    transform-origin: 50%;
    mix-blend-mode: multiply;
    transition: all 0.1s;

    &:hover {
      z-index: 2;
      background-color: white;
      border: 2px solid $color-purple;
      transform: translate(-0.15em, -0.15em) scale(1.6);
      opacity: 1;
      mix-blend-mode: unset;
    }
  }
}

.leaflet-popup-content {
  margin: 0 !important;
  padding: 1.5rem !important;
  font-size: 1rem !important;
  font-family: 'OsloSans', serif !important;

  & > p,
  & > h4 {
    margin: 0 !important;
    padding: 0 !important;
  }
}

.leaflet-popup-content-wrapper {
  color: $color-yellow !important;
  background: $color-purple !important;
  border: 0 !important;
  border-radius: 0 !important;
}

.leaflet-popup-tip {
  background: $color-purple !important;
}
</style>
