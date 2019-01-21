<template>
  <div class="main-container__item">
    <div
      class="oslo__card-image"
      :style="{ backgroundImage: `url(${dataBgImage})`, backgroundColor: dataBgColor}"
      @click="clickBydel(id)"
    >
      <v-layout column class="oslo__card-image__content">
        <span
          class="text-uppercase oslo__category"
          :style="{ backgroundColor: dataTxtColor }"
        >{{dataKategori}}</span>
        <span class="oslo__tema" v-html="dataTema"></span>
        <span class="oslo__see-more-text">Se mer ----------></span>
      </v-layout>
    </div>
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
    clickBydel: {
      type: Function,
      required: true,
    },
    id: {
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
  color: white;
  cursor: pointer;
  height: 160px;
  width: 280px;
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.oslo__category {
  align-self: flex-start;
  padding: 0.25rem 0.5rem;
  color: $color-purple;
  font-weight: bold;
  margin-bottom: 0.5em;
  align-items: flex-start;
}

.oslo__tema {
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.78);
  line-height: 1.15em;
}

.oslo__see-more-text {
  margin-top: auto;
  // position: absolute;
  // bottom: 0.2rem;
  font-size: 1.15rem;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.78);
}
</style>
