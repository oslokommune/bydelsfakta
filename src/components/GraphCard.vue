<template>
  <div class="flex-item">
    <div
      class="card-container"
      v-for="(item, index) in settings"
      :key="index"
      :style="item.size === 'large' ? '1100px' : '550px'"
    >
      <div class="graph__cards-container">
        <div class="tabs">
          <div>
            <a
              v-for="(tab, tabIndex) in item.tabs"
              :key="tabIndex"
              @click="activeTab(tabIndex)"
              :class=" active === tabIndex ? 'active' : ''"
            >{{tab.label}}</a>
          </div>
          <div class="tabs--right">
            <span>Test</span>
            <v-btn flat>Test</v-btn>
          </div>
        </div>
        <div class="graph" v-if="item.tabs[active] !== undefined">
          <graph :settings="item.tabs[active]"/>
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

  div:first-of-type a:first-child {
    border-top-left-radius: 3px;
  }

  a {
    float: left;
    cursor: pointer;
    padding: 14px 24px;
    transition: background-color 0.2s;
    background-color: rgb(246, 246, 246);
    font-weight: bold;
    color: rgb(41, 40, 88);

    &.active {
      background-color: #fff;
      cursor: default;
      position: relative;
      box-shadow: 0 0 0 1px #e0e0e0;

      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0px;
        height: 2px;
        background-color: white;
      }
    }

    /* Change background color of tabs on hover */
    &:hover:not(.active) {
      background-color: #efefef;
      position: relative;
      box-shadow: 0 0 0 1px #e0e0e0;
    }
  }
}
</style>
