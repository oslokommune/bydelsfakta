<template>
  <header class="oslo__navigation-topbar">
    <div @click="backButton" role="button" class="oslo__navigation-topbar-button">
      <i class="material-icons oslo__topbar">arrow_back</i>
      <h4
        class="text-uppercase oslo__topbar oslo__topbar-text"
      >{{ getBydel(this.$route.params.bydel) }}</h4>
    </div>
    <v-select
      v-model="selectedSubpage"
      :items="items"
      label="VELG TEMA"
      class="v-select__selection--uppercase"
    ></v-select>
    <div>
      <select
        v-model="selectedSubpage"
      >
        <option
          v-for="(element, index) in items"
          :key="index"
          :value="element.value"
          :selected="element.selected"
          :disabled="element.disabled"
        >{{element.text}}</option>
      </select>
    </div>
    <div class="navigation-topbar">
      <div
        id="select"
        class="navigation-topbar__select"
        @click="showDropdown = !showDropdown"
      >
        <span>{{selectedSubpage}}</span>
      </div>
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
              v-for="(link, index) in kategori.links"
              :key="index"
              class="navigation-topbar__dropdown-item"
              :class="{ 'navigation-topbar__dropdown-item--active': checkActiveSubpage(link.value) }"
            >
              {{link.text}}
            </a>
          </div>
        </div>
      </div>
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
      selectedSubpage: '',
      dropdown: dropdownSubpages,
      bydeler: bydeler,
      showDropdown: false,
    };
  },

  mounted() {
    const routes = this.$route.path.split('/');
    if (routes.length > 3) {
      this.selectedSubpage = routes[3];
    }
  },

  methods: {
    getBydel(id) {
      return this.$route.path.includes('sammenlign')
        ? 'Sammenligne bydeler'
        : id !== undefined
          ? this.bydeler.find(bydel => bydel.uri === id).value
          : 'Velg bydel';
    },

    backButton() {
      const route = this.$route;
      if (this.selectedSubpage === null) {
        this.selected = [];
        this.$router.push({ path: '/' });
      } else if (route.path.includes('bydel')) {
        this.$router.push({ path: `/bydel/${route.params.bydel}` });
      } else if (route.path.includes('sammenlign')) {
        this.$router.push({ path: `/sammenlign/${route.params.bydel}` });
      }
      this.selectedSubpage = null;
    },

    checkActiveSubpage(subpage) {
      return this.$route.path.includes(subpage);
    },
  },

  watch: {
    $route(to) {
      const routes = this.$route.path.split('/');
      if (to.path.includes('bydel')) {
        this.selectedSubpage = null;
      }
      if (routes.length > 3) {
        this.selectedSubpage = routes[3];
      }
    },

    selectedSubpage(subpage) {
      if (this.$route.path.includes('sammenlign') && subpage !== null) {
        this.$router.push({
          path: `/sammenlign/${this.$route.params.bydel}/${subpage}`,
        });
      } else if (this.$route.path.includes('bydel') && subpage !== null) {
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
  }
}

.v-select__selection--uppercase {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
}

.v-input--selection-controls {
  margin-top: 0.6rem;
  padding-top: 0;
}

.navigation-topbar {

  &__select {
    position: relative;
  }

  &__dropdown {
    position: absolute;
    max-width: 660px;
    height: 350px;
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    z-index: 1;
    background-color: white;

    &-column {
      display: flex;
      flex-direction: column;
      padding: 1rem;

      &--heading {
        margin-bottom: 1rem;
        border-top: 3px solid rgb(182, 63, 50);
        width: 190px;
        font-weight: bold;
      }
    }

    &-items {
      display: flex;
      flex-direction: column;
    }

    &-item {
      background-color: rgb(245, 245, 245);
      height: 34px;
      padding: 0.5rem;
      margin-bottom: 0.1rem;
      color: rgb(41, 40, 88);

      &--active {
        background-color: rgb(110, 233, 255);
      }
    }
  }
}
</style>
