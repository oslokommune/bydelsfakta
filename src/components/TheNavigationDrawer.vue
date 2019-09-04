<template>
  <aside class="navbar">
    <router-link :to="{ name: 'Home' }" class="logo-link">
      <oslo-logo class="oslo__logo" aria-label="Oslo kommune logo"></oslo-logo>
    </router-link>

    <button
      class="selectedTopic"
      :class="{ active: showNavigation }"
      @click="showNavigation = !showNavigation"
      @keydown.esc="showNavigation = false"
      v-text="selectedTopic"
    ></button>
    <nav role="navigation" class="navigation" :class="{ 'navigation--show': showNavigation }">
      <ul class="state-toggle">
        <li class="state-toggle__element">
          <router-link
            class="state-toggle__link"
            :class="{ 'state-toggle__link--active': !compareDistricts }"
            :to="onClickTab(false)"
            v-html="$t('navigationDrawer.selectOne.tab')"
          ></router-link>
        </li>
        <li class="state-toggle__element">
          <router-link
            class="state-toggle__link"
            :class="{ 'state-toggle__link--active': compareDistricts }"
            :to="onClickTab(true)"
            v-html="$t('navigationDrawer.linkCompare')"
          ></router-link>
        </li>
      </ul>

      <header class="navigation-header">
        <template v-if="compareDistricts">
          <input
            type="checkbox"
            id="allDistricts"
            v-model="selectedAll"
            :indeterminate.sync="indeterminate"
            @change="toggleCheckbox(selectedAll)"
            class="navigation-header__input custom"
            :value="selectedAll"
          />
          <label
            for="allDistricts"
            class="custom-label custom-label__selectedAll"
            @keypress="toggleCheckbox(!selectedAll)"
            tabindex="0"
            :class="{
              'custom-label__selectedAll--checked': selectedAll,
              'custom-label__selectedAll--indeterminate': indeterminate,
            }"
          ></label>
          <select
            id="navigation-drawer-select"
            class="navigation-header__select"
            v-model="selectedPredefinedOption"
            :aria-label="$t('navigationDrawer.select.label')"
          >
            <option
              v-for="(element, index) in options"
              :key="index"
              :value="element.option"
              :selected="element.selected"
              :disabled="element.disabled"
              >{{ element.label }}</option
            >
          </select>
        </template>
        <span v-else>
          {{ $t('navigationDrawer.selectOne.label') }}
        </span>
      </header>
      <ul class="navigation-list">
        <li
          v-for="link in links"
          :key="link.key"
          class="navigation-link"
          :class="{
            'navigation-link--active': !compareDistricts && districts[0] === link.key,
            'navigation-link--compare': compareDistricts && selected.includes(link.key),
          }"
        >
          <input
            type="checkbox"
            v-model="selected"
            :value="link.key"
            :id="`checkbox-${link.uri}`"
            @change="onChangeCheckbox()"
            v-if="compareDistricts"
            class="custom"
          />
          <label
            v-if="compareDistricts"
            :for="`checkbox-${link.uri}`"
            @keypress="onChangeCheckbox(link.key)"
            tabindex="0"
            class="custom-label"
            :class="{ compare: compareDistricts }"
          >
            <span class="navigation-link__label navigation-link__label--span">{{ link.value }}</span>
          </label>
          <router-link
            v-if="!compareDistricts"
            :id="`a-${link.uri}`"
            class="navigation-link__label"
            :to="onClickDistrict(link.uri)"
            >{{ link.value }}</router-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import allDistricts from '../config/allDistricts';
import predefinedOptions from '../config/predefinedOptions';
import OsloLogo from '../assets/oslo-logo.svg'; //

