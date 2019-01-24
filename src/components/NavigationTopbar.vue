<template>
  <div class="oslo__navigation-topbar">
    <div @click="backButton" role="button" class="oslo__navigation-topbar-button">
      <i class="material-icons oslo__topbar">arrow_back</i>
      <h4 class="text-uppercase oslo__topbar oslo__topbar-text">
        {{ getBydel(this.$route.params.bydel) }}
      </h4>
    </div>
    <v-select
      v-model="selectedSubpage"
      :items="items"
      label="VELG TEMA"
      class="v-select__selection--uppercase"
    ></v-select>
  </div>
</template>
<script>
import subpages from '../config/subpages';
import bydeler from '../config/bydeler';

export default {
  name: 'navigation-topbar',
  data() {
    return {
      items: subpages,
      selectedSubpage: '',
      bydeler: bydeler,
    };
  },

  mounted() {
    const routes = this.$route.path.split('/');
    if (routes.length > 3) {
      this.selectedSubpage = routes[3];
    }
  },

  methods: {
    getBydel(id) {
      return this.$route.path.includes('sammenlign')
        ? 'Sammenligne bydeler'
        : id !== undefined
          ? this.bydeler.find(bydel => bydel.uri === id).value
          : 'Velg bydel';
    },

    backButton() {
      const route = this.$route;
      if (this.selectedSubpage === null) {
        this.selected = [];
        this.$router.push({ path: '/' });
      } else if (route.path.includes('bydel')) {
        this.$router.push({ path: `/bydel/${route.params.bydel}` });
      } else if (route.path.includes('sammenlign')) {
        this.$router.push({ path: `/sammenlign/${route.params.bydel}` });
      }
      this.selectedSubpage = null;
    },
  },

  watch: {
    $route(to) {
      const routes = this.$route.path.split('/');
      if (to.path.includes('bydel')) {
        this.selectedSubpage = null;
      }
      if (routes.length > 3) {
        this.selectedSubpage = routes[3];
      }
    },

    selectedSubpage(subpage) {
      if (this.$route.path.includes('sammenlign') && subpage !== null) {
        this.$router.push({
          path: `/sammenlign/${this.$route.params.bydel}/${subpage}`,
        });
      } else if (this.$route.path.includes('bydel') && subpage !== null) {
        this.$router.push({
          path: `/bydel/${this.$route.params.bydel}/${subpage}`,
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '../styles/colors';

.oslo__navigation-topbar {
  background-color: white;
  border-bottom: 1px solid $color-grey-300;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;

  &-button {
    display: flex;
    flex-direction: row;
  }
}

.oslo__topbar {
  color: $color-purple;
  font-weight: bold;
  margin-bottom: 2rem;

  &-text {
    letter-spacing: 0.8px;
    margin-left: 1rem;
    margin-top: 0.3rem;
  }
}

.v-select__selection--uppercase {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
}

.v-input--selection-controls {
  margin-top: 0.6rem;
  padding-top: 0;
}
</style>
