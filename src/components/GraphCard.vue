<template>
  <div class="card-container" :class="{ large: settings.size === 'large' }">
    <div class="card">
      <nav class="card__header">
        <div class="tabs" role="tablist">
          <button
            role="tab"
            :aria-selected="{ true: active === index }"
            :aria-label="tab.label"
            :id="`tabButton-${index}`"
            v-for="(tab, index) in settings.tabs"
            :key="index"
            @click="activeTab(index)"
            :class="{ active: active === index }"
            class="tabs__button"
            v-text="tab.label"
          ></button>
        </div>
        <div @keydown.escape="closeMenu()" v-click-outside="closeMenu" class="context-menu" role="menu">
          <button
            class="context-menu__button"
            @click="showDropdown = !showDropdown"
            aria-haspopup="true"
            :aria-label="showDropdown ? 'Lukk meny' : 'åpne meny'"
            id="context-menu-button"
          >
            <i aria-hidden="true" class="material-icons">{{ showDropdown ? 'close' : 'menu' }}</i>
          </button>
          <div v-if="showDropdown" class="context-menu__dropdown">
            <button
              :disabled="showTable"
              @click="savePng(settings.tabs[active].id)"
              @keyup.enter="saveSvg(settings.tabs[active].id)"
              class="context-menu__dropdown-item"
              tabindex="0"
              aria-label="lagre graf som png"
              id="context-menu-button-png"
            >
              <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">photo_size_select_actual</i>
              <span>Last ned som PNG</span>
            </button>
            <button
              :disabled="showTable"
              class="context-menu__dropdown-item"
              aria-label="lagre graf som svg"
              tabindex="0"
              @click="saveSvg(settings.tabs[active].id)"
              @keyup.enter="saveSvg(settings.tabs[active].id)"
              id="context-menu-button-svg"
            >
              <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">photo_size_select_actual</i>
              <span>Lagre som SVG</span>
            </button>

            <button
              class="context-menu__dropdown-item"
              aria-hidden="true"
              tabindex="0"
              @click="toggleShowTable"
              @keyup.enter="toggleShowTable"
            >
              <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">{{
                showTable ? 'insert_chart_outlined' : 'table_chart'
              }}</i>
              <span>Vis {{ showTable ? 'grafikk' : 'tabell' }}</span>
            </button>
          </div>
        </div>
      </nav>
      <graph-instance
        v-if="settings.tabs[active] !== undefined"
        :settings="settings.tabs[active]"
        :show-table="showTable"
        ref="graph"
      />
    </div>
  </div>
</template>

<script>
import { saveSvgAsPng } from 'save-svg-as-png';
import GraphInstance from './GraphInstance.vue';
import downloadSvg from '../util/downloadSvg';

export default {
  name: 'GraphCard',
  components: { GraphInstance },
  data() {
    return {
      active: 0,
      showDropdown: false,
      showTable: false,
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

    toggleShowTable() {
      this.showTable = !this.showTable;
      this.showDropdown = false;
    },

    activeTab(index) {
      this.active = index;
      this.showTable = false;
    },

    saveSvg(id) {
      const filename = `${this.$route.params.bydel}_${id}.svg`;
      const svgData = this.$refs.graph.$refs.svg.outerHTML;
      downloadSvg(svgData, filename);
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
  flex: 50% 1 10;
  min-width: 300px;
  overflow: hidden;

  @media screen and (min-width: 950px) {
    min-width: 400px;
    max-width: 50%;
  }

  &.large {
    max-width: 100%;
    flex-basis: 100%;
  }
}

.card {
  background: white;
  border: 1px solid $color-grey-100;
  border-radius: 3px;
  box-shadow: 0 1px 2px $color-grey-600;
  width: 100%;

  &__header {
    width: 100%;
    display: flex;
  }
}

/* Style the tabs */
.tabs {
  background-color: $color-grey-50;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  width: calc(100% - 3em);
  overflow-x: auto;
  overflow-y: hidden;

  div:first-of-type a:first-child {
    border-top-left-radius: 3px;
  }

  &__button {
    background-color: $color-grey-50;
    color: rgba($color-purple, 0.8);
    cursor: pointer;
    float: left;
    font-weight: bold;
    transition: background-color 0.2s;
    padding: 1em 1.5em;

    &.active {
      background-color: #fff;
      box-shadow: 0 0 0 1px #e0e0e0;
      cursor: default;
      position: relative;
      color: black;

      &:after {
        background-color: white;
        bottom: -2px;
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
  margin-left: auto;
  z-index: 2;

  &__button {
    background-color: $color-light-blue-2;
    border-top-right-radius: 3px;
    height: 100%;
    width: 4rem;
  }

  &__dropdown {
    background-color: rgb(178, 210, 216);
    box-shadow: 0 2px 2px 0 $color-grey-200;
    position: absolute;
    right: 0;
    width: 200px;
    z-index: 1;

    &-item {
      color: $color-purple;
      display: flex;
      flex-direction: row;
      font-weight: bold;
      padding: 1rem 0.75rem;
      width: 100%;
      cursor: pointer;

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
