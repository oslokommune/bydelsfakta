<template>
  <div class="main-container">
    <div class="main-container__cards">
      <graph-card :settings="settings.fremskriving" />
      <graph-card :settings="settings.utvikling" />
      <graph-card :settings="settings.nokkeltall" />
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
