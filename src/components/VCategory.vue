<template>
  <router-link class="main-container__item" :to="{ name: 'Topic', params: { district, topic: id} }" :id="id" :style="{ backgroundColor: bgColor }">
    <picture>
      <source :srcset="bgImage + '.webp'" :alt="topic" type="image/webp" />
      <source :srcset="bgImage + '.png'" :alt="topic" type="image/png" />
      <img :src="bgImage + '.png'" :alt="topic" aria-hidden="true" class="oslo__img" />
    </picture>
    <span class="oslo__category" :style="{ backgroundColor: txtColor }">{{ category }}</span>
    <span class="oslo__topic" v-html="topic"></span>
  </router-link>
</template>

<script>
export default {
  name: 'VCategory',
  props: {
    category: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    bgImage: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    txtColor: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import './../styles/colors';
@import './../styles/variables';

.main-container__item {
  background-blend-mode: multiply;
  color: white;
  cursor: pointer;
  height: 6em;
  margin: 0;
  flex: 17.5em 1 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: transform 0.15s ease-in-out;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: $break-sm) {
    height: 8em;
  }

  @media screen and (min-width: $break-md) {
    height: 9em;
  }

  // Fallback to flexbox
  @media all and (-ms-high-contrast: none) {
    margin: 0.5em;
  }

  &:hover {
    transform: scale(1.03);
  }
}

.oslo__category {
  align-self: flex-start;
  padding: 0.1rem 0.25rem;
  color: $color-purple;
  font-weight: bold;
  margin-bottom: 0.5em;
  text-transform: uppercase;

  @media screen and (min-width: $break-md) {
    padding: 0.25rem 0.5rem;
  }
}

.oslo__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  mix-blend-mode: multiply;
}

.oslo__topic {
  font-size: $font-large;
  font-weight: bold;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.78);
  line-height: 1.15em;
}
</style>
