<template>
  <section class="card-container" :class="{ large: settings.size === 'large' }">
    <div class="card" :class="{ fullscreen }" :tabindex="fullscreen ? 0 : null" @keydown.escape="toggleFullscreen">
      <button
        v-if="fullscreen"
        role="menuitem"
        class="close-fullscreen"
        tabindex="0"
        :title="fullscreen ? $t('graphCard.fullscreen.exit.aria') : $t('graphCard.fullscreen.open.aria')"
        :aria-label="fullscreen ? $t('graphCard.fullscreen.exit.aria') : $t('graphCard.fullscreen.open.aria')"
        @click="toggleFullscreen"
        @keyup.enter="toggleFullscreen"
      >
        <ok-icon icon-ref="minimize" :options="{ size: 'small' }"></ok-icon>
      </button>
      <header class="card__header">
        <div class="card__headertext">
          <h2 class="card__title">{{ settings.heading }}</h2>
        </div>
        <nav class="card__nav">
          <div ref="tabsRef" class="tabs" role="tablist">
            <resize-observer @notify="showTabsOrSelect"></resize-observer>
            <template v-for="(tab, index) in settings.tabs" :key="index">
              <button
                ref="tabRef"
                :disabled="mode === 'map' || mode === 'about'"
                role="tab"
                :aria-label="tab.label"
                :data-id="`tabButton-${settings.heading}-${index}`"
                :class="{ active: active === index, 'tabs__tab--hidden': !showAsTabs }"
                class="tabs__tab"
                @click="activeTab(index)"
                v-text="tab.label"
              ></button>
            </template>
            <select v-if="!showAsTabs" v-model="active" class="select tabs__select" aria-hidden>
              <option
                v-for="(tab, index) in settings.tabs"
                :key="'tab' + tab.label"
                :value="index"
                v-text="tab.label"
              ></option>
            </select>
          </div>

          <div class="card__toggle-menu">
            <button
              class="card__toggle-button"
              :class="{ 'card__toggle-button--active': mode === 'graph' }"
              :aria-label="$t('graphCard.mode.graph')"
              :title="$t('graphCard.mode.graph')"
              @click="mode = 'graph'"
            >
              <ok-icon class="context-menu__dropdown-item-icon" icon-ref="graph" :options="{ size: 'tiny' }"></ok-icon>
            </button>
            <button
              class="card__toggle-button"
              :class="{ 'card__toggle-button--active': mode === 'table' }"
              :aria-label="$t('graphCard.mode.table')"
              :title="$t('graphCard.mode.table')"
              @click="mode = 'table'"
            >
              <ok-icon class="context-menu__dropdown-item-icon" icon-ref="table" :options="{ size: 'tiny' }"></ok-icon>
            </button>

            <button
              v-if="settings.map"
              class="card__toggle-button"
              :class="{ 'card__toggle-button--active': mode === 'map' }"
              :aria-label="$t('graphCard.mode.map')"
              :title="$t('graphCard.mode.map')"
              @click="mode = 'map'"
            >
              <ok-icon
                class="context-menu__dropdown-item-icon"
                icon-ref="location-pin"
                :options="{ size: 'tiny' }"
              ></ok-icon>
            </button>
          </div>
          <div v-click-outside="closeMenu" class="context-menu" @keydown.escape="closeMenu()">
            <button
              class="context-menu__button"
              :class="{ 'card__toggle-button--active': showDropdown }"
              aria-haspopup="true"
              :aria-label="showDropdown ? $t('graphCard.dropdown.close') : $t('graphCard.dropdown.open')"
              data-id="context-menu-button"
              :title="showDropdown ? $t('graphCard.dropdown.close') : $t('graphCard.dropdown.open')"
              @click="showDropdown = !showDropdown"
            >
              <ok-icon icon-ref="menu" :options="{ size: 'small' }"></ok-icon>
              <span class="button-label">Valg</span>
            </button>
            <div v-if="showDropdown" class="context-menu__dropdown" role="menu">
              <button
                role="menuitem"
                class="context-menu__dropdown-item"
                tabindex="0"
                :title="fullscreen ? $t('graphCard.fullscreen.exit.aria') : $t('graphCard.fullscreen.open.aria')"
                :aria-label="fullscreen ? $t('graphCard.fullscreen.exit.aria') : $t('graphCard.fullscreen.open.aria')"
                @click="toggleFullscreen"
                @keyup.enter="toggleFullscreen"
              >
                <ok-icon :icon-ref="fullscreen ? 'minimize' : 'expand'" :options="{ size: 'small' }"></ok-icon>
                <span>{{
                  fullscreen ? $t('graphCard.fullscreen.exit.label') : $t('graphCard.fullscreen.open.label')
                }}</span>
              </button>

              <button
                role="menuitem"
                class="context-menu__dropdown-item"
                tabindex="0"
                :title="$t('graphCard.about.aria')"
                :aria-label="$t('graphCard.about.aria')"
                data-id="context-menu-button-about"
                @click="
                  mode === 'about' ? (mode = 'graph') : (mode = 'about');
                  showDropdown = false;
                "
                @keyup.enter="
                  mode === 'about' ? (mode = 'graph') : (mode = 'about');
                  showDropdown = false;
                "
              >
                <ok-icon icon-ref="question" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.about.label') }}</span>
              </button>

              <button
                v-if="mode === 'graph'"
                role="menuitem"
                class="context-menu__dropdown-item"
                tabindex="0"
                :title="$t('graphCard.savePNG.aria')"
                :aria-label="$t('graphCard.savePNG.aria')"
                data-id="context-menu-button-png"
                @click="savePng(settings.tabs[active].id)"
                @keyup.enter="saveSvg(settings.tabs[active].id)"
              >
                <ok-icon icon-ref="picture" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.savePNG.label') }}</span>
              </button>
              <button
                v-if="mode === 'graph' || ie11"
                role="menuitem"
                :title="ie11 ? $t('ie11.disabled') : $t('graphCard.saveSVG.aria')"
                :disabled="ie11"
                class="context-menu__dropdown-item"
                :aria-label="$t('graphCard.saveSVG.aria')"
                tabindex="0"
                data-id="context-menu-button-svg"
                @click="saveSvg(settings.tabs[active].id)"
                @keyup.enter="saveSvg(settings.tabs[active].id)"
              >
                <ok-icon icon-ref="picture" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.saveSVG.label') }}</span>
              </button>

              <button
                v-if="mode !== 'map'"
                role="menuitem"
                class="context-menu__dropdown-item"
                :title="$t('graphCard.saveCSV.aria')"
                :aria-label="$t('graphCard.saveCSV.aria')"
                tabindex="0"
                data-id="context-menu-button-csv"
                @click="saveCsv(settings.tabs[active].id)"
                @keyup.enter="saveCsv(settings.tabs[active].id)"
              >
                <ok-icon icon-ref="download" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.saveCSV.label') }}</span>
              </button>

              <button
                v-if="mode !== 'map'"
                role="menuitem"
                class="context-menu__dropdown-item"
                :title="$t('graphCard.saveExcel.aria')"
                :aria-label="$t('graphCard.saveExcel.aria')"
                tabindex="0"
                data-id="context-menu-button-excel"
                @click="saveExcel(settings.tabs[active].id)"
                @keyup.enter="saveExcel(settings.tabs[active].id)"
              >
                <ok-icon icon-ref="download" :options="{ size: 'small' }"></ok-icon>
                <span>{{ $t('graphCard.saveExcel.label') }}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <graph-instance
        v-if="settings.tabs[active] !== undefined && (mode === 'graph' || mode === 'table')"
        ref="graph"
        :settings="settings.tabs[active]"
        :sources="settings.sources"
        :mode="mode"
        @update-date="setDate"
      />
      <div v-if="mode === 'map'" class="map-container">
        <v-leaflet
          v-if="settings.map"
          :district="geoDistricts"
          :settings="settings.map"
          :data-url="`${settings.map.url}?geography=${district}`"
          :fullscreen="fullscreen"
        ></v-leaflet>
      </div>
      <div v-if="mode === 'about'" class="about-container">
        <h3>{{ $t('graphCard.about.label') }}</h3>
        <button class="close" @click="mode = 'graph'"></button>
        <p v-if="date">{{ $t('graphCard.about.updated') }}: {{ date }}</p>
        <template v-if="settings.about">
          <p v-if="settings.about.info" v-html="settings.about.info"></p>
          <p v-if="settings.about.externalInfo">
            <span>{{ $t('graphCard.about.externalLabel') }}</span>
            <a :href="settings.about.externalInfo">{{ $t('graphCard.about.externalAnchor') }}</a>
          </p>
          <p v-if="settings.about.sources">
            {{ settings.about.sources.length > 1 ? $t('graphCard.sources.plural') : $t('graphCard.sources.singular') }}:
            <span v-for="(source, i) in settings.about.sources" :key="'source_' + i">
              <a :href="source.url">{{ source.name }}</a>
              <span v-if="i < settings.about.sources.length - 1">, </span>
            </span>
          </p>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import { timeParse, timeFormat } from 'd3';
