<template>
  <div class="main-container">
    <div class="main-container__cards">
      <graph-card v-for="(card, index) in settings.boligpriser" :key="`boligpriser-${index}`"  :settings="card" />
    </div>
    <div class="main-container__map">
      <h3>Kart</h3>
    </div>
  </div>
</template>

<script>
import GraphCard from '../../components/GraphCard.vue';

export default {
  name: 'Boligpriser',
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
