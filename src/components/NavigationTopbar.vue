<template>
  <header class="oslo__navigation-topbar" @keydown.esc="showDropdown = false">
    <router-link :to="backButton()" id="backButton" class="oslo__navigation-topbar-button">
      <i class="material-icons oslo__topbar">arrow_back</i>
      <h4 class="oslo__topbar oslo__topbar-text">{{ getBydel(this.$route.params.bydel) }}</h4>
    </router-link>
    <div
      class="navigation-topbar"
      :class="{'navigation-topbar--hidden' : selectedSubpage === null }"
    >
      <button
        id="select"
        class="navigation-topbar__select"
        @click="showDropdown = !showDropdown"
        @keydown.enter="showDropdown = !showDropdown"
        @keydown.escape="closeMenu"
        v-click-outside="closeMenu"
        ref="select"
      >
        <label class="label" :class="{ 'label--active': selectedSubpage !== null }">Velg tema</label>
        <span>{{ selectedSubpage }}</span>
        <i class="material-icons">{{ showDropdown ? 'arrow_drop_up' : 'arrow_drop_down' }}</i>
      </button>
      <transition name="fade">
        <div id="dropdown" class="navigation-topbar__dropdown" v-if="showDropdown">
          <div
            v-for="(kategori, index) in dropdown"
            :key="index"
            class="navigation-topbar__dropdown-column"
          >
            <div
              class="navigation-topbar__dropdown-column--heading"
              :style="{ color: kategori.color, 'border-top': `3px solid ${kategori.color}` }"
            >
              <span>{{ kategori.kategori }}</span>
            </div>
            <div class="navigation-topbar__dropdown-items">
              <router-link
                v-for="(link, subpageIndex) in kategori.links"
                class="navigation-topbar__dropdown-item"
                :id="`dropdown-href-${link.value}`"
                :class="{ 'navigation-topbar__dropdown-item--active': checkActiveSubpage(link.value) }"
                :key="subpageIndex"
                v-text="link.text"
                :to="onClickSubpage(link.value)"
              >{{ link.text }}</router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
<script>
import subpages from '../config/subpages';
import bydeler from '../config/bydeler';
import dropdownSubpages from '../config/dropdownSubpages';

export default {
  name: 'NavigationTopbar',
  data() {
    return {
      items: subpages,
      selectedSubpage: null,
      dropdown: dropdownSubpages,
      bydeler: bydeler,
      showDropdown: false,
      sammenlign: false,
    };
  },

  created() {
    if (this.$route.name !== 'Home') {
      const routes = this.$route.path.split('/');
      const paramBydeler = this.$route.params.bydel.split('-');
      if (paramBydeler.length > 1 || paramBydeler[0] === 'alle') this.sammenlign = true;
      if (routes.length > 3) this.selectedSubpage = routes[3];
    }
  },

  methods: {
    closeMenu() {
      if (this.showDropdown) {
        this.showDropdown = false;
      }
    },

    getBydel(id) {
      if (this.sammenlign || id === 'alle') {
        return 'Sammenligne bydeler';
      } else {
        this.sammenlign = false;
        return id !== undefined ? this.bydeler.find(bydel => bydel.uri === id).value : 'Velg bydel';
      }
    },

    backButton() {
      const route = this.$route;
      if (route.name === 'Home') return '/';
      return this.selectedSubpage === null
        ? { name: 'Home' }
        : { name: 'Bydel', params: { bydel: route.params.bydel } };
    },

    checkActiveSubpage(subpage) {
      return this.$route.path.includes(subpage);
    },

    onClickSubpage(subpage) {
      return { name: 'Tema', params: { bydel: this.$route.params.bydel, tema: subpage } };
    },
  },

  watch: {
    $route(to) {
      const routes = to.path.split('/');
      if (to.name !== 'Home') {
        const paramBydeler = to.params.bydel.split('-');
        if (paramBydeler.length === 1) {
          const bydel = bydeler.find(item => item.uri === paramBydeler[0]);
          this.sammenlign = bydel === undefined;
        }
        if (paramBydeler.length > 1 || paramBydeler[0] === 'alle') this.sammenlign = true;
        if (routes.length > 3) this.selectedSubpage = routes[3];
      }
      if (to.name === 'Bydel') {
        this.selectedSubpage = null;
      } else if (to.name === 'Home') {
        this.sammenlign = false;
        this.selectedSubpage = null;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '../styles/colors';
@import '../styles/variables';

.oslo__navigation-topbar {
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem 0rem 1rem;
  width: calc(100% - 2rem);
  position: relative;
  z-index: 2;
  padding: 1rem 0;

  @media screen and (min-width: $break-lg) {
    padding: 2rem;
    width: 100%;
    background-color: white;
    box-shadow: 0 1px 2px $color-grey-300;
    margin: 0;
  }

  &-button {
    display: none;
    flex-direction: row;

    @media screen and (min-width: $break-lg) {
      display: flex;
    }
  }
}

.oslo__topbar {
  color: $color-purple;
  font-weight: bold;
  margin-bottom: 2rem;

  &-text {
    letter-spacing: 0.8px;
    margin-left: 1rem;
    margin-top: 0.3rem;
    text-transform: uppercase;
  }
}

.label {
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &--active {
    font-size: 16px;
    left: 0;
    position: absolute;
    right: auto;
    transform: translateY(-18px) translateX(-12px) scale(0.75);
    transition: all 0.3s ease-in-out;
  }
}

.navigation-topbar {
  width: 100%;
  max-width: 768px;
  position: relative;

  &--hidden {
    @media screen and (max-width: $break-lg) {
      display: none;
    }
  }

  &__select {
    color: rgb(141, 141, 160);
    display: flex;
    font-size: 24px;
    font-weight: bold;
    justify-content: space-between;
    letter-spacing: 0.7px;
    padding: 0;
    position: relative;
    text-transform: uppercase;
    width: 100%;

    &:before {
      border: 0.5px solid black;
      bottom: -1px;
      content: '';
      left: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      width: 100%;
    }

    &:focus {
      outline: none;
    }

    &:focus:after {
      transform: scaleX(1);
    }

    &:after {
      border: 1px solid $color-purple;
      bottom: -1px;
      content: '';
      position: absolute;
      transform: scaleX(0);
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      width: 100%;
    }
  }

  &__dropdown {
    background-color: white;
    border: 1px solid $color-grey-100;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.65);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    z-index: 1;
    padding: 0.5rem;

    &-column {
      display: flex 0 0;
      flex-direction: column;
      flex: 33.333%;
      min-width: 200px;
      padding: 0.5rem;

      &--heading {
        font-weight: bold;
        margin-bottom: 1rem;
        margin-top: 1rem;

        @media screen and (min-width: $break-lg) {
          margin-top: 0;
        }
      }
    }

    &-items {
      display: flex;
      flex-direction: column;
    }

    &-item {
      background-color: $color-grey-50;
      border-radius: 4px;
      color: $color-purple;
      // height: 34px;
      margin-bottom: 0.5rem;
      padding: 1rem 0.75rem;

      @media screen and (min-width: $break-lg) {
        margin-bottom: 0.1rem;
        padding: 0.5rem;
      }

      &:hover:not(&--active) {
        background-color: $color-grey-100;
        color: black;
      }

      &--active {
        background-color: $color-blue;
      }
    }
  }
}
</style>
