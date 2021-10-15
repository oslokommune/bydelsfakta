<template>
  <aside class="navbar">
    <vue-skip-to to="#select" :text="$t(`navigationDrawer.skipToContent`)"></vue-skip-to>
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
            id="allDistricts"
            v-model="selectedAll"
            type="checkbox"
            :indeterminate="indeterminate"
            class="navigation-header__input custom"
            :value="selectedAll"
            :aria-label="$t('navigationDrawer.select.label')"
            @change="toggleCheckbox(selectedAll)"
          />
          <label
            for="allDistricts"
            class="custom-label custom-label__selectedAll"
            tabindex="0"
            :class="{
              'custom-label__selectedAll--checked': selectedAll,
              'custom-label__selectedAll--indeterminate': indeterminate,
            }"
            @keypress="toggleCheckbox(!selectedAll)"
          ></label>
          <select
            id="navigation-drawer-select"
            v-model="selectedPredefinedOption"
            class="navigation-header__select"
            :aria-label="$t('navigationDrawer.select.label')"
          >
            <option
              v-for="(element, index) in options"
              :key="index"
              :value="element.option"
              :selected="element.selected"
              :disabled="element.disabled"
            >
              {{ element.label }}
            </option>
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
            v-if="compareDistricts"
            :id="`checkbox-${link.uri}`"
            v-model="selected"
            type="checkbox"
            :value="link.key"
            class="custom"
            @change="onChangeCheckbox()"
          />
          <label
            v-if="compareDistricts"
            :for="`checkbox-${link.uri}`"
            tabindex="0"
            class="custom-label"
            :class="{ compare: compareDistricts }"
            @keypress="onChangeCheckbox(link.key)"
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
import allDistricts from '@/config/allDistricts';
import predefinedOptions from '@/config/predefinedOptions';
import OsloLogo from '@/assets/oslo-logo.svg';