export default {
  name: 'TheNavigationDrawer',
  components: { OsloLogo },
  data() {
    return {
      links: allDistricts,
      showNavigation: false,
      selected: [],
      selectedAll: false,
      indeterminate: false,
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
    ...mapGetters(['getDistrict']),
  },

  methods: {
    ...mapActions(['setNavigationIsOpen', 'addDistrict']),

    toggleCheckbox(event) {
      this.selected = [];
      this.selected = event ? allDistricts.map(district => district.key) : [];
      this.selectedPredefinedOption = [];
      this.$route.params.topic === undefined
        ? this.$router.push({ name: 'District', params: { district: 'alle' } })
        : this.$router.push({
            name: 'Topic',
            params: { district: 'alle', topic: this.$route.params.topic },
          });
    },

    onChangeCheckbox(key) {
      // Reset selector
      this.selectedPredefinedOption = [];

      if (key) {
        if (!this.selected.includes(key)) this.selected.push(key);
        else this.selected = this.selected.filter(k => k !== key);
      }

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

    onClickTab(compare) {
      const name = this.$route.params.topic ? 'Topic' : 'District';

      return { name, params: { district: compare ? 'alle' : allDistricts[0].uri } };
    },
  },

  watch: {
    $route(to) {
      const routes = to.path.split('/');
      const district = allDistricts.find(district => district.uri === routes[2]);

      if (to.name === 'NotFound') {
        this.$store.dispatch('cleanState');
        this.selected = [];
      } else if (to.name === 'Home') {
        this.addDistrict({ district: 'gamleoslo', pushRoute: false });
        this.selected = ['01'];
      }

      if (to.params.district === 'alle' && this.selected.length !== this.links.length) {
        this.selected = [];
      } else if (this.compareDistricts && this.districts[0] !== 'alle') {
        this.selected = routes[2].split('-');
      } else if (district !== undefined) {
        this.selected = [district.key];
      }

      // Hide navigation when a selection is made,
      // but not if 'sammenlign bydeler' og a custom
      // selection is made.
      if (!this.compareDistricts || (this.compareDistricts && !this.selected.length)) {
        this.showNavigation = false;
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

    selected(newVal) {
      if (newVal.length === 0) {
        this.indeterminate = false;
        this.selectedAll = false;
      } else if (newVal.length === this.links.length) {
        this.indeterminate = false;
        this.selectedAll = true;
      } else {
        this.indeterminate = true;
        this.selectedAll = false;
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
      margin: 0;
      padding: 0;
    }
  }

  &-header {
    align-items: center;
    border-bottom: 1px solid darken($color-border, 20%);
    display: flex;
    font-weight: 500;
    height: 4rem;
    margin-bottom: 0.5rem;
    padding: 1em 0 0.5rem 46px;

    & > select {
      border: 1px solid rgba(black, 0.1);
      border-radius: 1px;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      position: relative;
      width: 100%;

      &::after {
        background: red;
        bottom: 0;
        content: '';
        display: block;
        height: 20px;
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        z-index: 2;
      }
    }

    & > span {
      padding: 1rem 0;
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

  &::before {
    opacity: 0;
  }

  &::before,
  &::after {
    background: $color-purple;
    bottom: 1.75rem;
    box-shadow: 0 0.6rem 0 $color-purple, 0 -0.6rem 0 $color-purple;
    content: '';
    display: none;
    height: 0.2rem;
    position: absolute;
    right: 1.5rem;
    top: calc(50% - 0.1rem);
    transform: rotate(0);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s 0.4s ease-in-out, opacity 0.2s ease-in-out;
    width: 1.5rem;

    @media screen and (min-width: $break-xs) {
      display: block;
      width: 2rem;
    }

    @media screen and (min-width: $break-xs) {
      display: block;
      right: 2rem;
    }

    @media screen and (min-width: $break-lg) {
      display: none;
    }
  }

  &.active {
    &::after {
      box-shadow: none;
      transform: rotate(45deg);
      transition: transform 0.2s ease-in-out;
    }

    &::before {
      box-shadow: none;
      opacity: 1;
      transform: rotate(-45deg);
      transition: transform 0.2s ease-in-out;
    }
  }

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
  width: 8em;

  @media screen and (min-width: $break-lg) {
    align-self: center;
    padding: 0;
    width: 10em;
  }
}

input[type='checkbox'].custom {
  display: none;
}

.custom-label {
  border-bottom-left-radius: $rowHeight / 2;
  border-top-left-radius: $rowHeight / 2;
  cursor: pointer;
  display: inline-block;
  height: $rowHeight;
  padding-left: 1rem;
  position: relative;
  vertical-align: middle;
  width: 100%;

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

  &:not(.compare):not(.custom-label--checked) {
    &::before,
    &::after {
      transition: all 0.3s ease-in-out;
    }
  }

  &.compare::before {
    opacity: 0.35;
  }

  &__selectedAll {
    margin-left: -3.3rem;
    padding-right: 2.2rem;
    width: 0;

    &::before {
      opacity: 0.35;
    }

    &::after {
      transition: transform 0.1s ease-in-out !important;
    }

    &--indeterminate {
      &::after {
        transform: scale(1, 0.25);
      }
    }

    &--checked {
      &::before {
        opacity: 1 !important;
      }

      &::after {
        transform: scale(1) !important;
        transition: transform 0.3s cubic-bezier(0.29, -0.01, 0.41, 1.9) !important;
      }
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

  &--compare {
    background-color: lighten($color-yellow, 15%);
    transition: background-color 0.3s ease-in-out;

    .custom-label::before {
      opacity: 1 !important;
    }

    .custom-label::after {
      transform: scale(1) !important;
      transition: transform 0.3s cubic-bezier(0.29, -0.01, 0.41, 1.9);
    }
  }

  &:not(&--compare):not(&--active):hover {
    background-color: rgba($color-purple, 0.05);
    transition-duration: 0.05s;
  }

  &--active {
    background-color: $color-yellow;
    transition: all 0.3s ease-in-out;

    #{$p}__label {
      color: $color-purple;
      font-weight: 500;
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
    margin-left: 46px;
    position: relative;

    &--compare {
      margin-bottom: 1rem;
      margin-top: 0;
      padding-left: 4rem;

      @media screen and (min-width: $break-md) {
        margin-top: 1rem;
        padding-left: 3.5rem;
      }
    }

    &--span {
      margin-left: 32px;
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
}

.state-toggle {
  display: flex;
  height: 4.5em;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;

  &::after {
    background: darken($color-border, 20%);
    bottom: -5px;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
  }

  &__element {
    align-items: center;
    display: flex;
    flex: 50% 0 0;
    height: 100%;
    justify-content: center;
    margin: 0;
    position: relative;
    text-align: center;
  }

  &__link {
    align-items: center;
    border-radius: 3px;
    color: rgba($color-purple, 0.75);
    display: flex;
    font-weight: 500;
    height: 100%;
    justify-content: center;
    width: 100%;

    &::after {
      background: $color-blue;
      bottom: -5px;
      content: '';
      display: block;
      height: 5px;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
    }

    &:hover:not(&--active) {
      background: rgba($color-purple, 0.04);
    }

    &--active {
      color: $color-purple;

      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
