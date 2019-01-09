<template>
  <div class="bydel-container">
    <div class="bydel__cards-container">
      <card-image
              v-for="item in items"
              :key="item.value"
              :id="item.value"
              :kategori="item.options.kategori"
              :tema="item.options.tema"
              :bg-image="item.options.bgImage"
              :bg-color="item.options.bgColor"
              :txt-color="item.options.txtColor"
              :click-bydel="onClickCard"
      />
    </div>
    <div class="bydel__map-container">
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
  data() {
    return {
      items: subpages,
    };
  },
  methods: {
    onClickCard(id) {
      this.$router.push({ path: `${this.$route.path}/${id}` });
    },
  },
};
</script>

<style scoped>
.bydel-container {
  display: flex;
}

.bydel__cards-container {
  display: flex;
  padding: 2rem;

  flex-flow: row wrap;
  justify-content: start;

  flex-basis: auto;
}

.bydel__map-container {
  display: flex;
  padding: 2rem;

  flex-flow: row wrap;
  justify-content: start;
  flex: 0 0 600px;
}
</style>
