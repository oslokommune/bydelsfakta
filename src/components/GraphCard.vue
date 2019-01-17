<template>
  <div class="flex-item">
    <div class="card-container" v-for="(item, index) in settings" :key="index" :style="item.size === 'large' ? '1100px' : '550px'">
      <div class="graph__cards-container">
        <div class="tabs">
          <div>
            <a v-for="(tab, tabIndex) in item.tabs" :key="tabIndex" @click="activeTab(tabIndex)" :class=" active === tabIndex ? 'active' : ''">{{tab.label}}</a>
          </div>
          <div class="tabs--right">
            <span>Test</span>
            <v-btn flat>Test</v-btn>
          </div>
        </div>
        <div class="graph" v-if="item.tabs[active] !== undefined">
          <graph :settings="item.tabs[active]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Graph from './Graph.vue';

export default {
  name: 'GraphCard',
  components: { Graph },
  data() {
    return {
      active: 0,
    };
  },
  props: {
    settings: {
      type: Array,
      required: true,
    },
  },
  methods: {
    activeTab(index) {
      this.active = index;
    },
  },
};
</script>

<style scoped lang="scss">
.card-container {
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.34);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(170, 170, 170, 0.6);
}
.graph__cards-container {
  display: flex;

  flex-flow: row wrap;
  justify-content: start;
}

.flex-item {
  padding: 5px;
  margin-top: 10px;
}

.graph {
  padding: 2rem;
  width: 100%;
  border-top: 1px solid rgba(170, 170, 170, 0.6);
}

/* Style the tabs */
.tabs {
  display: flex;
  justify-content: space-between;
  background-color: rgb(246, 246, 246);
  width: 100%;
  border-radius: 4px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 14px 24px;
  transition: background-color 0.2s;
  background-color: rgb(246, 246, 246);
  font-weight: bold;
  color: rgb(41, 40, 88);
  border-radius: 2px;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: white;
  }
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  cursor: default;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    width: 99%;
    background-color: white;
  }

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 102%;
    width: 1px;
    background-color: rgba(170, 170, 170, 0.6);
  }
}
</style>
