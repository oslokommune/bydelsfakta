<template>
  <aside class="navbar">
    <img :src="osloIcon" alt="oslo-logo" class="oslo__logo" @click="onClickHome" />
    <button
      class="selectedSubpage"
      @click="showNavigation = !showNavigation"
      @keydown.esc="showNavigation = false"
      v-text="selectedSubpage"
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
import { mapState } from 'vuex';
import allDistricts from '../config/allDistricts';
import predefinedOptions from '../config/predefinedOptions';
import osloIcon from '../assets/Oslo_komm.svg'; // ../assets/oslo-logo.svg

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
    selectedSubpage: {
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
    ...mapState(['compareDistricts', 'districts']),
  },

  created() {
    const route = this.$route;
    if (route.params.district === undefined) {
      return;
    }

    this.selected = this.districts[0] === 'alle' ? [] : this.districts;
  },

  methods: {
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

    onClickHome() {
      this.selected = [];
      this.$store.dispatch('addDistrict', { district: 'alle', pushRoute: false });
      this.$router.push({ name: 'Home' });
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
    $route(to) {
      const routes = to.path.split('/');
      const params = to.params.district !== undefined ? to.params.district.split('-') : [];
      const district = allDistricts.find(district => district.uri === routes[2]);

      if (to.params.district === 'alle' && this.selected.length !== this.links.length) {
        this.selected = [];
      } else if (params.length > 1) {
        const paramDistrict = routes[2].split('-');
        this.selected = paramDistrict;
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
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors';
@import '../styles/variables';

.version-tag {
  align-self: center;
  padding: 0.25rem 0.5rem;
  border: 1px solid $color-purple;
  border-radius: 1px;
  font-size: 0.8rem;
  margin: 0 0.5rem;
  font-weight: 500;

  @media screen and (min-width: $break-lg) {
    padding: 0.25rem 0.75rem;
    transform: translateY(-1rem);
  }
}

.navbar {
  background-color: $color-yellow;
  display: flex;
  position: relative;
  flex: 5em 0 0;
  width: 100%;
  z-index: 4;
  padding-left: 0rem;

  @media screen and (min-width: $break-lg) {
    padding-left: 1rem;
    background-color: inherit;
    flex-direction: column;
    padding-bottom: 2em;
    position: fixed;
    width: $sidebarWidth;
    top: 0;
    height: 100vh;
    overflow-y: auto;
  }
}

.navigation {
  position: absolute;
  width: 100%;
  top: 5em;
  right: 0;
  z-index: 1;
  background: white;
  padding: 2em 0;
  display: none;
  border-top: 2px solid $color-blue;

  &--show {
    display: block;
  }

  @media screen and (min-width: $break-sm) {
    width: calc(100% - 5.5em);
    border-top: none;
  }

  @media screen and (min-width: $break-lg) {
    background: initial;
    top: 0;
    display: initial;
    position: relative;
    width: 100%;
    padding: 0;
  }

  &-list {
    padding: 0;
  }
}

.selectedSubpage {
  color: $color-purple;
  font-weight: 500;
  font-size: 1.25em;
  display: block;
  height: auto;
  text-align: left;
  padding-left: 1rem;
  flex: auto 1 0;
  cursor: pointer;

  @media screen and (min-width: $break-lg) {
    display: none;
  }
}

.oslo__logo {
  cursor: pointer;
  background: $color-bg;
  object-fit: contain;
  width: 5.5em;
  padding: 0.5em 1em;

  @media screen and (min-width: $break-lg) {
    align-self: center;
    background: none;
    margin-top: 1.5rem;
    margin-bottom: 0rem;
  }
}

.navigation-link {
  $p: &;

  align-items: center;
  background-color: inherit;
  cursor: pointer;
  display: flex;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 100%;
  border-radius: 3rem;
  margin-bottom: 1px;

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

  &--compare &__label {
    color: $color-purple;
  }

  &__label {
    align-items: center;
    color: rgba($color-purple, 0.85);
    display: flex;
    flex-grow: 1;
    height: 3em;
    letter-spacing: 0.1px;
    position: relative;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;

    &-compare {
      margin-bottom: 1rem;
      margin-top: 2rem;
      padding-left: 3.6rem;
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

  &:hover:not(&--active) label:not(.compare)::before {
    transition: all 0s;
    opacity: 0.15;
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

input[type='checkbox'] {
  display: none;

  & + label {
    cursor: pointer;
    display: inline-block;
    height: 40px;
    padding-left: 1rem;
    position: relative;
    vertical-align: middle;
    width: 50px;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;

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
      left: 24px;
      position: absolute;
      top: 14px;
      transform: scale(0);
      width: 10px;
    }

    &:not(.compare) {
      &::before,
      &::after {
        transition: all 0.3s ease-in-out;
      }
    }

    // unchecked border
    &::before {
      -moz-border-radius: 1px;
      -webkit-border-radius: 1px;
      border: 1px solid $color-purple;
      border-radius: 1px;
      content: '';
      height: 18px;
      left: 20px;
      opacity: 0;
      position: absolute;
      top: 10px;
      width: 18px;
    }

    &.compare::before {
      opacity: 0.35;
    }
  }

  &:checked:not(&-compare) + label {
    position: relative;
    opacity: 1;

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
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border: 1px solid $color-purple;
      border-radius: 5px;
      color: $color-purple;
      font-weight: bold;
      margin: 0.5rem;
      padding: 0.3rem 1rem 0.3rem 1rem;
      height: 42px;
      width: 50%;
      transition: all 0.3s ease-in-out;

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
        box-shadow: 0 0 0 1px #e0e0e0;
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
    font-weight: bold;
    margin: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    position: relative;
    width: 100%;
    height: 42px;

    @media screen and (min-width: $break-lg) {
      width: 205px;
      height: auto;
    }
  }

  &:before {
    border-bottom: 2px solid $color-purple;
    border-left: 2px solid $color-purple;
    content: '';
    height: 0.5rem;
    position: absolute;
    top: calc(50% - 0.35rem);
    transform: rotate(-45deg);
    width: 0.5rem;
    right: 1.5rem;
  }
}
</style>
