<template>
  <div class="card-container" :class="{ large: settings.size === 'large' }">
    <div class="card">
      <div class="tabs">
        <div>
          <button
            v-for="(tab, index) in settings.tabs"
            :key="index"
            @click="activeTab(index)"
            :class="{ active: active === index }"
            class="tabs__button"
            aria-label="tab-button"
          >{{tab.label}}</button>
        </div>
        <div
          @keydown.escape="closeMenu()"
          v-click-outside="closeMenu"
          class="context-menu"
        >
          <button
            class="context-menu__button"
            @click="showDropdown = !showDropdown"
            aria-label="context-menu-button"
          >
            <i class="material-icons context-menu__button-icon">{{showDropdown ? 'close' : 'menu'}}</i>
          </button>
          <div
            v-if="showDropdown"
            class="context-menu__dropdown"
          >
            <a
              @click="savePng(settings.tabs[active].id)"
              role="button"
              class="context-menu__dropdown-item"
              tabIndex="0"
              aria-label="lagre graf som png"
            >
              <i class="material-icons context-menu__dropdown-item-icon">photo_size_select_actual</i>
              <span>Last ned som PNG</span>
            </a>
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
    closeMenu() {
      if (this.showDropdown) {
        this.showDropdown = false;
      }
    },

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
  background: white;
  border: 1px solid $color-grey-100;
  border-radius: 3px;
  box-shadow: 0 1.5px 3px rgba($color-grey-600, 0.95);
  width: 100%;
}

/* Style the tabs */
.tabs {
  background-color: $color-grey-50;
  border-bottom: 1px solid $color-grey-100;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  div:first-of-type a:first-child {
    border-top-left-radius: 3px;
  }

  &__button {
    background-color: $color-grey-50;
    color: rgb(41, 40, 88);
    cursor: pointer;
    float: left;
    font-weight: bold;
    transition: background-color 0.2s;
    padding: 14px 24px;

    &.active {
      background-color: #fff;
      box-shadow: 0 0 0 1px #e0e0e0;
      cursor: default;
      position: relative;

      &:after {
        background-color: white;
        bottom: -1px;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        right: 0;
      }
    }

    /* Change background color of tabs on hover */
    &:hover:not(.active) {
      background-color: #efefef;
      box-shadow: 0 0 0 1px #e0e0e0;
      position: relative;
    }
  }
}

.context-menu {
  position: relative;

  &__button {
    background-color: $color-light-blue-2;
    border-top-right-radius: 3px;
    height: 3.5rem;
    width: 4rem;
  }

  &__button-icon {
    color: rgb(41, 40, 88);
    font-size: 24px;
    font-weight: bold;
  }

  &__dropdown {
    background-color: rgb(178, 210, 216);
    position: absolute;
    right: 0;
    width: 200px;
    z-index: 1;

    &-item {
      box-shadow: 0 2px 2px 0 $color-grey-200;
      color: $color-purple;
      display: flex;
      flex-direction: row;
      font-weight: bold;
      padding: 0.5rem;

      &:hover {
        background-color: lighten($color-light-blue-2, 5%);
      }

      &-icon {
        color: rgb(41, 40, 88);
        font-size: 16px;
      }

      span {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
