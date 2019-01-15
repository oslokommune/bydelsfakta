<template>
  <div>
    <graph-card :settings="settings.aldersgrupper" />
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
