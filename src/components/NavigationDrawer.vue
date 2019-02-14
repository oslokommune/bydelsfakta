<template>
  <aside id="navbar">
    <img :src="osloIcon" alt="oslo-logo" class="oslo__logo" @click="onClickHome">
    <button
      class="selectedSubpage"
      @click="showNavigation = !showNavigation"
      @keydown.esc="showNavigation = false"
      v-text="selectedSubpage"
    ></button>
    <nav role="navigation" class="navigation" :class="{'navigation--show': showNavigation }">
      <div
        v-for="link in links"
        :key="link.key"
        class="navigation-link"
        :class="{
          'navigation-link--active': $route.params.bydel === link.uri && !compareBydeler,
          'navigation-link--compare': compareBydeler && selected.includes(link.key),
        }"
      >
        <input
          type="checkbox"
          v-model="selected"
          :value="link.key"
          :id="`checkbox-${link.uri}`"
          @change="onChangeCheckbox"
          :disabled="!compareBydeler && selected.length === 1 && selected[0] === link.key"
        >
        <label :for="`checkbox-${link.uri}`" :class="{ compare: compareBydeler }"></label>
        <router-link
          :id="`a-${link.uri}`"
          class="navigation-link__label"
          :to="onClickBydel(link.uri)"
        >{{ link.value }}</router-link>
      </div>
      <div
        class="navigation-link navigation-link__label-compare"
        id="sammenlign"
        :class="{ 'navigation-link--active': compareBydeler }"
      >
        <router-link
          id="sammenlign-href"
          :to="onClickSammenlign()"
          class="navigation-link__label"
        >Sammenlign bydeler</router-link>
      </div>
      <transition name="fade">
        <div class="navigation-drawer__buttons" v-if="compareBydeler">
          <div class="navigation-drawer__button-container">
            <button
              class="navigation-drawer__button"
              @click="selectAll"
              aria-label="select all checkboxes"
            >Velg alle</button>
            <button
              class="navigation-drawer__button"
              :disabled="selected.length === 0"
              @click="unselectAll"
              aria-label="unselect all checkboxes"
            >Fjern alle</button>
          </div>
          <div class="navigation-drawer__select-container">
            <label for="navigation-drawer-select" class="hidden-label">Velg byområde</label>
            <select
              id="navigation-drawer-select"
              class="navigation-drawer__select"
              v-model="selectedPredefinedOption"
            >
              <option
                v-for="(element, index) in options"
                :key="index"
                :value="element.option"
                :selected="element.selected"
                :disabled="element.disabled"
              >{{ element.label }}</option>
            </select>
          </div>
        </div>
      </transition>
    </nav>
  </aside>
</template>

<script>
import bydeler from '../config/bydeler';
import predefinedOptions from '../config/predefinedOptions';
import osloIcon from '../assets/oslo-logo.svg';

