<template>
  <div @keydown.escape="closeMenu()" v-click-outside="closeMenu" class="context-menu">
    <button
      class="context-menu__button"
      :class="{ 'card__toggle-button--active': showDropdown }"
      @click="setShowDropdown(!showDropdown)"
      aria-haspopup="true"
      :aria-label="showDropdown ? $t('graphCard.dropdown.close') : $t('graphCard.dropdown.open')"
      data-id="context-menu-button"
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
        <ok-icon :icon-ref="fullscreen ? 'fullscreenExit' : 'fullscreen'" :options="{ size: 'small' }"></ok-icon>
        <span>{{ fullscreen ? $t('graphCard.fullscreen.exit.label') : $t('graphCard.fullscreen.open.label') }}</span>
      </button>

      <button
        role="menuitem"
        @click="
          mode === 'about' ? (mode = 'graph') : (mode = 'about');
          setShowDropdown(false);
        "
        @keyup.enter="
          mode === 'about' ? (mode = 'graph') : (mode = 'about');
          setShowDropdown(false);
        "
        class="context-menu__dropdown-item"
        tabindex="0"
        :title="$t('graphCard.about.aria')"
        :aria-label="$t('graphCard.about.aria')"
        data-id="context-menu-button-about"
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
        data-id="context-menu-button-png"
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
        data-id="context-menu-button-svg"
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
        data-id="context-menu-button-csv"
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
        data-id="context-menu-button-excel"
      >
        <ok-icon icon-ref="download" :options="{ size: 'small' }"></ok-icon>
        <span>{{ $t('graphCard.saveExcel.label') }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import OkIcon from './OkIcon';

export default {
  name: 'VContextMenu',
  components: { OkIcon },
  computed: {
    ...mapState({
      showDropdown: 'contextShowDropdown',
    }),
  },
  methods: {
    ...mapActions({
      setShowDropdown: 'setContextShowDropdown',
    }),
    closeMenu() {
      if (this.showDropdown) {
        this.setShowDropdown(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../styles/colors';
@import './../styles/variables';

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
