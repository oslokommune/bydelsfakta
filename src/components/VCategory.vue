<template>
  <router-link class="main-container__item" :class="{ disabled }" :to="getLink()" :id="id">
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
    disabled: {
      type: Boolean,
      required: false,
    },
  },

  methods: {
    getLink() {
      return this.disabled ? '' : { name: 'Topic', params: { district: this.district, topic: this.id } };
    },
  },
};
</script>

<style scoped lang="scss">
@import './../styles/colors';
@import './../styles/variables';

.oslo__category {
  align-self: flex-start;
  margin-bottom: 0.5em;
  padding: 0.1rem 0.25rem;
  color: $color-purple;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (min-width: $break-md) {
    padding: 0.25rem 0.5rem;
  }
}

.main-container__item {
  position: relative;
  display: flex;
  flex: 17.5em 1 0;
  flex-direction: column;
  min-height: 6em;
  margin: 0;
  padding: 1em;
  overflow: hidden;
  color: white;
  background-blend-mode: multiply;
  transform: scale(1);
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &.disabled {
    text-decoration: line-through;
    opacity: 0.95;
    filter: grayscale(1);

    .oslo__category {
      color: white;
      background: #555555 !important;
    }
  }

  @media screen and (min-width: $break-sm) {
    height: 9em;
  }

  @media screen and (min-width: $break-md) {
    height: 10em;
  }

  @media screen and (min-width: $break-lg) {
    height: 11em;
  }

  // Fallback to flexbox
  @media all and (-ms-high-contrast: none) {
    margin: 0.5em;
  }

  &:hover:not(.disabled) {
    img {
      transform: scale(1.05);
    }
  }
}

.oslo__img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease-in-out;
}

.oslo__topic {
  font-weight: 500;
  font-size: $font-large;
  line-height: 1.15em;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.78);
}
</style>
