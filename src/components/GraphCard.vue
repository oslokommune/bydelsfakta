<template>
  <div class="card-container" :class="{ large: settings.size === 'large' }">
    <div class="card">
      <div class="tabs">
        <div>
          <a
            v-for="(tab, index) in settings.tabs"
            :key="index"
            @click="activeTab(index)"
            :class=" active === index ? 'active' : ''"
          >{{tab.label}}</a>
        </div>
        <div class="tabs--right" style="display: flex;">
          <div style="position: relative">
            <button class="button__menu" @click="showDropdown = !showDropdown">
              <v-icon v-if="showDropdown" class="button__icon">close</v-icon>
              <v-icon v-if="!showDropdown" class="button__icon">menu</v-icon>
            </button>
            <div
              style="width: 200px; background-color: rgb(178, 210, 216); z-index: 100; position: absolute; right: 0"
              v-if="showDropdown"
            >
              <span>Coming soon</span>
            </div>
          </div>
        </div>
      </div>
      <graph v-if="settings.tabs[active] !== undefined" :settings="settings.tabs[active]"/>
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
      showDropdown: false,
    };
  },
  props: {
    settings: {
      type: Object,
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
@import './../styles/colors';

.card-container {
  padding: 0.5em;
  width: 50%;

  &.large {
    width: 100%;
  }
}

.card {
  overflow-x: hidden;
  background: white;
  border: 1px solid $color-grey-100;
  width: 100%;
  border-radius: 3px;
}

/* Style the tabs */
.tabs {
  display: flex;
  justify-content: space-between;
  background-color: rgb(246, 246, 246);
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid $color-grey-100;

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

.button__menu {
  width: 4rem;
  height: 3.5rem;
  border-top-right-radius: 3px;
  background-color: rgb(178, 210, 216);
}

.button__icon {
  font-size: 24px;
  font-weight: bold;
  color: rgb(41, 40, 88);
}
</style>