import downloadSvg from '@/util/downloadSvg';
import downloadPng from '@/util/downloadPng';
import tableToCsv from '@/util/tableToCsv';
import tableToExcel from '@/util/tableToExcel';
import GraphInstance from './GraphInstance.vue';
import VLeaflet from './VLeaflet.vue';
import OkIcon from './OkIcon.vue';

export default {
  name: 'GraphCard',
  components: { GraphInstance, VLeaflet, OkIcon },

  props: {
    settings: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    active: 0,
    showDropdown: false,
    mode: 'graph',
    date: '',
    fullscreen: false,
    showAsTabs: true,
    scroll: null,
  }),

  computed: {
    ...mapState(['districts', 'ie11', 'productionMode']),
    ...mapGetters(['geoDistricts']),
    district() {
      if (this.districts[0] === 'alle') {
        return '00';
      }
      if (this.districts.length === 1) {
        return this.districts[0];
      }
      return '00';
    },
  },

  watch: {
    mode(to, from) {
      this.$gtag.event('change_view', {
        event_category: 'card',
        event_label: `${from} -> ${to}`,
      });
    },

    '$route.params.topic': function () {
      this.active = 0;
      this.mode = 'graph';
      this.showTabsOrSelect();
    },
  },

  methods: {
    setDate(dateStr) {
      if (!dateStr) {
        this.date = 'Ikke tilgjengelig';
        return;
      }
      const parseTime = timeParse('%Y-%m-%d');
      const formatTime = timeFormat('%x');
      this.date = formatTime(parseTime(dateStr));
    },

    toggleFullscreen() {
      const body = document.querySelector('body');
      this.showDropdown = false;

      if (this.fullscreen) {
        this.fullscreen = false;
        body.style.height = 'auto';
        body.style.overflow = 'auto';
        window.scrollTo(this.scroll[0], this.scroll[1]);
      } else {
        this.scroll = [window.pageXOffset, window.pageYOffset];
        this.fullscreen = true;
        body.style.height = '100vh';
        body.style.overflow = 'hidden';

        this.$gtag.event('open_fullscreen', {
          event_category: 'card',
          event_label: this.mode,
        });
      }
    },

    closeMenu() {
      if (this.showDropdown) {
        this.showDropdown = false;
      }
    },

    activeTab(index) {
      this.active = index;

      this.$gtag.event('change_tab', {
        event_category: 'card',
        event_label: this.settings.tabs[index].label,
      });
    },

    saveSvg(id) {
      const filename = `${this.$route.params.district}_${id}`;
      const svgData = this.$refs.graph.$refs.svg.outerHTML;
      downloadSvg(svgData, filename);
      this.closeMenu();

      this.$gtag.event('save_svg', {
        event_category: 'card',
        event_label: filename,
      });
    },

    savePng(id) {
      const filename = `${this.$route.params.district}_${id}.png`;
      downloadPng(this.$refs.graph.$refs.svg, filename);

      this.closeMenu();

      this.$gtag.event('save_png', {
        event_category: 'card',
        event_label: filename,
      });
    },

    saveCsv(id) {
      tableToCsv(this.$refs.graph.$refs.tableContainer);
      this.closeMenu();

      this.$gtag.event('save_csv', {
        event_category: 'card',
        event_label: `${this.$route.params.district}_${id}`,
      });
    },

    saveExcel(id) {
      tableToExcel(this.$refs.graph.$refs.tableContainer.querySelector('table'));
      this.closeMenu();

      this.$gtag.event('save_xls', {
        event_category: 'card',
        event_label: `${this.$route.params.district}_${id}`,
      });
    },

    // Sets 'showAsTabs' true/false by comparing the accumulated width
    // of all the tabs with the available space
    showTabsOrSelect() {
      let tabsWidth = 0;
      const tabs = this.$refs.tabRef;
      tabs.forEach((tab) => {
        tabsWidth += tab.offsetWidth;
      });
      this.showAsTabs = this.$refs.tabsRef.offsetWidth > tabsWidth;
    },
  },
};
</script>

