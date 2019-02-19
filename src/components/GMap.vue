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
        gestureHandling: 'cooperative',
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true,
        panControl: true,
        scrollwheel: true,
      });

      //Object.keys(this.bydel).forEach(district => map.data.addGeoJson(this.bydel[district]));
      map.data.addGeoJson(this.bydel);

      const bounds = new window.google.maps.LatLngBounds();

      map.data.setStyle({
        fillColor: 'blue',
        strokeWeight: 1,
      });

      if (this.bydel.features.length === 0) return;

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
        if (this.district.features.length === 0) return;
        //Object.keys(this.district).forEach(district => map.data.addGeoJson(this.district[district]));
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
