<template>
  <router-link class="main-container__item" :to="link" :id="id" :style="{ backgroundColor: bgColor }">
    <img class="oslo__img" :src="bgImage" :alt="topic" aria-hidden="true" />
    <span class="oslo__category" :style="{ backgroundColor: txtColor }">{{ category }}</span>
    <span class="oslo__topic" v-html="topic"></span>
    <span class="oslo__see-more-text">Se mer</span>
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
    link: {
      type: String,
      required: true,
    },
    id: {
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
  border-radius: 2px;
  color: white;
  cursor: pointer;
  height: 8em;
  margin: 0.25em 0.5em;
  flex: 17.5em 1 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: transform 0.15s ease-in-out;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: $break-sm) {
    height: 9em;
    margin: 0.5em;
  }

  @media screen and (min-width: $break-md) {
    height: 10em;
  }

  &:hover {
    transform: scale(1.03);
  }

  &:before {
    content: '';
    position: absolute;
    left: 7em;
    bottom: 1.75em;
    right: 2em;
    border: 0.5px solid white;
    box-shadow: 0 1.5px 3px rgba($color-grey-600, 0.95);
    transition: right 0.3s ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    right: 2em;
    bottom: 1.75em;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-left: 5.5px solid white;
    transition: right 0.3s ease-in-out;
    transform: translateY(2.5px);
  }

  &:hover:before {
    right: 1em;
  }

  &:hover:after {
    right: 1em;
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
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.78);
  line-height: 1.15em;
}

.oslo__see-more-text {
  margin-top: auto;
  font-size: 1.15rem;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.78);
  position: relative;
}
</style>