<style scoped lang="scss">
@use '@/styles/colors' as *;
@use '@/styles/variables' as *;

.map-container {
  flex-grow: 1;
  height: 560px;
}

.about-container {
  position: relative;
  min-height: 560px;
  padding: 1rem;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: block;
  width: 3rem;
  height: 3rem;
  padding: 0;
  cursor: pointer;

  &::after,
  &::before {
    position: absolute;
    top: calc(50% - 0.1rem);
    left: 0.5rem;
    width: 2rem;
    height: 0.2rem;
    background: $color-purple;
    transform: rotate(45deg);
    content: '';
  }

  &::after {
    transform: rotate(-45deg);
  }
}

.card-container {
  flex: 50% 1 10;
  width: 100%;
  padding: 1em;

  @media screen and (min-width: $break-md) {
    width: 50%;
    max-width: 50%;
  }

  &.large {
    flex-basis: 100%;
    max-width: 100%;
  }
}

.close-fullscreen {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: rgba(black, 0.1);
  border-radius: 50%;

  &:hover {
    background: rgba(black, 0.2);
  }
}

.card {
  width: 100%;
  min-height: 18em;
  background: white;
  border: 1px solid $color-border;

  &.fullscreen {
    position: fixed;
    top: 1rem;
    right: 1rem;
    bottom: 1rem;
    left: 1rem;
    z-index: 5;
    display: flex;
    flex-direction: column;
    width: calc(100vw - 2rem);
    height: calc(100vh - 2rem);
    overflow-y: auto;
    outline: 2rem solid rgba(black, 0.9);
  }

  &__header {
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid $color-border;
  }

  &__headertext {
    display: flex;
    align-items: baseline;
    padding: 0 1rem;
  }

  &__title {
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    color: $color-purple;
    font-weight: 500;
    font-size: $font-large;
  }

  &__published {
    color: rgba($color-purple, 0.65);
    font-size: $font-small;
    text-transform: uppercase;
  }

  &__nav {
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 0;
    padding-left: 1rem;
  }

  &__toggle-menu {
    display: flex;
    margin-left: auto;
    padding-left: 1rem;
  }

  &__toggle-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    cursor: pointer;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      background: $color-blue;
      border-radius: 50%;
      transform: scale(1);
      transition: all 0.3s cubic-bezier(0.25, 0, 0, 1);
      content: '';
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      background: white;
      border-radius: 50%;
      transform: scale(1);
      transition: all 0.3s cubic-bezier(0.25, 0, 0, 1);
      content: '';
    }

    & > i {
      z-index: 1;
      user-select: none;
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
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 4rem;
  padding: 4px 0;
  overflow-x: hidden;

  &__select {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    left: 0;
    height: 3rem;
    margin-right: 1rem;
  }

  &__tab {
    padding: 0.75em;
    color: $color-purple;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.2s;

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
      position: relative;
      cursor: default;

      &::after {
        position: absolute;
        right: 0;
        bottom: -4px;
        left: 0;
        height: 5px;
        background-color: $color-blue;
        content: '';
      }
    }

    /* Change background color of tabs on hover */
    &:hover:not(.active):not(:disabled) {
      position: relative;
      background-color: rgba($color-grey-100, 0.5);
    }
  }
}

