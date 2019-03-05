<template>
  <div class="card-container" :class="{ large: settings.size === 'large' }">
    <div class="card">
      <header class="card__header">
        <div class="card__headertext">
          <h2 class="card__title">Tittel datasett</h2>
          <span class="card__published">Oppdatert 01.09.2018</span>
        </div>
        <nav class="card__nav">
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
              class="tabs__tab"
              v-text="tab.label"
            ></button>

            <div class="card__toggle-menu">
              <button
                class="card__toggle-button"
                @click="showTable = false"
                :class="{ 'card__toggle-button--active': !showTable }"
              >
                <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">bar_chart</i>
              </button>
              <button
                class="card__toggle-button"
                @click="showTable = true"
                :class="{ 'card__toggle-button--active': showTable }"
              >
                <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">table_chart</i>
              </button>

              <button class="card__toggle-button">
                <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">map</i>
              </button>
            </div>
          </div>

          <div @keydown.escape="closeMenu()" v-click-outside="closeMenu" class="context-menu" role="menu">
            <button
              class="context-menu__button"
              @click="showDropdown = !showDropdown"
              aria-haspopup="true"
              :aria-label="showDropdown ? $t('graphCard.dropdown.close') : $t('graphCard.dropdown.open')"
              id="context-menu-button"
            >
              <i aria-hidden="true" class="material-icons">{{ showDropdown ? 'close' : 'menu' }}</i>
              <span>{{ $t('graphCard.options.label') }}</span>
            </button>
            <div v-if="showDropdown" class="context-menu__dropdown">
              <button
                :disabled="showTable"
                @click="savePng(settings.tabs[active].id)"
                @keyup.enter="saveSvg(settings.tabs[active].id)"
                class="context-menu__dropdown-item"
                tabindex="0"
                :aria-label="$t('graphCard.savePNG.aria')"
                id="context-menu-button-png"
              >
                <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon"
                  >photo_size_select_actual</i
                >
                <span>{{ $t('graphCard.savePNG.label') }}</span>
              </button>
              <button
                :disabled="showTable"
                class="context-menu__dropdown-item"
                :aria-label="$t('graphCard.saveSVG.aria')"
                tabindex="0"
                @click="saveSvg(settings.tabs[active].id)"
                @keyup.enter="saveSvg(settings.tabs[active].id)"
                id="context-menu-button-svg"
              >
                <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon"
                  >photo_size_select_actual</i
                >
                <span>{{ $t('graphCard.saveSVG.label') }}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
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
    },

    saveSvg(id) {
      const filename = `${this.$route.params.district}_${id}.svg`;
      const svgData = this.$refs.graph.$refs.svg.outerHTML;
      downloadSvg(svgData, filename);
    },

    savePng(id) {
      const file = this.$refs.graph.$refs.svg;
      const filename = `${this.$route.params.district}_${id}.png`;
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
@import './../styles/variables';

.card-container {
  padding: 1em;
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
  box-shadow: 0 1px 3px rgba(black, 0.5), 0 3px 6px rgba(black, 0.07);
  width: 100%;

  &__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $color-border;
    z-index: 1;
  }

  &__headertext {
    display: flex;
    align-items: baseline;
    padding: 0 1rem;
  }

  &__title {
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: $font-large;
    font-weight: 500;
    color: $color-purple;
  }

  &__published {
    text-transform: uppercase;
    font-size: $font-small;
    color: rgba($color-purple, 0.65);
  }

  &__nav {
    display: flex;
    align-items: flex-start;
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  &__toggle-menu {
    margin-left: auto;
    padding: 0 1rem;
    display: flex;
  }

  &__toggle-button {
    height: 3em;
    width: 3em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover:not(&--active) {
      background-color: rgba($color-border, 0.35);
    }

    &--active {
      background: $color-blue;
    }
  }
}

/* Style the tabs */
.tabs {
  display: flex;
  flex-grow: 1;
  overflow-x: auto;
  padding: 4px 0;

  &__tab {
    color: rgba($color-purple, 0.65);
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
    padding: 0.75em;
    white-space: nowrap;

    &.active {
      color: $color-purple;
      cursor: default;
      position: relative;

      &:after {
        background-color: $color-blue;
        bottom: -4px;
        content: '';
        height: 5px;
        left: 0;
        position: absolute;
        right: 0;
      }
    }

    /* Change background color of tabs on hover */
    &:hover:not(.active) {
      background-color: rgba($color-grey-100, 0.5);
      position: relative;
    }
  }
}

.context-menu {
  position: relative;
  margin-left: auto;
  z-index: 2;

  &__button {
    border-radius: 0px;
    display: flex;
    align-items: center;
    margin-top: 4px;
    padding-left: 0.65rem;
    padding-right: 0.65rem;
    height: 3rem;
    cursor: pointer;
    background-color: rgba($color-border, 1);

    @media screen and (min-width: $break-md) {
      background-color: rgba($color-border, 0);
      padding-right: 0.95rem;
      border-radius: 3px;
      height: 3rem;
      width: auto;

      &:hover {
        background-color: rgba($color-border, 0.35);
      }
    }

    span {
      margin-left: 0.25rem;
      font-weight: 700;
      text-transform: uppercase;
      display: none;

      @media screen and (min-width: $break-md) {
        display: inline-block;
      }
    }
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
        font-size: $font-large;
      }

      span {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
