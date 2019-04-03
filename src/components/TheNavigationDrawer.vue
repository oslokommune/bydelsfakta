<template>
  <aside class="navbar">
    <router-link :to="{ name: 'Home' }" class="logo-link">
      <img :src="osloIcon" alt="oslo-logo" class="oslo__logo" />
    </router-link>

    <button
      class="selectedTopic"
      @click="showNavigation = !showNavigation"
      @keydown.esc="showNavigation = false"
      v-text="selectedTopic"
    ></button>
    <div class="version-tag">Alpha</div>
    <nav role="navigation" class="navigation" :class="{ 'navigation--show': showNavigation }">
      <ul class="navigation-list">
        <li
          v-for="link in links"
          :key="link.key"
          class="navigation-link"
          :class="{
            'navigation-link--active': $route.params.district === link.uri && !compareDistricts,
            'navigation-link--compare': compareDistricts && selected.includes(link.key),
          }"
        >
          <input
            type="checkbox"
            v-model="selected"
            :value="link.key"
            :id="`checkbox-${link.uri}`"
            @change="onChangeCheckbox"
            :disabled="!compareDistricts && districts.length === 1 && districts[0] === link.key"
          />
          <label :for="`checkbox-${link.uri}`" :class="{ compare: compareDistricts }"></label>
          <router-link :id="`a-${link.uri}`" class="navigation-link__label" :to="onClickDistrict(link.uri)">{{
            link.value
          }}</router-link>
        </li>
        <li
          class="navigation-link navigation-link__label-compare"
          id="sammenlign"
          :class="{ 'navigation-link--active': compareDistricts }"
        >
          <router-link id="sammenlign-href" :to="onClickSammenlign()" class="navigation-link__label">{{
            $t('navigationDrawer.linkCompare')
          }}</router-link>
        </li>
      </ul>
      <transition name="fade">
        <div class="navigation-drawer__buttons" v-if="compareDistricts">
          <div class="navigation-drawer__button-container">
            <button
              class="navigation-drawer__button"
              @click="selectAll"
              :aria-label="$t('navigationDrawer.selectAll.aria')"
            >
              {{ $t('navigationDrawer.selectAll.label') }}
            </button>
            <button
              class="navigation-drawer__button"
              :disabled="selected.length === 0"
              @click="unselectAll"
              :aria-label="$t('navigationDrawer.unselectAll.aria')"
            >
              {{ $t('navigationDrawer.unselectAll.label') }}
            </button>
          </div>
          <div class="navigation-drawer__select-container">
            <label for="navigation-drawer-select" class="visually-hidden">{{
              $t('navigationDrawer.select.label')
            }}</label>
            <select id="navigation-drawer-select" class="navigation-drawer__select" v-model="selectedPredefinedOption">
              <option
                v-for="(element, index) in options"
                :key="index"
                :value="element.option"
                :selected="element.selected"
                :disabled="element.disabled"
                >{{ element.label }}</option
              >
            </select>
          </div>
        </div>
      </transition>
    </nav>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import allDistricts from '../config/allDistricts';
import predefinedOptions from '../config/predefinedOptions';
import osloIcon from '../assets/oslo-logo.svg';

