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
      <div class="topics-grid">
        <v-category
          v-for="topicName in seeMoreTopics"
          :key="topics[`${topicName}`].value"
          :id="topics[`${topicName}`].value"
          :category="topics[`${topicName}`].options.kategori"
          :topic="topics[`${topicName}`].options.tema"
          :bg-image="topics[`${topicName}`].options.bgImage"
          :txt-color="topics[`${topicName}`].options.txtColor"
          district="alle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VCategory from '../components/VCategory';
import { topics } from '../config/topics';

export default {
  name: 'NotFound',
  components: { VCategory },
  data() {
    return {
      seeMoreTopics: ['husholdninger', 'boligpriser'],
      topics: topics,
    };
  },
  metaInfo() {
    return {
      title: 'Page not found | Bydelsfakta',
    };
  },
};
</script>

<style scoped lang="scss">
@import '../styles/colors';
@import '../styles/variables';
@import '../styles/layout';

.topics-grid {
  flex-basis: auto;
  padding: 0;
}

.notFound {
  &-container {
    color: $color-purple;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    padding: 0 2rem;

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
      align-items: center;
      background: $color-yellow;
      display: flex;
      justify-content: center;
      padding-top: 100%;
      position: relative;
      width: 100%;
    }

    &--label {
      color: $color-purple;
      font-size: 3em;
      position: absolute;
      top: 50%;
      transform: translateY(-0.7em);
    }
  }

  &__information {
    display: flex;
    flex: 350px 0 1;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 0 1rem;
    width: 100%;

    &--header {
      font-size: $font-large;
      font-weight: 500;
      margin: 0;
    }

    &--frontpage-link {
      background-color: rgb(255, 255, 255);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.33);
      font-size: 16px;
      font-weight: normal;
      padding: 0.3rem 1.5rem;
      width: 160px;
    }
  }

  &__topics-grid {
    @extend .topics-grid;

    padding: 0;
  }
}
</style>
