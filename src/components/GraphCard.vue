<template>
  <div class="card-container" :class="{ large: settings.size === 'large' }">
    <div class="card">
      <header class="card__header">
        <div class="card__headertext">
          <h2 class="card__title">{{ settings.heading }}</h2>
          <span class="card__published">Oppdatert 01.09.2018</span>
        </div>
        <nav class="card__nav">
          <div class="tabs" role="tablist">
            <button
              :disabled="mode === 'map'"
              role="tab"
              :aria-label="tab.label"
              :id="`tabButton-${settings.heading}-${index}`"
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
                @click="mode = 'graph'"
                :class="{ 'card__toggle-button--active': mode === 'graph' }"
              >
                <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">bar_chart</i>
              </button>
              <button
                class="card__toggle-button"
                @click="mode = 'table'"
                :class="{ 'card__toggle-button--active': mode === 'table' }"
              >
                <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">table_chart</i>
              </button>

              <button
                v-if="settings.map"
                class="card__toggle-button"
                @click="mode = 'map'"
                :class="{ 'card__toggle-button--active': mode === 'map' }"
              >
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
                :disabled="mode !== 'graph'"
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
                :disabled="mode !== 'graph' || ie11"
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

              <button
                :disabled="mode === 'map'"
                class="context-menu__dropdown-item"
                :aria-label="$t('graphCard.saveCSV.aria')"
                tabindex="0"
                @click="saveCsv()"
                @keyup.enter="saveCsv()"
                id="context-menu-button-csv"
              >
                <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">cloud_download</i>
                <span>{{ $t('graphCard.saveCSV.label') }}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <graph-instance
        v-if="settings.tabs[active] !== undefined && mode !== 'map'"
        :settings="settings.tabs[active]"
        :mode="mode"
        ref="graph"
      />
      <div class="map-container" v-if="mode === 'map'">
        <v-leaflet
          v-if="settings.map"
          :district="geoDistricts"
          :settings="settings.map"
          :data-url="`${settings.map.url}?geography=${district}`"
        ></v-leaflet>
      </div>
    </div>
  </div>
</template>

<script>
import { saveSvgAsPng } from 'save-svg-as-png';
import { mapGetters, mapState } from 'vuex';
import canvg from 'canvg';
import GraphInstance from './GraphInstance.vue';
import downloadSvg from '../util/downloadSvg';
import tableToCsv from '../util/tableToCsv';
import VLeaflet from './VLeaflet.vue';

export default {
  name: 'GraphCard',
  components: { GraphInstance, VLeaflet },
  data() {
    return {
      active: 0,
      showDropdown: false,
      mode: 'graph',
    };
  },
  computed: {
    ...mapState(['districts', 'ie11']),
    ...mapGetters(['geoDistricts']),
    district() {
      if (this.districts[0] === 'alle') return '00';
      if (this.districts.length === 1) return this.districts[0];
      return '00';
    },
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
      this.closeMenu();
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
        canvg,
      });
      this.closeMenu();
    },

    saveCsv() {
      tableToCsv(this.$refs.graph.$refs.tableContainer.querySelector('table'));
      this.closeMenu();
    },
  },

  watch: {
    '$route.params.topic'() {
      this.active = 0;
      this.mode = 'graph';
    },
  },
};
</script>

<style scoped lang="scss">
@import './../styles/colors';
@import './../styles/variables';

.map-container {
  height: 560px;
}

.card-container {
  flex: 50% 1 10;
  min-width: 300px;
  overflow: hidden;
  padding: 1em;

  @media screen and (min-width: 950px) {
    max-width: 50%;
    min-width: 400px;
  }

  &.large {
    flex-basis: 100%;
    max-width: 100%;
  }
}

.card {
  background: white;
  box-shadow: 0 1px 3px rgba(black, 0.5), 0 3px 6px rgba(black, 0.07);
  min-height: 18em;
  width: 100%;

  &__header {
    border-bottom: 1px solid $color-border;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
  }

  &__headertext {
    align-items: baseline;
    display: flex;
    padding: 0 1rem;
  }

  &__title {
    color: $color-purple;
    font-size: $font-large;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
  }

  &__published {
    color: rgba($color-purple, 0.65);
    font-size: $font-small;
    text-transform: uppercase;
  }

  &__nav {
    align-items: flex-start;
    display: flex;
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  &__toggle-menu {
    display: flex;
    margin-left: auto;
    padding: 0 1rem;
  }

  &__toggle-button {
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 3em;
    justify-content: center;
    position: relative;
    width: 3em;

    &::before {
      background: $color-blue;
      border-radius: 50%;
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform: scale(0);
      transition: all 0.3s cubic-bezier(0.25, 0, 0, 1);
      z-index: 0;
    }

    & > i {
      user-select: none;
      z-index: 1;
    }

    &:hover:not(&--active) {
      background-color: rgba($color-border, 0.35);
    }

    &--active::before {
      transform: scale(1);
      transition: all 0.5s cubic-bezier(0.3, 0, 0.5, 1);
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
    padding: 0.75em;
    transition: background-color 0.2s;
    white-space: nowrap;

    &[disabled],
    &.active[disabled] {
      color: rgba($color-purple, 0.35);
      opacity: 0.8;

      &::after {
        opacity: 0;
      }
    }

    &.active {
      color: $color-purple;
      cursor: default;
      position: relative;

      &::after {
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
  margin-left: auto;
  position: relative;
  z-index: 2;

  &__button {
    align-items: center;
    background-color: rgba($color-border, 1);
    border-radius: 0;
    cursor: pointer;
    display: flex;
    height: 3rem;
    margin-top: 4px;
    padding-left: 0.65rem;
    padding-right: 0.65rem;

    @media screen and (min-width: $break-md) {
      background-color: rgba($color-border, 0);
      border-radius: 3px;
      height: 3rem;
      padding-right: 0.95rem;
      width: auto;

      &:hover {
        background-color: rgba($color-border, 0.35);
      }
    }

    span {
      display: none;
      font-weight: 700;
      margin-left: 0.25rem;
      text-transform: uppercase;

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
      cursor: pointer;
      display: flex;
      flex-direction: row;
      font-weight: bold;
      padding: 1rem 0.75rem;
      width: 100%;

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
