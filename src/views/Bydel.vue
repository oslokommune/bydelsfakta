<template>
  <v-layout row>
    <v-flex lg7>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
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
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex lg5>
      <h1>Delbydeler - kart</h1>
    </v-flex>
  </v-layout>
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
</style>
