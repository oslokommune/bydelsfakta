<template>
  <div class="alder-container">
    <div class="alder__cards-container">
      <graph-card :settings="settings.aldersgrupper" />
    </div>
    <div class="alder__map-container">
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
.alder-container {
  display: flex;
}

.alder__cards-container {
  display: flex;
  padding: 2rem;

  flex-flow: row wrap;
  justify-content: start;

  flex-basis: auto;
}

.alder__map-container {
  display: flex;
  padding: 2rem;

  flex-flow: row wrap;
  justify-content: start;
  flex: 0 0 600px;
}
</style>
