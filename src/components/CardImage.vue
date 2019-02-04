<template>
  <div class="main-container__item">
    <router-link
      class="oslo__card-image"
      :style="{ backgroundImage: `url(${dataBgImage})`, backgroundColor: dataBgColor}"
      :to="link"
    >
      <span
        class="oslo__category"
        :style="{ backgroundColor: dataTxtColor }"
      >
        {{dataKategori}}
      </span>
      <span class="oslo__tema" v-html="dataTema"></span>
      <span class="oslo__see-more-text">Se mer</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    kategori: {
      type: String,
      required: true,
    },
    tema: {
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
  },
  data() {
    return {
      dataKategori: this.kategori,
      dataTema: this.tema,
      dataBgImage: this.bgImage,
      dataBgColor: this.bgColor,
      dataTxtColor: this.txtColor,
      dataId: this.id,
    };
  },
};
</script>

<style scoped lang="scss">
@import './../styles/colors';

.oslo__card-image {
  background-blend-mode: multiply;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  height: 160px;
  width: 280px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }

  &:before {
    content: '';
    position: absolute;
    left: 100px;
    bottom: 25px;
    width: 130px;
    border: 0.5px solid white;
    box-shadow: 0 1.5px 3px rgba($color-grey-600, 0.95);
    transition: width 0.3s ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    left: 230px;
    bottom: 22.5px;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-left: 5.5px solid white;
    transition: left 0.3s ease-in-out;
  }

  &:hover:before {
    width: 150px;
    transition: width 0.3s ease-in-out;
  }

  &:hover:after {
    left: 250px;
    transition: left 0.3s ease-in-out;
  }
}

.oslo__category {
  align-self: flex-start;
  padding: 0.25rem 0.5rem;
  color: $color-purple;
  font-weight: bold;
  margin-bottom: 0.5em;
  align-items: flex-start;
  text-transform: uppercase;
}

.oslo__tema {
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
