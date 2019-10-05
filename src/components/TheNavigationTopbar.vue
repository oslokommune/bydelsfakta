<template>
  <header class="oslo__navigation-topbar" @keydown.esc="showDropdown = false">
    <h1 v-if="selectedTopic === null" class="header">{{ getDistrict($route.params.district) }}</h1>
    <div class="navigation-topbar" :class="{ 'navigation-topbar--hidden': selectedTopic === null }">
      <button
        v-if="selectedTopic"
        id="select"
        class="navigation-topbar__select"
        @click="showDropdown = !showDropdown"
        @keydown.enter="showDropdown = !showDropdown"
        @keydown.escape="closeMenu"
        v-click-outside="closeMenu"
        ref="select"
        :aria-label="$t('navigationTopbar.selectTopic.aria')"
        :title="$t('navigationTopbar.selectTopic.aria')"
      >
        <label class="label" :class="{ 'label--active': selectedTopic !== null }">{{
          $t('navigationTopbar.selectTopic.label')
        }}</label>
        <div class="topic">
          <h1 class="header">{{ getHumanReadableTopic(selectedTopic) }}</h1>
          <ok-icon icon-ref="arrow-down" :options="{ rotation: showDropdown ? '180deg' : false }"></ok-icon>
        </div>
      </button>
      <transition name="fade">
        <div id="dropdown" class="navigation-topbar__dropdown" v-if="showDropdown">
          <div v-for="(kategori, index) in dropdown" :key="index" class="navigation-topbar__dropdown-column">
            <div
              class="navigation-topbar__dropdown-column--heading"
              :style="{ color: kategori.color, 'border-top-color': kategori.color }"
            >
              <span>{{ kategori.kategori }}</span>
            </div>
            <div class="navigation-topbar__dropdown-items">
              <router-link
                v-for="(link, topicIndex) in kategori.links"
                class="navigation-topbar__dropdown-item"
                :id="`dropdown-href-${topics[link].value}`"
                :class="{
                  'navigation-topbar__dropdown-item--active': checkActiveTopic(topics[link].value),
                  'navigation-topbar__dropdown-item--disabled': disabledTopics.includes(topics[link].value),
                }"
                :key="topicIndex"
                v-text="topics[link].text"
                :to="onClickTopic(topics[link].value)"
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
import OkIcon from './OkIcon';

export default {
  name: 'TheNavigationTopbar',
  data() {
    return {
      selectedTopic: null,
      dropdown: categories,
      allDistricts: allDistricts,
      showDropdown: false,
      topics: topics,
      disabledTopics: disabledTopics,
    };
  },

  components: { OkIcon },

  computed: {
    ...mapState(['compareDistricts', 'menuIsOpen', 'districts']),
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
        this.selectedTopic = null;
        return '';
      }
    },

    getDistrict(id) {
      if (this.compareDistricts || id === 'alle') {
        return this.$t('navigationTopbar.header.compareDistrict');
      } else if (this.$route.name === 'NotFound') {
        return this.$t('navigationTopbar.header.notFound');
      } else if (this.$route.name === 'Home') {
        return this.$t('navigationTopbar.header.home');
      } else {
        return id !== undefined
          ? this.allDistricts.find(district => district.uri === id).value
          : this.$t('navigationTopbar.header.chooseDistrict');
      }
    },

    checkActiveTopic(topic) {
      return this.$route.path.includes(topic);
    },

    onClickTopic(topic) {
      return this.disabledTopics.includes(topic)
        ? ''
        : { name: 'Topic', params: { district: this.$route.params.district, topic } };
    },
  },

  watch: {
    $route(to) {
      const routes = to.path.split('/');

      if (to.name !== 'Topic') {
        this.selectedTopic = null;
        this.showDropdown = false;
      } else {
        if (routes.length > 3) this.selectedTopic = routes[3];
      }
      this.closeMenu();
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
  display: none;
  flex-direction: column;
  font-size: $font-huge;
  font-weight: 500;
  margin-left: 0.5rem;
  padding: 0.5rem;
  position: relative;
  width: auto;

  @media screen and (min-width: $break-lg) {
    display: block;
  }
}

.oslo__navigation-topbar {
  background-color: $color-bg;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  padding: 1rem 0;
  position: relative;
  top: 0;
  width: calc(100% - 1rem);
  z-index: 3;

  @media screen and (min-width: $break-lg) {
    margin: 0;
    padding: 0.75rem 1rem 0.5rem;
    width: 100%;
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
  font-size: $font-medium;
  margin-bottom: 0.25rem;
}

.topic {
  align-items: center;
  display: flex;
  text-align: left;
  width: 100%;

  .header {
    display: block;
    margin: 0;
    padding: 0;
    width: auto;
  }

  & > .icon {
    margin-left: 0.5rem;
  }
}

.icon {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 2rem;
  transition: all 0.5s cubic-bezier(0.3, 0, 0.5, 1);
  width: 2rem;

  &.rotate {
    transform: rotateX(180deg);
  }

  &__arrow {
    background-image: url('/icons/arrow.svg');
  }
}

.navigation-topbar {
  max-width: 768px;
  position: relative;
  width: 100%;

  &--hidden {
    @media screen and (max-width: $break-lg) {
      display: none;
    }
  }

  &__select {
    align-items: flex-start;
    color: $color-purple;
    display: flex;
    flex-direction: column;
    font-size: $font-huge;
    font-weight: 500;
    padding: 0.5rem;
    position: relative;
    width: 100%;

    @media screen and (min-width: $break-md) {
      padding: 1rem;
    }

    &:hover {
      background-color: darken($color-bg, 5%);
      cursor: pointer;
    }
  }

  &__dropdown {
    background-color: white;
    border: 3px solid $color-border;
    display: flex;
    flex-flow: row wrap;
    max-height: calc(100vh - 17rem);
    max-width: 768px;
    overflow: auto;
    padding: 1rem 0.5rem;
    position: absolute;
    width: 100%;
    z-index: 1;

    &-column {
      display: flex;
      flex: 33.333%;
      flex-direction: column;
      min-width: 200px;
      padding: 0.5rem;

      &--heading {
        font-weight: 700;
        margin-bottom: 1rem;
        margin-top: 1rem;
        padding-top: 0.5rem;

        & > span {
          padding-left: 0.5rem;
        }

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
        background-color: white;
        opacity: 0.45;
      }
    }
  }
}
</style>
