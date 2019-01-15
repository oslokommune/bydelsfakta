<template>
  <div class="flex-item">
    <v-card v-for="item in dataSettings" :key="item.size" :width="item.size === 'large' ? '1100px' : '500px'">
      <v-tabs v-model="active">
        <v-tab v-for="tab in item.tabs" :key="tab.label">{{tab.label}}</v-tab>
        <v-spacer />
        Oppdatert i fjor
        <v-btn flat>Test</v-btn>
      </v-tabs>
      <div>
        <graph :settings="item.tabs[active]" />
      </div>
    </v-card>
  </div>
</template>

<script>
import Graph from './Graph.vue';

export default {
  name: 'GraphCard',
  components: { Graph },
  data() {
    return {
      active: null,
      dataSettings: this.settings,
    };
  },
  props: {
    settings: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.flex-item {
  padding: 5px;
  margin-top: 10px;
}
</style>
