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
          :id="topics[`${topicName}`].value"
          :key="topics[`${topicName}`].value"
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
import VCategory from '@/components/VCategory.vue';
import { topics } from '@/config/topics';

export default {
  name: 'NotFound',

  components: { VCategory },

  data: () => ({
    seeMoreTopics: ['husholdninger', 'boligpriser'],
    topics,
  }),

  head() {
    return {
      title: `${this.$t('notFound.title')} | Bydelsfakta`,
    };
  },
};
</script>

<style scoped lang="scss">
@use '@/styles/colors' as *;
@use '@/styles/variables' as *;
@use '@/styles/layout' as *;

.topics-grid {
  flex-basis: auto;
  padding: 0;
}

.notFound {
  &-container {
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    padding: 0 2rem;
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
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-top: 100%;
      background: $color-yellow;
    }

    &--label {
      position: absolute;
      top: 50%;
      color: $color-purple;
      font-size: 3em;
      transform: translateY(-0.7em);
    }
  }

  &__information {
    display: flex;
    flex: 350px 0 1;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 0 1rem;

    &--header {
      margin: 0;
      font-weight: 500;
      font-size: $font-large;
    }

    &--frontpage-link {
      width: 160px;
      padding: 0.3rem 1.5rem;
      font-weight: normal;
      font-size: 16px;
      background-color: rgb(255, 255, 255);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.33);
    }
  }
}
</style>
