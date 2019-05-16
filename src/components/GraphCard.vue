<template>
  <section class="card-container" :class="{ large: settings.size === 'large' }">
    <div class="card">
      <header class="card__header">
        <div class="card__headertext">
          <h2 class="card__title">{{ settings.heading }}</h2>
        </div>
        <nav class="card__nav">
          <div class="tabs" ref="tabsRef" role="tablist">
            <resize-observer @notify="showTabsOrSelect"></resize-observer>
            <template v-for="(tab, index) in settings.tabs">
              <button
                :disabled="mode === 'map' || mode === 'about'"
                ref="tabRef"
                role="tab"
                :aria-label="tab.label"
                :id="`tabButton-${settings.heading}-${index}`"
                :key="index"
                @click="activeTab(index)"
                :class="{ active: active === index, 'tabs__tab--hidden': !showAsTabs }"
                class="tabs__tab"
                v-text="tab.label"
                v-if="
                  tab.production === productionMode && tab.production !== null
                    ? true
                    : tab.production === true && productionMode === false
                    ? true
                    : productionMode === null
                "
              ></button>
            </template>
            <select v-if="!showAsTabs" v-model="active" class="select tabs__select" aria-hidden>
              <option
                :value="index"
                v-for="(tab, index) in settings.tabs"
                v-text="tab.label"
                :key="'tab' + tab.label"
              ></option>
            </select>
          </div>

          <div class="card__toggle-menu">
            <button
              class="card__toggle-button"
              @click="mode = 'graph'"
              :class="{ 'card__toggle-button--active': mode === 'graph' }"
              :aria-label="$t('graphCard.mode.graph')"
              :title="$t('graphCard.mode.graph')"
            >
              <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">bar_chart</i>
            </button>
            <button
              class="card__toggle-button"
              @click="mode = 'table'"
              :class="{ 'card__toggle-button--active': mode === 'table' }"
              :aria-label="$t('graphCard.mode.table')"
              :title="$t('graphCard.mode.table')"
            >
              <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">table_chart</i>
            </button>

            <button
              v-if="settings.map"
              class="card__toggle-button"
              @click="mode = 'map'"
              :class="{ 'card__toggle-button--active': mode === 'map' }"
              :aria-label="$t('graphCard.mode.map')"
              :title="$t('graphCard.mode.map')"
            >
              <i aria-hidden="true" class="material-icons context-menu__dropdown-item-icon">place</i>
            </button>
          </div>
          <div @keydown.escape="closeMenu()" v-click-outside="closeMenu" class="context-menu">
            <button
              class="context-menu__button"
              :class="{ 'card__toggle-button--active': showDropdown }"
              @click="showDropdown = !showDropdown"
              aria-haspopup="true"
              :aria-label="showDropdown ? $t('graphCard.dropdown.close') : $t('graphCard.dropdown.open')"
              id="context-menu-button"
              :title="showDropdown ? $t('graphCard.dropdown.close') : $t('graphCard.dropdown.open')"
            >
              <ok-icon icon-ref="hamburger"></ok-icon>
              <span class="button-label">Valg</span>
            </button>
            <div v-if="showDropdown" class="context-menu__dropdown" role="menu">
              <button
                role="menuitem"
                @click="
                  mode === 'about' ? (mode = 'graph') : (mode = 'about');
                  showDropdown = false;
                "
                @keyup.enter="
                  mode === 'about' ? (mode = 'graph') : (mode = 'about');
                  showDropdown = false;
                "
                class="context-menu__dropdown-item"
                tabindex="0"
                :title="$t('graphCard.about.aria')"
                :aria-label="$t('graphCard.about.aria')"
                id="context-menu-button-png"
              >
                <ok-icon icon-ref="help" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.about.label') }}</span>
              </button>

              <button
                role="menuitem"
                :disabled="mode !== 'graph'"
                @click="savePng(settings.tabs[active].id)"
                @keyup.enter="saveSvg(settings.tabs[active].id)"
                class="context-menu__dropdown-item"
                tabindex="0"
                :title="$t('graphCard.savePNG.aria')"
                :aria-label="$t('graphCard.savePNG.aria')"
                id="context-menu-button-png"
              >
                <ok-icon icon-ref="photo" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.savePNG.label') }}</span>
              </button>
              <button
                role="menuitem"
                :disabled="mode !== 'graph' || ie11"
                :title="ie11 ? $t('ie11.disabled') : $t('graphCard.saveSVG.aria')"
                class="context-menu__dropdown-item"
                :aria-label="$t('graphCard.saveSVG.aria')"
                tabindex="0"
                @click="saveSvg(settings.tabs[active].id)"
                @keyup.enter="saveSvg(settings.tabs[active].id)"
                id="context-menu-button-svg"
              >
                <ok-icon icon-ref="photo" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.saveSVG.label') }}</span>
              </button>

              <button
                role="menuitem"
                :disabled="mode === 'map'"
                class="context-menu__dropdown-item"
                :title="$t('graphCard.saveCSV.aria')"
                :aria-label="$t('graphCard.saveCSV.aria')"
                tabindex="0"
                @click="saveCsv()"
                @keyup.enter="saveCsv()"
                id="context-menu-button-csv"
              >
                <ok-icon icon-ref="download" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.saveCSV.label') }}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <graph-instance
        @updateDate="setDate"
        v-if="settings.tabs[active] !== undefined && (mode === 'graph' || mode === 'table')"
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
      <div class="about-container" v-if="mode === 'about'">
        <h3>{{ $t('graphCard.about.label') }}</h3>

        <p>{{ $t('graphCard.about.updated') }} {{ date }}</p>
        <p v-if="settings.about" v-html="settings.about"></p>
      </div>
    </div>
  </section>