.context-menu {
  position: relative;
  z-index: 4;
  margin-left: auto;

  &__button {
    display: flex;
    align-items: center;
    height: 3rem;
    padding-right: 0.65rem;
    padding-left: 0.65rem;
    border-radius: 0 !important;
    cursor: pointer;

    &.card__toggle-button--active {
      color: $color-blue;
      background-color: $color-purple;
    }

    @media screen and (min-width: $break-md) {
      width: auto;
      height: 3rem;
      background-color: rgba($color-border, 0);

      &:hover:not(.card__toggle-button--active) {
        background-color: rgba($color-border, 0.35);
      }
    }

    .button-label {
      display: inline-block;
      margin-left: 0.25rem;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  &__dropdown {
    position: absolute;
    right: 0;
    z-index: 1;
    width: 310px;
    background-color: $color-purple;
    box-shadow: 0 2px 2px 0 $color-grey-200;

    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 1.25rem 0.75rem;
      color: $color-blue;
      font-weight: 500;
      cursor: pointer;

      --fg-color: #{$color-blue};

      &:disabled {
        text-decoration: line-through;
      }

      &:hover:not(:disabled) {
        background-color: darken($color-purple, 10%);
      }

      &-icon {
        z-index: 1;
        color: $color-purple;
      }

      span {
        margin-left: 0.5rem;
        text-align: left;
      }
    }
  }
}
</style>
