<template>
  <div class="main-container">
    <div class="main-container__cards">
      <graph-card v-for="(card, index) in settings.median" :key="`alder-median-${index}`" :settings="card" />
      <graph-card v-for="(card, index) in settings.populasjonspyramide" :key="`alder-pyramide-${index}`"  :settings="card" />
      <graph-card v-for="(card, index) in settings.aldersgrupper" :key="`alder-grupper-${index}`"  :settings="card" />
    </div>
    <div class="main-container__map">
      <h3>Kart</h3>
    </div>
  </div>
</template>

<script>
import GraphCard from '../../components/GraphCard.vue';

export default {
  name: 'Alder',
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
