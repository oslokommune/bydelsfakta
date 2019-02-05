<template>
  <div class="main-container">
    <div class="main-container__cards">
      <h2 class="section-heading">Blokkleilighet</h2>
      <graph-card v-for="(card, index) in settings.blokk" :key="`kommunale-boliger-${index}`" :settings="card" />
    </div>
    <div class="main-container__map">
      <h3>Kart</h3>
    </div>
  </div>
</template>
<script>
import GraphCard from '../../components/GraphCard.vue';

export default {
  name: 'Kommunaleboliger',
  components: { GraphCard },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
