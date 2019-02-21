<template>
  <div id="app">
    <the-navigation-drawer />
    <div id="content">
      <the-navigation-topbar />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TheNavigationDrawer from './components/TheNavigationDrawer.vue';
import TheNavigationTopbar from './components/TheNavigationTopbar.vue';

export default {
  name: 'App',
  components: { TheNavigationTopbar, TheNavigationDrawer },

  created() {
    if (this.$route.params.bydel === undefined) {
      return;
    }
    this.$store.dispatch('addDistrict', { district: this.$route.params.bydel, pushRoute: true });
  },

  watch: {
    $route(to, from) {
      if (to.name === 'Tema' && from.name === 'Bydel') {
        window.scrollTo(0, 0);
      }
      if (to.params.bydel !== undefined) {
        this.$store.dispatch('addDistrict', { district: to.params.bydel, pushRoute: false });
      }
    },
  },
};
</script>