export default {
  name: 'NavigationDrawer',
  data() {
    return {
      links: bydeler,
      osloIcon: osloIcon,
      checkedAllCheckbox: false,
      showDropdown: false,
      showNavigation: false,
      selected: [],
      options: predefinedOptions,
      selectedPredefinedOption: [],
      compareBydeler: false,
    };
  },

  computed: {
    selectedSubpage: {
      get: function() {
        if (this.compareBydeler) {
          let count = this.selected.length ? this.selected.length : this.links.length;
          return 'Sammenlign bydeler (' + count + ')';
        } else if (!this.selected.length) {
          return '- Velg bydel -';
        } else {
          return this.links[this.selected - 1].value;
        }
      },
      set: function() {},
    },
  },

  created() {
    const route = this.$route;
    let key = false;
    if (route.params.bydel === undefined) {
      return;
    }

    const bydelParams = route.params.bydel.split('-');

    if (bydelParams.length === 1) {
      const bydelKey = bydeler.find(item => item.uri === bydelParams[0]);
      this.selected = bydelKey === undefined ? bydelParams : [bydelKey.key];
      if (bydelKey === undefined) key = true;
    } else if (bydelParams.length > 0) {
      this.compareBydeler = true;
      this.selected = bydelParams[0] === 'alle' ? [] : bydelParams;
    }

    const routes = route.path.split('/');

    if (routes.length > 3) {
      this.selectedSubpage = routes[3];
    }

    if (bydelParams[0] === 'alle') {
      this.selected = [];
      this.compareBydeler = true;
    } else if (key) {
      const bydel = bydeler.find(item => item.key === bydelParams[0]).uri;
      routes.length > 3
        ? this.$router.push({ name: 'Tema', params: { bydel: bydel, tema: routes[3] } })
        : this.$router.push({ name: 'Bydel', params: { bydel: bydel } });
    }
  },

  methods: {
    onChangeCheckbox() {
      // Reset selector
      this.selectedPredefinedOption = [];

      if (this.selected.length === 0) {
        this.checkedAllCheckbox = false;
        this.$route.params.tema === undefined
          ? this.$router.push({ name: 'Bydel', params: { bydel: 'alle' } })
          : this.$router.push({
              name: 'Tema',
              params: { bydel: 'alle', tema: this.$route.params.tema },
            });
      } else if (this.selected.length === bydeler.length) {
        this.checkedAllCheckbox = true;
        this.$route.params.tema === undefined
          ? this.$router.push({ name: 'Bydel', params: { bydel: 'alle' } })
          : this.$router.push({
              name: 'Tema',
              params: { bydel: 'alle', tema: this.$route.params.tema },
            });
      } else if (this.selected.length > 0) {
        this.compareBydeler = true;
        this.$route.params.tema === undefined
          ? this.$router.push({ name: 'Bydel', params: { bydel: this.selected.join('-') } })
          : this.$router.push({
              name: 'Tema',
              params: { bydel: this.selected.join('-'), tema: this.$route.params.tema },
            });
      }
    },

    onClickBydel(bydel) {
      return bydel === this.$route.params.bydel
        ? { name: 'Bydel', params: { bydel: bydel } }
        : this.$route.params.tema === undefined
        ? { name: 'Bydel', params: { bydel: bydel } }
        : { name: 'Tema', params: { bydel: bydel, tema: this.$route.params.tema } };
    },

    onClickHome() {
      this.selected = [];
      this.compareBydeler = false;
      this.$router.push({ name: 'Home' });
    },

    onClickSammenlign() {
      const routes = this.$route.path.split('/');
      const selectedBydeler = this.selected.join('-');
      const bydel = bydeler.find(item => item.uri === routes[2]);

      if (bydel !== undefined && selectedBydeler === bydel.key) {
        return this.$route.params.tema === undefined
          ? { name: 'Bydel', params: { bydel: 'alle' } }
          : { name: 'Tema', params: { bydel: 'alle', tema: this.$route.params.tema } };
      } else if (bydel === undefined && !this.compareBydeler) {
        return { name: 'Bydel', params: { bydel: 'alle' } };
      } else {
        return { name: 'Bydel', params: { bydel: this.$route.params.bydel } };
      }
    },

    selectAll() {
      this.selected = [];
      this.checkedAllCheckbox = true;
      this.selectedPredefinedOption = [];
      bydeler.forEach(bydel => this.selected.push(bydel.key));
      this.$route.params.tema === undefined
        ? this.$router.push({ name: 'Bydel', params: { bydel: 'alle' } })
        : this.$router.push({
            name: 'Tema',
            params: { bydel: 'alle', tema: this.$route.params.tema },
          });
    },

    unselectAll() {
      this.selected = [];
      this.selectedPredefinedOption = [];
      this.$route.params.tema === undefined
        ? this.$router.push({ name: 'Bydel', params: { bydel: 'alle' } })
        : this.$router.push({
            name: 'Tema',
            params: { bydel: 'alle', tema: this.$route.params.tema },
          });
    },
  },

  watch: {
    $route(to) {
      const routes = to.path.split('/');
      const params = to.params.bydel !== undefined ? to.params.bydel.split('-') : [];
      const bydel = bydeler.find(item => item.uri === routes[2]);

      this.showNavigation = false;

      if (to.name === 'Home') {
        this.selected = [];
      } else if (to.params.bydel === 'alle') {
        this.compareBydeler = true;
        this.selected = [];
      } else if (params.length > 1) {
        const paramBydel = routes[2].split('-');
        this.compareBydeler = true;
        this.selected = paramBydel;
      } else if (bydel !== undefined) {
        this.compareBydeler = false;
        this.selected = [bydel.key];
      }
    },

    selectedPredefinedOption() {
      if (this.selectedPredefinedOption.length !== 0) {
        this.selected = this.selectedPredefinedOption;
        this.$route.params.tema === undefined
          ? this.$router.push({ name: 'Bydel', params: { bydel: this.selected.join('-') } })
          : this.$router.push({
              name: 'Tema',
              params: { bydel: this.selected.join('-'), tema: this.$route.params.tema },
            });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors';
@import '../styles/variables';

#navbar {
  background: $color-blue;
  display: flex;
  position: relative;
  flex: 5em 0 0;
  width: 100%;

  @media screen and (min-width: $break-lg) {
    background-color: $color-purple;
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
  background: $color-purple;
  padding: 2em 0;
  display: none;
  border-top: 2px solid $color-blue;

  &--show {
    display: block;
  }

  @media screen and (min-width: $break-sm) {
    width: calc(100% - 10em);
    border-top: none;
  }

  @media screen and (min-width: $break-lg) {
    top: 0;
    display: initial;
    position: relative;
    width: 100%;
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

.hidden-label {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
}

.oslo__logo {
  cursor: pointer;
  background: $color-purple;
  object-fit: contain;
  width: 10em;

  @media screen and (min-width: $break-lg) {
    align-self: center;
    background: none;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
}

.navigation-link {
  $p: &;

  align-items: center;
  background-color: $color-purple;
  color: rgba(white, 0.9);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &--active {
    background-color: $color-blue;
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
    background-color: lighten($color-purple, 5%);
    transition: background-color 0.3s ease-in-out;
  }

  &__label {
    align-items: center;
    color: rgba(white, 0.85);
    display: flex;
    flex-grow: 1;
    height: 40px;
    letter-spacing: 0.3px;
    position: relative;

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

  &:not(&--active) &__label:hover {
    background-color: darken($color-purple, 5%);
    color: white;

    // Show the visual border on hover
    &::before {
      background-color: darken($color-purple, 5%);
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

    &:hover {
      background: darken($color-purple, 10%);

      &::before {
        background: rgba(white, 0.15);
        opacity: 0.8 !important;
      }
    }

    // checked inside border
    &::after {
      background-color: $color-blue;
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
      border: 1px solid white;
      border-radius: 1px;
      content: '';
      height: 18px;
      left: 20px;
      opacity: 0;
      position: absolute;
      top: 10px;
      // transition: all 0.3s ease-in-out;
      width: 18px;
    }

    &.compare::before {
      opacity: 0.35;
    }
  }

  &:checked + label {
    position: relative;
    opacity: 1;

    // checked inside border
    &::after {
      transform: scale(1);
      transition: transform 0.3s cubic-bezier(0.29, -0.01, 0.41, 1.9);
    }

    // checked border
    &::before {
      border: 1px solid $color-blue;
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
      border: 1px solid rgb(248, 198, 107);
      border-radius: 5px;
      color: rgb(248, 198, 107);
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
    border: 1px solid rgb(248, 198, 107);
    color: rgb(248, 198, 107);
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
    border-bottom: 2px solid rgb(248, 198, 107);
    border-left: 2px solid rgb(248, 198, 107);
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
