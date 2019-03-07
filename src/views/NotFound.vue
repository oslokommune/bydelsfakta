<template>
  <div class="notFound-container">
    <div class="notFound-container--row">
      <div class="notFound__square--outer">
        <div class="notFound__square--inner">
          <label class="notFound__square--label">404</label>
        </div>
      </div>
      <div class="notFound__information">
        <h2 class="notFound__information--header">{{ $t('notFound.siteNotFound.header') }}</h2>
        <p>{{ $t('notFound.siteNotFound.paragraph') }}</p>
        <router-link :to="{ name: 'Home' }" class="notFound__information--frontpage-link">
          {{ $t('notFound.siteNotFound.button') }}
        </router-link>
      </div>
    </div>
    <div class="notFound-container--column">
      <h2 class="notFound__information--header">{{ $t('notFound.feedback.header') }}</h2>
      <p>
        {{ $t('notFound.feedback.paragraph') }}
        <a href="mailto:bydelsfakta@byr.oslo.kommune.no?Subject=404%20Bydelsfakta" target="_top"
          >bydelsfakta@byr.oslo.kommune.no</a
        >
      </p>
    </div>
    <div class="notFound-container--column">
      <h2 class="notFound__information--header">{{ $t('notFound.seeMore.header') }}</h2>
      <p>
        {{ $t('notFound.seeMore.subheader') }}
      </p>
      <div class="notFound__topics-grid">
        <v-category
          v-for="topicName in seeMoreTopics"
          :key="topics[`${topicName}`].value"
          :id="topics[`${topicName}`].value"
          :category="topics[`${topicName}`].options.kategori"
          :topic="topics[`${topicName}`].options.tema"
          :bg-image="topics[`${topicName}`].options.bgImage"
          :bg-color="topics[`${topicName}`].options.bgColor"
          :txt-color="topics[`${topicName}`].options.txtColor"
          district="alle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VCategory from '../components/VCategory.vue';
import { topics } from '../config/topics';

export default {
  name: 'NotFound',
  components: { VCategory },
  data() {
    return {
      seeMoreTopics: ['folkemengde', 'alder', 'innvandrerbefolkningen'],
      topics: topics,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors';
@import '../styles/variables';
@import '../styles/layout';

.notFound {
  &-container {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    max-width: 1100px;
    color: $color-purple;

    &--row {
      display: flex;
      flex-direction: row;
      padding-bottom: 5vh;
    }

    &--column {
      display: flex;
      flex-direction: column;
      padding-bottom: 5vh;
    }
  }

  &__square {
    &--outer {
      flex: 150px 0 1;
    }

    &--inner {
      background: $color-yellow;
      width: 100%;
      padding-top: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    &--label {
      position: absolute;
      top: 50%;
      transform: translateY(-0.7em);
      font-size: 3em;
      color: $color-purple;
    }
  }

  &__information {
    width: 100%;
    margin: 0 0 0 1rem;
    display: flex;
    flex: 350px 0 1;
    justify-content: space-between;
    flex-direction: column;

    &--header {
      font-size: $font-large;
      font-weight: 500;
      margin: 0;
    }

    &--frontpage-link {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.33);
      background-color: rgb(255, 255, 255);
      padding: 0.3rem 1.5rem;
      font-weight: normal;
      font-size: 16px;
      width: 160px;
    }
  }

  &__topics-grid {
    @extend .topics-grid;
    padding: 0;
  }
}
</style>
