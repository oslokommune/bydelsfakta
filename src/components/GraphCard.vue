<template>
  <section class="card-container" :class="{ large: settings.size === 'large' }" :id="settings.heading | slugify">
    <div class="card" :class="{ fullscreen }" @keydown.escape="toggleFullscreen" :tabindex="fullscreen ? 0 : false">
      <button
        v-if="fullscreen"
        role="menuitem"
        @click="toggleFullscreen"
        @keyup.enter="toggleFullscreen"
        class="close-fullscreen"
        tabindex="0"
        :title="fullscreen ? $t('graphCard.fullscreen.exit.aria') : $t('graphCard.fullscreen.open.aria')"
        :aria-label="fullscreen ? $t('graphCard.fullscreen.exit.aria') : $t('graphCard.fullscreen.open.aria')"
      >
        <ok-icon icon-ref="fullscreenExit" :options="{ size: 'small' }"></ok-icon>
      </button>
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
              <ok-icon
                class="context-menu__dropdown-item-icon"
                icon-ref="graph"
                stroke-width="2.5"
                :options="{ size: 'tiny' }"
              ></ok-icon>
            </button>
            <button
              class="card__toggle-button"
              @click="mode = 'table'"
              :class="{ 'card__toggle-button--active': mode === 'table' }"
              :aria-label="$t('graphCard.mode.table')"
              :title="$t('graphCard.mode.table')"
            >
              <ok-icon
                class="context-menu__dropdown-item-icon"
                icon-ref="data-table"
                stroke-width="2.5"
                :options="{ size: 'tiny' }"
              ></ok-icon>
            </button>

            <button
              v-if="settings.map"
              class="card__toggle-button"
              @click="mode = 'map'"
              :class="{ 'card__toggle-button--active': mode === 'map' }"
              :aria-label="$t('graphCard.mode.map')"
              :title="$t('graphCard.mode.map')"
            >
              <ok-icon
                class="context-menu__dropdown-item-icon"
                icon-ref="map-pin"
                stroke-width="2.5"
                :options="{ size: 'tiny' }"
              ></ok-icon>
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
                @click="toggleFullscreen"
                @keyup.enter="toggleFullscreen"
                class="context-menu__dropdown-item"
                tabindex="0"
                :title="fullscreen ? $t('graphCard.fullscreen.exit.aria') : $t('graphCard.fullscreen.open.aria')"
                :aria-label="fullscreen ? $t('graphCard.fullscreen.exit.aria') : $t('graphCard.fullscreen.open.aria')"
              >
                <ok-icon
                  :icon-ref="fullscreen ? 'fullscreenExit' : 'fullscreen'"
                  :options="{ size: 'small' }"
                ></ok-icon>
                <span>{{
                  fullscreen ? $t('graphCard.fullscreen.exit.label') : $t('graphCard.fullscreen.open.label')
                }}</span>
              </button>

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
                id="context-menu-button-about"
              >
                <ok-icon icon-ref="help" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.about.label') }}</span>
              </button>

              <button
                role="menuitem"
                v-if="mode === 'graph'"
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
                v-if="mode === 'graph' || ie11"
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
                v-if="mode !== 'map'"
                class="context-menu__dropdown-item"
                :title="$t('graphCard.saveCSV.aria')"
                :aria-label="$t('graphCard.saveCSV.aria')"
                tabindex="0"
                @click="saveCsv(settings.tabs[active].id)"
                @keyup.enter="saveCsv(settings.tabs[active].id)"
                id="context-menu-button-csv"
              >
                <ok-icon icon-ref="download" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.saveCSV.label') }}</span>
              </button>

              <button
                role="menuitem"
                v-if="mode !== 'map'"
                class="context-menu__dropdown-item"
                :title="$t('graphCard.saveExcel.aria')"
                :aria-label="$t('graphCard.saveExcel.aria')"
                tabindex="0"
                @click="saveExcel(settings.tabs[active].id)"
                @keyup.enter="saveExcel(settings.tabs[active].id)"
                id="context-menu-button-excel"
              >
                <ok-icon icon-ref="download" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.saveExcel.label') }}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <graph-instance
        @updateDate="setDate"
        v-if="settings.tabs[active] !== undefined && (mode === 'graph' || mode === 'table')"
        :settings="settings.tabs[active]"
        :sources="settings.sources"
        :mode="mode"
        ref="graph"
      />
      <div class="map-container" v-if="mode === 'map'">
        <v-leaflet
          v-if="settings.map"
          :district="geoDistricts"
          :settings="settings.map"
          :data-url="`${settings.map.url}?geography=${district}`"
          :fullscreen="fullscreen"
        ></v-leaflet>
      </div>
      <div class="about-container" v-if="mode === 'about'">
        <h3>{{ $t('graphCard.about.label') }}</h3>
        <button class="close" @click="mode = 'graph'"></button>
        <p v-if="date">{{ $t('graphCard.about.updated') }}: {{ date }}</p>
        <p v-if="settings.about" v-html="settings.about"></p>
        <p v-if="settings.sources">
          {{ settings.sources.length > 1 ? $t('graphCard.sources.plural') : $t('graphCard.sources.singular') }}:
          <span v-for="(source, i) in settings.sources" :key="'source_' + i">
            <a :href="source.url">{{ source.name }}</a>
            <span v-if="i < settings.sources.length - 1">, </span>
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import * as d3 from 'd3';
import GraphInstance from './GraphInstance';
import downloadSvg from '../util/downloadSvg';
import downloadPng from '../util/downloadPng';
import tableToCsv from '../util/tableToCsv';
import tableToExcel from '../util/tableToExcel';
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
      fullscreen: false,
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

  filters: {
    slugify(str) {
      return str.split(' ').join('_').toLowerCase()
    }
  },

  methods: {
    setDate(dateStr) {
      if (!dateStr) {
        this.date = 'Ikke tilgjengelig';
        return;
      }
      const parseTime = d3.timeParse('%Y-%m-%d');
      const formatTime = d3.timeFormat('%x');
      this.date = formatTime(parseTime(dateStr));
    },

    toggleFullscreen() {
      const body = document.querySelector('body');
      this.showDropdown = false;

      if (this.fullscreen) {
        this.fullscreen = false;
        body.style.height = 'auto';
        body.style.overflow = 'auto';
      } else {
        this.fullscreen = true;
        body.style.height = '100vh';
        body.style.overflow = 'hidden';

        this.$ga.event({
          eventCategory: 'Card',
          eventAction: 'Open fullscreen',
          eventLabel: this.mode,
        });
      }
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

      this.$ga.event({
        eventCategory: 'Card',
        eventAction: 'Change tab',
        eventLabel: this.settings.tabs[index].label,
      });
    },

    saveSvg(id) {
      const filename = `${this.$route.params.district}_${id}`;
      const svgData = this.$refs.graph.$refs.svg.outerHTML;
      downloadSvg(svgData, filename);
      this.closeMenu();

      this.$ga.event({
        eventCategory: 'Card',
        eventAction: 'Save SVG',
        eventLabel: filename,
      });
    },

    savePng(id) {
      const filename = `${this.$route.params.district}_${id}.png`;
      downloadPng(this.$refs.graph.$refs.svg, filename);

      this.closeMenu();

      this.$ga.event({
        eventCategory: 'Card',
        eventAction: 'Save PNG',
        eventLabel: filename,
      });
    },

    saveCsv(id) {
      tableToCsv(this.$refs.graph.$refs.tableContainer);
      this.closeMenu();

      this.$ga.event({
        eventCategory: 'Card',
        eventAction: 'Save CSV',
        eventLabel: `${this.$route.params.district}_${id}`,
        eventValue: null,
      });
    },

    saveExcel(id) {
      tableToExcel(this.$refs.graph.$refs.tableContainer.querySelector('table'));
      this.closeMenu();

      this.$ga.event({
        eventCategory: 'Card',
        eventAction: 'Save Excel',
        eventLabel: `${this.$route.params.district}_${id}`,
        eventValue: null,
      });
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
    mode(to, from) {
      this.$ga.event({
        eventCategory: 'Card',
        eventAction: 'Change view',
        eventLabel: `${from} -> ${to}`,
      });
    },

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

.map-container {
  flex-grow: 1;
}

.about-container {
  padding: 1rem;
  position: relative;
}

.close {
  cursor: pointer;
  display: block;
  height: 3rem;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 3rem;

  &::after,
  &::before {
    background: $color-purple;
    content: '';
    height: 0.2rem;
    left: 0.5rem;
    position: absolute;
    top: calc(50% - 0.1rem);
    transform: rotate(45deg);
    width: 2rem;
  }

  &::after {
    transform: rotate(-45deg);
  }
}

.card-container {
  flex: 50% 1 10;
  padding: 1em;
  width: 100%;

  @media screen and (min-width: $break-md) {
    max-width: 50%;
    width: 50%;
  }

  &.large {
    flex-basis: 100%;
    max-width: 100%;
  }
}

.close-fullscreen {
  align-items: center;
  background: rgba(black, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 2;

  &:hover {
    background: rgba(black, 0.2);
  }
}

.card {
  background: white;
  border: 1px solid $color-border;
  min-height: 18em;
  width: 100%;

  &.fullscreen {
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 2rem);
    left: 1rem;
    outline: 2rem solid rgba(black, 0.9);
    position: fixed;
    right: 1rem;
    top: 1rem;
    width: calc(100vw - 2rem);
    z-index: 5;
  }

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
        color: $color-purple;
        z-index: 1;
      }

      span {
        margin-left: 0.5rem;
        text-align: left;
      }
    }
  }
}
</style>
