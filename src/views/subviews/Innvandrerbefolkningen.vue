<template>
  <div class="main-container">
    <div class="main-container__cards">
      <h2 class="section-heading">Innvandrerbefolkningen i bydelene</h2>
      <graph-card v-for="(card, index) in settings.befolkning" :key="`innvandrer-befolkning-${index}`"  :settings="card" />
      <h2 class="section-heading">Befolkning under 16 år fordelt på innvandrerbakgrunn</h2>
      <graph-card v-for="(card, index) in settings.under16" :key="`innvandrer-under16-${index}`"  :settings="card" />
    </div>
    <div class="main-container__map">
      <h3>Kart</h3>
    </div>
  </div>
</template>

<script>
import GraphCard from '../../components/GraphCard.vue';

export default {
  name: 'Innvandrerbefolkningen',
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