export default {
  name: 'TheNavigationDrawer',
  data() {
    return {
      links: allDistricts,
      osloIcon: osloIcon,
      showNavigation: false,
      selected: [],
      options: predefinedOptions,
      selectedPredefinedOption: [],
    };
  },

  computed: {
    selectedTopic: {
      get: function() {
        if (this.compareDistricts) {
          let count = this.selected.length ? this.selected.length : this.links.length;
          return `${this.$t('navigationDrawer.navigationDistrict.compareDistrict')} (${count})`;
        } else if (!this.selected.length) {
          return `${this.$t('navigationDrawer.navigationDistrict.chooseDistrict')}`;
        } else {
          return this.links[this.selected - 1].value;
        }
      },
      set: function() {},
    },
    ...mapState(['compareDistricts', 'districts', 'navigationIsOpen']),
  },

  methods: {
    ...mapActions(['setNavigationIsOpen', 'cleanState', 'addDistrict']),

    onChangeCheckbox() {
      // Reset selector
      this.selectedPredefinedOption = [];

      const district =
        this.selected.length === 0 || this.selected.length === this.links.length ? 'alle' : this.selected.join('-');

      this.$route.params.topic === undefined
        ? this.$router.push({ name: 'District', params: { district } })
        : this.$router.push({
            name: 'Topic',
            params: { district, topic: this.$route.params.topic },
          });
    },

    onClickDistrict(district) {
      return district === this.$route.params.district
        ? { name: 'District', params: { district } }
        : this.$route.params.topic === undefined
        ? { name: 'District', params: { district } }
        : { name: 'Topic', params: { district, topic: this.$route.params.topic } };
    },

    onClickSammenlign() {
      const routes = this.$route.path.split('/');
      const selectedDistricts = this.selected.join('-');
      const district = allDistricts.find(district => district.uri === routes[2]);

      if (district !== undefined && selectedDistricts === district.key) {
        return this.$route.params.topic === undefined
          ? { name: 'District', params: { district: 'alle' } }
          : { name: 'Topic', params: { district: 'alle', topic: this.$route.params.topic } };
      } else if (district === undefined && !this.compareDistricts) {
        return { name: 'District', params: { district: 'alle' } };
      } else {
        return { name: 'District', params: { district: this.$route.params.district } };
      }
    },

    selectAll() {
      this.selected = [];
      this.selected = allDistricts.map(district => district.key);
      this.selectedPredefinedOption = [];
      this.$route.params.topic === undefined
        ? this.$router.push({ name: 'District', params: { district: 'alle' } })
        : this.$router.push({
            name: 'Topic',
            params: { district: 'alle', topic: this.$route.params.topic },
          });
    },

    unselectAll() {
      this.selected = [];
      this.selectedPredefinedOption = [];
      this.$route.params.topic === undefined
        ? this.$router.push({ name: 'District', params: { district: 'alle' } })
        : this.$router.push({
            name: 'Topic',
            params: { district: 'alle', topic: this.$route.params.topic },
          });
    },
  },

  watch: {
    $route(to, from) {
      const routes = to.path.split('/');
      const params = to.params.district !== undefined ? to.params.district.split('-') : [];
      const district = allDistricts.find(district => district.uri === routes[2]);

      if (to.name === 'NotFound') {
        this.cleanState();
        this.selected = [];
      }

      if (to.params.district === 'alle' && this.selected.length !== this.links.length) {
        this.selected = [];
      } else if (params.length > 1) {
        const paramDistrict = routes[2].split('-');
        this.selected = paramDistrict;
      } else if (district !== undefined) {
        this.selected = [district.key];
      }

      if (to.name === 'Home') {
        this.addDistrict({ district: 'alle', pushRoute: false });
        this.selected = [];
      }

      // Hide navigation when a selection is made,
      // but not if 'sammenlign bydeler' og a custom
      // selection is made.
      if (!this.compareDistricts || (this.compareDistricts && !this.selected.length)) {
        this.showNavigation = false;
      }

      if (from.name === null) {
        this.selected = this.districts;
      }
    },

    selectedPredefinedOption() {
      if (this.selectedPredefinedOption.length !== 0) {
        this.selected = this.selectedPredefinedOption;
        this.$route.params.topic === undefined
          ? this.$router.push({ name: 'District', params: { district: this.selected.join('-') } })
          : this.$router.push({
              name: 'Topic',
              params: { district: this.selected.join('-'), topic: this.$route.params.topic },
            });
      }
    },

    showNavigation() {
      this.setNavigationIsOpen(this.showNavigation);
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors';
@import '../styles/variables';

$rowHeight: 2.5em;

.version-tag {
  align-self: center;
  border: 1px solid $color-purple;
  border-radius: 1px;
  font-size: $font-small;
  font-weight: 500;
  margin: 0 0.5rem;
  padding: 0.25rem 0.5rem;

  @media screen and (min-width: $break-lg) {
    padding: 0.25rem 0.75rem;
    transform: translateY(-1rem);
  }
}

.navbar {
  background-color: $color-yellow;
  display: flex;
  flex: 5em 0 0;
  padding-left: 0;
  position: relative;
  width: 100%;
  z-index: 4;

  @media screen and (min-width: $break-lg) {
    background-color: inherit;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 2em;
    padding-left: 1rem;
    position: fixed;
    top: 0;
    width: $sidebarWidth;
  }
}

.navigation {
  background: white;
  border-top: 2px solid $color-bg;
  box-shadow: 0 2px 3px rgba($color-grey-600, 0.5);
  display: none;
  max-height: calc(100vh - 5em);
  overflow-y: auto;
  padding: 0 0 2em;
  position: absolute;
  right: 0;
  top: 5em;
  width: 100%;
  z-index: 1;

  &--show {
    display: block;
  }

  @media screen and (min-width: $break-sm) {
    border-top: none;
    width: calc(100% - 8rem);
  }

  @media screen and (min-width: $break-lg) {
    background: none;
    box-shadow: none;
    display: block;
    padding: 0;
    position: relative;
    top: 0;
    width: 100%;
  }

  &-list {
    padding: 0 1em;

    @media screen and (min-width: $break-lg) {
      padding: 0;
    }
  }
}

.selectedTopic {
  color: $color-purple;
  cursor: pointer;
  display: block;
  flex: auto 1 0;
  font-size: $font-medium;
  font-weight: 500;
  height: auto;
  padding-left: 1rem;
  text-align: left;

  @media screen and (min-width: $break-lg) {
    display: none;
  }
}

.logo-link {
  align-items: center;
  align-self: center;
  background: $color-bg;
  display: flex;
  flex-basis: auto;
  height: 5rem;
  justify-content: center;

  @media screen and (min-width: $break-lg) {
    background: none;
    height: 8em;
    padding: 0.5rem 0;
  }
}

.oslo__logo {
  cursor: pointer;
  height: 100%;
  object-fit: contain;
  padding: 0.25rem 0.25rem;
  width: 8em;

  @media screen and (min-width: $break-lg) {
    align-self: center;
    padding: 0;
    width: 10em;
  }
}

input[type='checkbox'] {
  display: none;

  & + label {
    border-bottom-left-radius: $rowHeight / 2;
    border-top-left-radius: $rowHeight / 2;
    cursor: pointer;
    display: inline-block;
    height: $rowHeight;
    padding-left: 1rem;
    position: relative;
    vertical-align: middle;
    width: 46px;

    // unchecked border
    &::before {
      border: 1px solid $color-purple;
      -moz-border-radius: 1px;
      -webkit-border-radius: 1px;
      border-radius: 1px;
      content: '';
      height: 16px;
      left: 20px;
      opacity: 0;
      position: absolute;
      top: calc((#{$rowHeight} / 2) - 9px);
      width: 16px;
    }

    &:hover {
      background: darken($color-bg, 10%);

      &::before {
        background: rgba(white, 0.15);
        opacity: 0.8 !important;
      }
    }

    // checked inside border
    &::after {
      background-color: $color-purple;
      border-radius: 1px;
      content: '';
      height: 10px;
      left: 23px;
      position: absolute;
      top: calc((#{$rowHeight} / 2) - 6px);
      transform: scale(0);
      width: 10px;
    }

    &:not(.compare) {
      &::before,
      &::after {
        transition: all 0.3s ease-in-out;
      }
    }

    &.compare::before {
      opacity: 0.35;
    }
  }

  &:checked:not(&-compare) + label {
    opacity: 1;
    position: relative;

    // checked inside border
    &::after {
      transform: scale(1);
      transition: transform 0.3s cubic-bezier(0.29, -0.01, 0.41, 1.9);
    }

    // checked border
    &::before {
      border: 1px solid $color-purple;
      opacity: 1;
      transition: transform 0.3s ease-in-out;
    }
  }
}

.navigation-link {
  $p: &;

  align-items: center;
  background-color: inherit;
  border-radius: $rowHeight / 2;
  cursor: pointer;
  display: flex;
  margin-bottom: 1px;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &--compare {
    background-color: lighten($color-yellow, 15%);
    transition: background-color 0.3s ease-in-out;

    label::before {
      opacity: 1 !important;
    }

    label::after {
      transform: scale(1) !important;
      transition: transform 0.3s cubic-bezier(0.29, -0.01, 0.41, 1.9);
    }
  }

  &--active {
    background-color: $color-yellow;
    transition: all 0.3s ease-in-out;

    #{$p}__label {
      color: $color-purple;
      font-weight: 500;
    }

    label:hover {
      background: none !important;
    }

    input[type='checkbox']:checked + label {
      &::after {
        transform: scale(0);
      }
    }
  }

  &__label {
    align-items: center;
    border-bottom-right-radius: $rowHeight / 2;
    border-top-right-radius: $rowHeight / 2;
    color: rgba($color-purple, 0.85);
    display: flex;
    flex-grow: 1;
    height: $rowHeight;
    letter-spacing: 0.1px;
    position: relative;

    &-compare {
      margin-bottom: 1rem;
      margin-top: 0;
      padding-left: 4rem;

      @media screen and (min-width: $break-md) {
        margin-top: 1rem;
        padding-left: 3.5rem;
      }
    }

    // Add visual border on the left side of text on hover
    &::before {
      background: $color-purple;
      bottom: 0;
      content: '';
      display: none;
      left: -10px;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 10px;
    }
  }

  &--compare &__label {
    color: $color-purple;
  }

  &:hover:not(&--active) label:not(.compare)::before {
    opacity: 0.15;
    transition: all 0s;
  }

  &:not(&--active):not(&--compare) &__label:hover {
    background-color: darken($color-bg, 5%);
    color: $color-purple;

    // Show the visual border on hover
    &::before {
      background-color: darken($color-bg, 5%);
      display: block;
    }
  }
}

.navigation-drawer__buttons {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  .navigation-drawer__button-container {
    display: flex;

    @media screen and (min-width: $break-lg) {
      align-self: flex-end;
    }

    .navigation-drawer__button {
      border: 1px solid $color-purple;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
      color: $color-purple;
      font-weight: bold;
      height: 42px;
      margin: 0.5rem;
      padding: 0.3rem 1rem 0.3rem 1rem;
      transition: all 0.3s ease-in-out;
      width: 50%;

      &:not([disabled]) {
        cursor: pointer;
      }

      @media screen and (min-width: $break-md) {
        width: auto;
      }

      @media screen and (min-width: $break-md) {
        height: auto;
      }

      &:disabled {
        opacity: 0.2;
        transition: opacity 0.3s ease-in-out;
      }

      &:hover:not([disabled]) {
        box-shadow: 0 0 0 1px $color-grey-50;
      }
    }
  }
}

.navigation-drawer__select-container {
  display: flex;
  position: relative;

  @media screen and (min-width: $break-lg) {
    align-self: flex-end;
  }

  .navigation-drawer__select {
    border: 1px solid $color-purple;
    color: $color-purple;
    cursor: pointer;
    font-weight: bold;
    height: 42px;
    margin: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    position: relative;
    width: 100%;

    @media screen and (min-width: $break-lg) {
      height: auto;
      width: 205px;
    }
  }

  &::before {
    border-bottom: 2px solid $color-purple;
    border-left: 2px solid $color-purple;
    content: '';
    height: 0.5rem;
    position: absolute;
    right: 1.5rem;
    top: calc(50% - 0.35rem);
    transform: rotate(-45deg);
    width: 0.5rem;
  }
}
</style>
