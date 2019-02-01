<template>
  <div class="main-container">
    <div class="main-container__cards">
      <card-image
        v-for="item in items"
        :key="item.value"
        :id="item.value"
        :kategori="item.options.kategori"
        :tema="item.options.tema"
        :bg-image="item.options.bgImage"
        :bg-color="item.options.bgColor"
        :txt-color="item.options.txtColor"
        :link="`${$route.path}/${item.value}`"
      />
    </div>
    <div class="main-container__map">
      <h3>Bydelskart</h3>
    </div>
  </div>
</template>

<script>
import CardImage from '../components/CardImage.vue';
import subpages from '../config/subpages';

export default {
  name: 'Bydel',
  components: { CardImage },
  props: {
    bydel: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: subpages,
    };
  },

  mounted() {
    console.log(this.$route);
    console.log(this.bydel);
  },
};
</script>