</template>

<script>
import { saveSvgAsPng } from 'save-svg-as-png';
import { mapGetters, mapState } from 'vuex';
import canvg from 'canvg';
import * as d3 from 'd3';
import GraphInstance from './GraphInstance';
import downloadSvg from '../util/downloadSvg';
import tableToCsv from '../util/tableToCsv';
import VLeaflet from './VLeaflet';
import OkIcon from './OkIcon';

export default {
  name: 'GraphCard',
  components: { GraphInstance, VLeaflet, OkIcon },
  data() {
    return {
      active: 0,
      showDropdown: false,
      mode: 'graph',
      date: '',
      showAsTabs: true,
    };
  },
  computed: {
    ...mapState(['districts', 'ie11', 'productionMode']),
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
    setDate(dateStr) {
      const parseTime = d3.timeParse('%Y-%m-%d');
      const formatTime = d3.timeFormat('%x');
      this.date = formatTime(parseTime(dateStr));
    },

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

    // Sets 'showAsTabs' true/false by comparing the accumulated width
    // of all the tabs with the available space
    showTabsOrSelect() {
      let tabsWidth = 0;
      const tabs = this.$refs.tabRef;
      tabs.forEach(tab => {
        tabsWidth += tab.offsetWidth;
      });
      this.showAsTabs = this.$refs.tabsRef.offsetWidth > tabsWidth;
    },
  },

  watch: {
    '$route.params.topic'() {
      this.active = 0;
      this.mode = 'graph';
      this.showTabsOrSelect();
    },
  },
};
</script>

<style scoped lang="scss">
@import './../styles/colors';
@import './../styles/variables';

.map-container,
.about-container {
  height: 560px;
}

.about-container {
  padding: 1rem;
}

.card-container {
  flex: 50% 1 10;
  min-width: 300px;
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
  border: 1px solid $color-border;
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
    align-items: center;
    display: flex;
    padding-left: 1rem;
    padding-right: 0;
    position: relative;
  }

  &__toggle-menu {
    display: flex;
    margin-left: auto;
    padding-left: 1rem;
  }

  &__toggle-button {
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 2.5em;
    justify-content: center;
    position: relative;
    width: 2.5em;

    &::before {
      background: $color-blue;
      border-radius: 50%;
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform: scale(1);
      transition: all 0.3s cubic-bezier(0.25, 0, 0, 1);
      z-index: 0;
    }

    &::after {
      background: white;
      border-radius: 50%;
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform: scale(1);
      transition: all 0.3s cubic-bezier(0.25, 0, 0, 1);
      z-index: 0;
    }

    & > i {
      user-select: none;
      z-index: 1;
    }

    &:hover:not(&--active)::after {
      // background-color: rgba($color-border, 0.35);
      transform: scale(0.8);
      transition: all 0.1s cubic-bezier(0.3, 0, 0.5, 1);
    }

    &--active::before {
      transform: scale(1);
      transition: all 0.5s cubic-bezier(0.3, 0, 0.5, 1);
    }

    &--active::after {
      transform: scale(0);
      transition: all 0.5s cubic-bezier(0.3, 0, 0.5, 1);
    }
  }
}

/* Style the tabs */
.tabs {
  display: flex;
  flex-grow: 1;
  height: 4rem;
  overflow-x: hidden;
  padding: 4px 0;
  position: relative;

  &__select {
    height: 3rem;
    left: 0;
    margin-right: 1rem;
    position: absolute;
    right: 1rem;
    top: 0.5rem;
  }

  &__tab {
    color: $color-purple;
    cursor: pointer;
    font-weight: 500;
    padding: 0.75em;
    transition: background-color 0.2s;
    white-space: nowrap;

    &--hidden {
      height: 0;
      opacity: 0;
    }

    &[disabled]:not(.tabs__tab--hidden),
    &.active[disabled]:not(.tabs__tab--hidden) {
      color: rgba($color-purple, 0.35);
      cursor: default;
      opacity: 0.8;

      &::after {
        opacity: 0;
      }
    }

    &.active {
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
    &:hover:not(.active):not(:disabled) {
      background-color: rgba($color-grey-100, 0.5);
      position: relative;
    }
  }
}

.context-menu {
  margin-left: auto;
  position: relative;
  z-index: 4;

  &__button {
    align-items: center;
    border-radius: 0 !important;
    cursor: pointer;
    display: flex;
    height: 3rem;
    padding-left: 0.65rem;
    padding-right: 0.65rem;

    &.card__toggle-button--active {
      background-color: $color-purple;
      color: $color-blue;
    }

    @media screen and (min-width: $break-md) {
      background-color: rgba($color-border, 0);
      height: 3rem;
      width: auto;

      &:hover:not(.card__toggle-button--active) {
        background-color: rgba($color-border, 0.35);
      }
    }

    .button-label {
      display: inline-block;
      font-weight: 500;
      margin-left: 0.25rem;
      text-transform: uppercase;
    }
  }

  &__dropdown {
    background-color: $color-purple;
    box-shadow: 0 2px 2px 0 $color-grey-200;
    position: absolute;
    right: 0;
    width: 310px;
    z-index: 1;

    &-item {
      align-items: center;
      color: $color-blue;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      font-weight: 500;
      padding: 1.25rem 0.75rem;
      width: 100%;

      &:disabled {
        text-decoration: line-through;
      }

      &:hover:not(:disabled) {
        background-color: darken($color-purple, 10%);
      }

      &-icon {
        font-size: $font-medium;
      }

      span {
        margin-left: 0.5rem;
        text-align: left;
      }
    }
  }
}
</style>
