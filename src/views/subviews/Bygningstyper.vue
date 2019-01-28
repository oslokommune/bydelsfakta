<template>
  <div class="main-container">
    <div class="main-container__cards">
      <h2 class="section-heading">Eierform</h2>
      <graph-card v-for="(card, index) in settings.totalt" :key="`bygningstyper-totalt-${index}`"  :settings="card" />
      <graph-card v-for="(card, index) in settings.spesifikk" :key="`bygningstyper-spesifikk-${index}`"  :settings="card" />
    </div>
    <div class="main-container__map">
      <h3>Kart</h3>
    </div>
  </div>
</template>

<script>
import GraphCard from '../../components/GraphCard.vue';

export default {
  name: 'Bygningstyper',
  components: { GraphCard },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
