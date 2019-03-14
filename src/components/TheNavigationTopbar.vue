<template>
  <header class="oslo__navigation-topbar" @keydown.esc="showDropdown = false">
    <h1 v-if="selectedSubpage === null" class="header">{{ getDistrict(this.$route.params.district) }}</h1>
    <div class="navigation-topbar" :class="{ 'navigation-topbar--hidden': selectedSubpage === null }">
      <button
        v-if="selectedSubpage"
        id="select"
        class="navigation-topbar__select"
        @click="showDropdown = !showDropdown"
        @keydown.enter="showDropdown = !showDropdown"
        @keydown.escape="closeMenu"
        v-click-outside="closeMenu"
        ref="select"
        :aria-label="$t('navigationTopbar.selectTopic.aria')"
      >
        <label class="label" :class="{ 'label--active': selectedSubpage !== null }">{{
          $t('navigationTopbar.selectTopic.label')
        }}</label>
        <div class="topic">
          <span>{{ getHumanReadableTopic(selectedSubpage) }}</span>
          <i class="material-icons">{{ showDropdown ? 'arrow_drop_up' : 'arrow_drop_down' }}</i>
        </div>
      </button>
      <transition name="fade">
        <div id="dropdown" class="navigation-topbar__dropdown" v-if="showDropdown">
          <div v-for="(kategori, index) in dropdown" :key="index" class="navigation-topbar__dropdown-column">
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
                :id="`dropdown-href-${topics[link].value}`"
                :class="{
                  'navigation-topbar__dropdown-item--active': checkActiveSubpage(topics[link].value),
                  'navigation-topbar__dropdown-item--disabled': disabledTopics.find(topic => topic === topics[link].value),
                }"
                :key="subpageIndex"
                v-text="topics[link].text"
                :to="onClickSubpage(topics[link].value)"
                >{{ topics[`${link}`].text }}</router-link
              >
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import allDistricts from '../config/allDistricts';
import { categories, topics, disabledTopics } from '../config/topics';

export default {
  name: 'TheNavigationTopbar',
  data() {
    return {
      selectedSubpage: null,
      dropdown: categories,
      allDistricts: allDistricts,
      showDropdown: false,
      topics: topics,
      disabledTopics: disabledTopics,
    };
  },

  computed: {
    ...mapState(['compareDistricts', 'menuIsOpen']),
  },

  created() {
    if (this.$route.name !== 'Home') {
      const routes = this.$route.path.split('/');
      if (routes.length > 3) this.selectedSubpage = routes[3];
    }
  },

  methods: {
    ...mapActions(['setMenuIsOpen']),

    closeMenu() {
      if (this.showDropdown) {
        this.showDropdown = false;
      }
    },

    getHumanReadableTopic(id) {
      if (this.topics[id]) {
        return this.topics[id].text;
      } else {
        this.selectedSubpage = null;
        return '';
      }
    },

    getDistrict(id) {
      if (this.compareDistricts || id === 'alle') {
        return this.$t('navigationTopbar.header.compareDistrict');
      } else if (this.$route.name === 'NotFound') {
        return this.$t('navigationTopbar.header.notFound');
      } else {
        return id !== undefined
          ? this.allDistricts.find(district => district.uri === id).value
          : this.$t('navigationTopbar.header.chooseDistrict');
      }
    },

    checkActiveSubpage(subpage) {
      return this.$route.path.includes(subpage);
    },

    onClickSubpage(subpage) {
      return this.disabledTopics.find(topic => topic === subpage)
        ? ''
        : { name: 'Topic', params: { district: this.$route.params.district, topic: subpage } };
    },
  },

  watch: {
    $route(to) {
      const routes = to.path.split('/');
      if (to.name === 'NotFound') {
        this.selectedSubpage = null;
        this.showDropdown = false;
      } else if (to.name === 'District') {
        this.selectedSubpage = null;
      } else if (to.name === 'Home') {
        this.selectedSubpage = null;
      } else {
        if (routes.length > 3) this.selectedSubpage = routes[3];
      }
    },

    showDropdown() {
      this.setMenuIsOpen(this.showDropdown);
    },
  },
};
</script>
<style scoped lang="scss">
@import '../styles/colors';
@import '../styles/variables';

.header {
  color: $color-purple;
  flex-direction: column;
  font-size: $font-huge;
  position: relative;
  width: 100%;
  font-weight: 500;
  padding: 0.5rem;
  margin-left: 0.5rem;
  display: none;

  @media screen and (min-width: $break-lg) {
    display: block;
  }
}

.oslo__navigation-topbar {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  width: calc(100% - 1rem);
  position: relative;
  top: 0;
  background-color: $color-bg;
  z-index: 3;
  padding: 1rem 0;

  @media screen and (min-width: $break-lg) {
    padding: 2.5rem 1rem 1rem;
    width: 100%;
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
  font-size: $font-body;
  margin-bottom: 0.25rem;
}

.topic {
  display: flex;
  align-items: center;
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
    color: $color-purple;
    display: flex;
    flex-direction: column;
    font-size: $font-huge;
    position: relative;
    width: 100%;
    font-weight: 500;
    padding: 0.5rem;

    @media screen and (min-width: $break-md) {
      padding: 1rem;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: darken($color-bg, 5%);
    }
  }

  &__dropdown {
    background-color: white;
    border: 1px solid $color-grey-100;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.65);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 100%;
    max-width: 768px;
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    z-index: 1;
    padding: 1rem 0.5rem;

    max-height: calc(100vh - 17rem);
    overflow: auto;

    &-column {
      display: flex;
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
      margin-bottom: 0.5rem;
      padding: 1rem 0.75rem;

      @media screen and (min-width: $break-lg) {
        margin-bottom: 0.1rem;
        padding: 0.5rem;
      }

      &:hover:not(&--active):not(&--disabled) {
        background-color: $color-grey-100;
        color: black;
      }

      &--active {
        background-color: $color-blue;
      }

      &--disabled {
        opacity: 0.45;
        background-color: white;
      }
    }
  }
}
</style>
