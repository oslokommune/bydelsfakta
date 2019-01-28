<template>
  <div class="main-container">
    <div class="main-container__cards">
      <h2 class="section-heading">Befolkningsutvikling og fremskriving</h2>
      <graph-card
        v-for="(card, index) in settings.fremskriving"
        :key="`folkemengde-fremskriving-${index}`"
        :settings="card"
      />
      <graph-card
        v-for="(card, index) in settings.utvikling"
        :key="`folkemengde-utvikling-${index}`"
        :settings="card"
      />
      <h2 class="section-heading">Nøkkeltall for delbydelene</h2>
      <graph-card
        v-for="(card, index) in settings.nokkeltall"
        :key="`folkemengde-nokkeltall-${index}`"
        :settings="card"
      />
    </div>
    <div class="main-container__map">
      <h3>Kart</h3>
    </div>
  </div>
</template>

<script>
import GraphCard from '../../components/GraphCard.vue';

export default {
  name: 'Folkemengde',
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
