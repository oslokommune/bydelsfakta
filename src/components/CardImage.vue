<template>
  <div class="flex-item">
    <v-card
      class="oslo__card-image"
      :style="{ backgroundImage: `url(${dataBgImage})`, backgroundColor: dataBgColor}"
      id="bilde"
      height="160px"
      width="280px"
      @click="clickBydel(id)"
    >
      <v-container>
        <v-layout column>
          <div>
           <span class="text-uppercase oslo__category" :style="{ backgroundColor: dataTxtColor }">
             {{dataKategori}}
           </span>
          </div>
          <div class="grow"><span class="oslo__tema">{{dataTema}}</span></div>
          <span class="oslo__see-more-text">Se mer ----------></span>
        </v-layout>
      </v-container>
    </v-card>
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
.oslo__card-image {
  background-blend-mode: multiply;
  color: white;
  cursor: pointer;
}

.oslo__category {
  padding: 0.25rem;
  color: rgb(41, 40, 88);
  font-weight: bold;
}

.oslo__tema {
  font-size: 26px;
  font-weight: bold;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.78);
}

.oslo__see-more-text {
  position: absolute;
  bottom: 0.2rem;
  font-weight: bold;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.78);
}

.flex-item {
  padding: 5px;
  margin-top: 10px;
}
</style>