export default {
  name: 'TheNavigationDrawer',
  components: { OsloLogo },
  data: () => ({
    links: allDistricts,
    showNavigation: false,
    selected: [],
    selectedAll: false,
    indeterminate: false,
    options: predefinedOptions,
    selectedPredefinedOption: [],
  }),

  computed: {
    selectedTopic: {
      get() {
        if (this.compareDistricts) {
          const count = this.selected.length ? this.selected.length : this.links.length;
          return `${this.$t('navigationDrawer.navigationDistrict.compareDistrict')} (${count})`;
        }
        if (!this.selected.length) {
          return `${this.$t('navigationDrawer.navigationDistrict.chooseDistrict')}`;
        }
        return this.links[this.selected - 1].value;
      },
      set() {},
    },
    ...mapState(['compareDistricts', 'districts', 'navigationIsOpen']),
    ...mapGetters(['getDistrict']),
  },

  watch: {
    $route(to) {
      const routes = to.path.split('/');
      const district = allDistricts.find((d) => d.uri === routes[2]);

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
        if (this.$route.params.topic === undefined) {
          this.$router.push({ name: 'District', params: { district: this.selected.join('-') } });
        } else {
          this.$router.push({
            name: 'Topic',
            params: { district: this.selected.join('-'), topic: this.$route.params.topic },
          });
        }
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

  methods: {
    ...mapActions(['setNavigationIsOpen', 'addDistrict']),

    toggleCheckbox(event) {
      this.selected = [];
      this.selected = event ? allDistricts.map((district) => district.key) : [];
      this.selectedPredefinedOption = [];

      if (this.$route.params.topic === undefined) {
        this.$router.push({ name: 'District', params: { district: 'alle' } });
      } else {
        this.$router.push({
          name: 'Topic',
          params: { district: 'alle', topic: this.$route.params.topic },
        });
      }
    },

    onChangeCheckbox(key) {
      // Reset selector
      this.selectedPredefinedOption = [];

      if (key) {
        if (!this.selected.includes(key)) this.selected.push(key);
        else this.selected = this.selected.filter((k) => k !== key);
      }

      const district =
        this.selected.length === 0 || this.selected.length === this.links.length ? 'alle' : this.selected.join('-');

      if (this.$route.params.topic === undefined) {
        this.$router.push({ name: 'District', params: { district } });
      } else {
        this.$router.push({
          name: 'Topic',
          params: { district, topic: this.$route.params.topic },
        });
      }
    },

    onClickDistrict(district) {
      if (district === this.$route.params.district) {
        return { name: 'District', params: { district } };
      }

      if (this.$route.params.topic === undefined) {
        return { name: 'District', params: { district } };
      }

      return { name: 'Topic', params: { district, topic: this.$route.params.topic } };
    },

    onClickTab(compare) {
      const name = this.$route.params.topic ? 'Topic' : 'District';

      return { name, params: { district: compare ? 'alle' : allDistricts[0].uri } };
    },
  },
};
</script>

<style scoped lang="scss">
@use 'sass:math';
@import '../styles/colors';
@import '../styles/variables';

$rowHeight: 2.5em;

.navbar {
  position: relative;
  z-index: 4;
  display: flex;
  flex: 5em 0 0;
  width: 100%;
  padding-left: 0;
  background-color: $color-yellow;

  @media screen and (min-width: $break-lg) {
    position: fixed;
    top: 0;
    flex-direction: column;
    width: $sidebarWidth;
    height: 100vh;
    padding-bottom: 2em;
    padding-left: 1rem;
    overflow-y: auto;
    background-color: inherit;
  }
}

.navigation {
  position: absolute;
  top: 5em;
  right: 0;
  z-index: 1;
  display: none;
  width: 100%;
  max-height: calc(100vh - 5em);
  padding: 0 0 2em;
  overflow-y: auto;
  background: white;
  border-top: 2px solid $color-bg;
  box-shadow: 0 2px 3px rgba($color-grey-600, 0.5);

  &--show {
    display: block;
  }

  @media screen and (min-width: $break-sm) {
    width: calc(100% - 8rem);
    border-top: none;
  }

  @media screen and (min-width: $break-lg) {
    position: relative;
    top: 0;
    display: block;
    width: 100%;
    padding: 0;
    background: none;
    box-shadow: none;
  }

  &-list {
    padding: 0 1em;

    @media screen and (min-width: $break-lg) {
      margin: 0;
      padding: 0;
    }
  }

  &-header {
    display: flex;
    align-items: center;
    height: 4rem;
    margin-bottom: 0.5rem;
    padding: 1em 0 0.5rem 46px;
    font-weight: 500;
    border-bottom: 1px solid darken($color-border, 20%);

    & > select {
      position: relative;
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: 1px solid rgba(black, 0.1);
      border-radius: 1px;

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        display: block;
        width: 20px;
        height: 20px;
        background: red;
        content: '';
      }
    }

    & > span {
      padding: 1rem 0;
    }
  }
}

.selectedTopic {
  display: block;
  flex: auto 1 0;
  height: auto;
  padding-left: 1rem;
  color: $color-purple;
  font-weight: 500;
  font-size: $font-medium;
  text-align: left;
  cursor: pointer;

  &::before {
    opacity: 0;
  }

  &::before,
  &::after {
    position: absolute;
    top: calc(50% - 0.1rem);
    right: 1.5rem;
    bottom: 1.75rem;
    display: none;
    width: 1.5rem;
    height: 0.2rem;
    background: $color-purple;
    box-shadow: 0 0.6rem 0 $color-purple, 0 -0.6rem 0 $color-purple;
    transform: rotate(0);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s 0.4s ease-in-out, opacity 0.2s ease-in-out;
    content: '';

    @media screen and (min-width: $break-xs) {
      display: block;
      width: 2rem;
    }

    @media screen and (min-width: $break-xs) {
      right: 2rem;
      display: block;
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
      transform: rotate(-45deg);
      opacity: 1;
      transition: transform 0.2s ease-in-out;
    }
  }

  @media screen and (min-width: $break-lg) {
    display: none;
  }
}

.logo-link {
  display: flex;
  flex-basis: auto;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 5rem;
  background: $color-bg;

  @media screen and (min-width: $break-lg) {
    height: 8em;
    padding: 0.5rem 0;
    background: none;
  }
}

.oslo__logo {
  width: 8em;
  height: 100%;
  object-fit: contain;
  cursor: pointer;

  @media screen and (min-width: $break-lg) {
    align-self: center;
    width: 10em;
    padding: 0;
  }
}

input[type='checkbox'].custom {
  display: none;
}

.custom-label {
  position: relative;
  display: inline-block;
  width: 100%;
  height: $rowHeight;
  padding-left: 1rem;
  vertical-align: middle;
  border-top-left-radius: math.div($rowHeight, 2);
  border-bottom-left-radius: math.div($rowHeight, 2);
  cursor: pointer;

  // unchecked border
  &::before {
    position: absolute;
    top: calc(#{math.div($rowHeight, 2)} - 9px);
    left: 20px;
    width: 16px;
    height: 16px;
    border: 1px solid $color-purple;
    -moz-border-radius: 1px;
    -webkit-border-radius: 1px;
    border-radius: 1px;
    opacity: 0;
    content: '';
  }

  // checked inside border
  &::after {
    position: absolute;
    top: calc(#{math.div($rowHeight, 2)} - 6px);
    left: 23px;
    width: 10px;
    height: 10px;
    background-color: $color-purple;
    border-radius: 1px;
    transform: scale(0);
    content: '';
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
    width: 0;
    margin-left: -3.3rem;
    padding-right: 2.2rem;

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

  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1px;
  background-color: inherit;
  border-radius: math.div($rowHeight, 2);
  cursor: pointer;
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
    position: relative;
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: $rowHeight;
    margin-left: 46px;
    color: rgba($color-purple, 0.85);
    letter-spacing: 0.1px;
    border-top-right-radius: math.div($rowHeight, 2);
    border-bottom-right-radius: math.div($rowHeight, 2);

    &--compare {
      margin-top: 0;
      margin-bottom: 1rem;
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
      position: absolute;
      top: 0;
      bottom: 0;
      left: -10px;
      display: none;
      width: 10px;
      background: $color-purple;
      content: '';
      pointer-events: none;
    }
  }

  &--compare &__label {
    color: $color-purple;
  }
}

.state-toggle {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4.5em;
  margin: 0;
  padding: 0;
  list-style-type: none;

  &::after {
    position: absolute;
    right: 0;
    bottom: -5px;
    left: 0;
    display: block;
    height: 1px;
    background: darken($color-border, 20%);
    opacity: 1;
    content: '';
  }

  &__element {
    position: relative;
    display: flex;
    flex: 50% 0 0;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
    text-align: center;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: rgba($color-purple, 0.75);
    font-weight: 500;
    border-radius: 3px;

    &::after {
      position: absolute;
      right: 0;
      bottom: -5px;
      left: 0;
      display: block;
      height: 5px;
      background: $color-blue;
      opacity: 0;
      content: '';
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
