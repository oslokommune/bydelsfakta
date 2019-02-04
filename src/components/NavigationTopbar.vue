<template>
  <header class="oslo__navigation-topbar">
    <div @click="backButton" role="button" class="oslo__navigation-topbar-button">
      <i class="material-icons oslo__topbar">arrow_back</i>
      <h4
        class="oslo__topbar oslo__topbar-text"
      >{{ getBydel(this.$route.params.bydel) }}</h4>
    </div>
    <div class="navigation-topbar">
      <div
        id="select"
        class="navigation-topbar__select"
        @click="showDropdown = !showDropdown"
        tabindex="0"
        @keydown.escape="closeMenu"
        v-click-outside="closeMenu"
      >
        <label class="label" :class="{ 'label--active': selectedSubpage !== null }">VELG TEMA</label>
        <span>{{selectedSubpage}}</span>
        <i class="material-icons">{{ showDropdown ? 'arrow_drop_up' : 'arrow_drop_down'}}</i>
      </div>
      <transition name="fade">
        <div
          id="dropdown"
          class="navigation-topbar__dropdown"
          v-if="showDropdown"
        >
          <div
            v-for="(kategori, index) in dropdown"
            :key="index"
            class="navigation-topbar__dropdown-column"
          >
            <div
              class="navigation-topbar__dropdown-column--heading"
              :style="{ color: kategori.color, 'border-top': `3px solid ${kategori.color}` }"
            >
              <span>{{kategori.kategori}}</span>
            </div>
            <div class="navigation-topbar__dropdown-items">
              <a
                v-for="(link, subpageIndex) in kategori.links"
                :key="subpageIndex"
                class="navigation-topbar__dropdown-item"
                :class="{ 'navigation-topbar__dropdown-item--active': checkActiveSubpage(link.value) }"
                @click="onClickSubpage(link.value)"
              >
                {{link.text}}
              </a>
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
    const routes = this.$route.path.split('/');
    if (this.$route.name !== 'Home') {
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
      if (this.selectedSubpage === null) {
        this.selected = [];
        this.$router.push({ name: 'Home' });
      } else if (route.path.includes('bydel')) {
        this.$router.push({ path: `/bydel/${route.params.bydel}` });
      }
      this.selectedSubpage = null;
    },

    checkActiveSubpage(subpage) {
      return this.$route.path.includes(subpage);
    },

    onClickSubpage(subpage) {
      this.selectedSubpage = subpage;
      this.showDropdown = false;
    },
  },

  watch: {
    $route(to) {
      const routes = to.path.split('/');
      if (to.name !== 'Home') {
        const paramBydeler = to.params.bydel.split('-');
        if (paramBydeler.length > 1 || paramBydeler[0] === 'alle') this.sammenlign = true;
        if (routes.length > 3) this.selectedSubpage = routes[3];
      }
    },

    selectedSubpage(subpage) {
      const paramBydeler = this.$route.params.bydel.split('-');
      if (paramBydeler > 1) this.sammenlign = true;

      if (this.$route.path.includes('bydel') && subpage !== null) {
        this.$router.push({
          path: `/bydel/${this.$route.params.bydel}/${subpage}`,
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '../styles/colors';

.oslo__navigation-topbar {
  background-color: white;
  border-bottom: 1px solid $color-grey-300;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;

  &-button {
    display: flex;
    flex-direction: row;
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
  &__select {
    color: rgb(141, 141, 160);
    display: flex;
    font-size: 24px;
    font-weight: bold;
    justify-content: space-between;
    letter-spacing: 0.7px;
    position: relative;
    text-transform: uppercase;

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
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.75);
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    z-index: 1;

    &-column {
      display: flex;
      flex-direction: column;
      padding: 1rem;

      &--heading {
        font-weight: bold;
        margin-bottom: 1rem;
        width: 190px;
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
      height: 34px;
      margin-bottom: 0.1rem;
      padding: 0.5rem;

      &--active {
        background-color: $color-blue;
      }
    }
  }
}
</style>
