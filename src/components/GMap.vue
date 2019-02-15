<template>
  <gmap-map ref="mapRef" :center="{ lat: 0, lng: 0 }" :zoom="1" style="width: 330px; height: 330px"></gmap-map>
</template>

<script>
import mapstyles from '../config/mapstyles';

export default {
  name: 'GMap',
  props: {
    district: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      bydel: this.district,
    };
  },

  mounted() {
    this.$refs.mapRef.$mapPromise.then(map => {
      map.setOptions({
        center: { lat: 0, lng: 0 },
        styles: mapstyles,
        gestureHandling: 'none',
        disableDefaultUI: true,
        zoomControl: false,
        fullscreenControl: false,
        panControl: false,
        scrollwheel: false,
      });

      map.data.addGeoJson(this.bydel);

      const bounds = new window.google.maps.LatLngBounds();

      map.data.setStyle({
        fillColor: 'blue',
        strokeWeight: 1,
      });

      map.data.forEach(feature => {
        feature.getGeometry().forEachLatLng(latlng => {
          bounds.extend(latlng);
        });
      });

      map.fitBounds(bounds);
    });
  },

  watch: {
    district() {
      this.$refs.mapRef.$mapPromise.then(map => {
        map.data.forEach(feature => map.data.remove(feature));
        map.data.addGeoJson(this.district);

        const bounds = new window.google.maps.LatLngBounds();

        map.data.forEach(feature => {
          feature.getGeometry().forEachLatLng(latlng => {
            bounds.extend(latlng);
          });
        });

        map.fitBounds(bounds);
      });
    },
  },
};
</script>

<style scoped></style>
