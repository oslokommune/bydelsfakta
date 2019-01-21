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
              <v-icon v-if="showDropdown" class="button__menu-icon">close</v-icon>
              <v-icon v-if="!showDropdown" class="button__menu-icon">menu</v-icon>
            </button>
            <div
              style="width: 200px; background-color: rgb(178, 210, 216); z-index: 1; position: absolute; right: 0"
              v-if="showDropdown"
            >
              <div @click="savePng(settings.tabs[active].id)" role="button" class="button__item">
                <v-icon color="rgb(41, 40, 88)" class="button__item--icon">photo_size_select_actual</v-icon>
                <span>Save as PNG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <graph
        v-if="settings.tabs[active] !== undefined"
        :settings="settings.tabs[active]"
        ref="graph"
      />
    </div>
  </div>
</template>

<script>
import { saveSvgAsPng } from 'save-svg-as-png';
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
    savePng(id) {
      const file = this.$refs.graph.$refs.svg;
      const filename = `${this.$route.params.bydel}_${id}.png`;
      saveSvgAsPng(file, filename, {
        backgroundColor: 'white',
        encoderOptions: 1,
        width: file.width.baseVal.value + 40,
        height: file.height.baseVal.value + 40,
        top: -20,
        left: -20,
      });
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
  box-shadow: 0 1.5px 3px rgba($color-grey-600, 0.95);
}

/* Style the tabs */
.tabs {
  display: flex;
  justify-content: space-between;
  background-color: $color-grey-50;
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
    background-color: $color-grey-50;
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

.button {
  &__menu {
    width: 4rem;
    height: 3.5rem;
    border-top-right-radius: 3px;
    background-color: $color-light-blue-2;
  }

  &__menu-icon {
    font-size: 24px;
    font-weight: bold;
    color: rgb(41, 40, 88);
  }

  &__items {
    width: 200px;
    background-color: $color-light-blue-2;
    z-index: 1;
    position: absolute;
    right: 0;
  }

  &__item {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    color: $color-purple;
    padding: 0.5rem;
    box-shadow: 0 2px 2px 0 $color-grey-200;

    &:hover {
      background-color: lighten($color-light-blue-2, 5%);
    }

    &--icon {
      font-size: 16px;
    }

    span {
      margin-left: 0.5rem;
    }
  }
}
</style>
