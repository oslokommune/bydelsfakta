<template>
  <header class="oslo__navigation-topbar" @keydown.esc="showDropdown = false">
    <h1 v-if="selectedTopic === null" id="select" class="header">{{ getDistrict($route.params.district) }}</h1>
    <div class="navigation-topbar" :class="{ 'navigation-topbar--hidden': selectedTopic === null }">
      <div
        v-if="selectedTopic"
        id="select"
        ref="select"
        v-click-outside="closeMenu"
        tabindex="0"
        role="button"
        class="navigation-topbar__select"
        :aria-label="$t('navigationTopbar.selectTopic.aria')"
        :title="$t('navigationTopbar.selectTopic.aria')"
        @click="showDropdown = !showDropdown"
        @keydown.enter="showDropdown = !showDropdown"
        @keydown.escape="closeMenu"
      >
        <div class="label" :class="{ 'label--active': selectedTopic !== null }">
          {{ $t('navigationTopbar.selectTopic.label') }}
        </div>
        <div class="topic">
          <h1 class="header">{{ getHumanReadableTopic(selectedTopic) }}</h1>
          <ok-icon icon-ref="chevron-down" :options="{ rotation: showDropdown ? '180deg' : false }"></ok-icon>
        </div>
      </div>
      <transition name="fade">
        <div v-if="showDropdown" id="dropdown" class="navigation-topbar__dropdown">
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
                :id="`dropdown-href-${topics[link].value}`"
                :key="topicIndex"
                class="navigation-topbar__dropdown-item"
                :class="{
                  'navigation-topbar__dropdown-item--active': checkActiveTopic(topics[link].value),
                  'navigation-topbar__dropdown-item--disabled': disabledTopics.includes(topics[link].value),
                }"
                :to="onClickTopic(topics[link].value)"
              >
                {{ topics[`${link}`].text }}
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import allDistricts from '@/config/allDistricts';
import { categories, topics, disabledTopics } from '@/config/topics';
import OkIcon from './OkIcon.vue';

export default {
  name: 'TheNavigationTopbar',

  components: { OkIcon },
  data: () => ({
    selectedTopic: null,
    dropdown: categories,
    allDistricts,
    showDropdown: false,
    topics,
    disabledTopics,
  }),

  computed: {
    ...mapState(['compareDistricts', 'menuIsOpen', 'districts']),
  },

  watch: {
    $route(to) {
      const routes = to.path.split('/');

      if (to.name !== 'Topic') {
        this.selectedTopic = null;
        this.showDropdown = false;
      } else if (routes.length > 3) this.selectedTopic = routes[3];
      this.closeMenu();
    },

    showDropdown() {
      this.setMenuIsOpen(this.showDropdown);
    },
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
      }
      this.selectedTopic = null;
      return '';
    },

    getDistrict(id) {
      if (this.compareDistricts || id === 'alle') {
        return this.$t('navigationTopbar.header.compareDistrict');
      }
      if (this.$route.name === 'NotFound') {
        return this.$t('navigationTopbar.header.notFound');
      }
      if (this.$route.name === 'Home') {
        return this.$t('navigationTopbar.header.home');
      }
      return id !== undefined
        ? this.allDistricts.find((district) => district.uri === id).value
        : this.$t('navigationTopbar.header.chooseDistrict');
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
};
</script>
<style scoped lang="scss">
@import '@/styles/colors';
@import '@/styles/variables';

.header {
  position: relative;
  display: none;
  flex-direction: column;
  width: auto;
  margin-left: 0.5rem;
  padding: 0.5rem;
  color: $color-purple;
  font-weight: 500;
  font-size: $font-huge;

  @media screen and (min-width: $break-lg) {
    display: block;
  }
}

.oslo__navigation-topbar {
  position: relative;
  top: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: calc(100% - 1rem);
  margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  padding: 1rem 0;
  background-color: $color-bg;

  @media screen and (min-width: $break-lg) {
    width: 100%;
    margin: 0;
    padding: 0.75rem 1rem 0.5rem;
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
  margin-bottom: 2rem;
  color: $color-purple;
  font-weight: bold;

  &-text {
    margin-top: 0.3rem;
    margin-left: 1rem;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
}

.label {
  margin-bottom: 0.25rem;
  font-size: $font-medium;
}

.topic {
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;

  .header {
    display: block;
    width: auto;
    margin: 0;
    padding: 0;
  }

  & > .icon {
    margin-left: 0.5rem;
  }
}

.navigation-topbar {
  position: relative;
  width: 100%;
  max-width: 1024px;

  &--hidden {
    @media screen and (max-width: $break-lg) {
      display: none;
    }
  }

  &__select {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0.5rem;
    color: $color-purple;
    font-weight: 500;
    font-size: $font-huge;

    @media screen and (min-width: $break-md) {
      padding: 1rem;
    }

    &:hover {
      background-color: darken($color-bg, 5%);
      cursor: pointer;
    }
  }

  &__dropdown {
    position: absolute;
    z-index: 1;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    max-width: 1024px;
    max-height: calc(100vh - 17rem);
    padding: 1rem 0.5rem;
    overflow: auto;
    background-color: white;
    border: 3px solid $color-border;

    &-column {
      display: flex;
      flex: 25%;
      flex-direction: column;
      min-width: 200px;
      padding: 0.5rem;

      &--heading {
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-top: 0.5rem;
        font-weight: 700;

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
      margin-bottom: 0.5rem;
      padding: 1rem 0.75rem;
      color: $color-purple;
      background-color: $color-grey-50;
      border-radius: 4px;

      @media screen and (min-width: $break-lg) {
        margin-bottom: 0.1rem;
        padding: 0.5rem;
      }

      &:hover:not(&--active):not(&--disabled) {
        color: black;
        background-color: $color-grey-100;
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
