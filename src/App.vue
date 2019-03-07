<template>
  <div class="app" :class="{ menuIsOpen, navigationIsOpen }">
    <the-navigation-drawer />
    <div class="app__content">
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
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { TheNavigationTopbar, TheNavigationDrawer },

  computed: {
    ...mapState(['menuIsOpen', 'navigationIsOpen']),
  },

  created() {
    if (this.$route.name === 'Home') {
      this.$store.dispatch('addDistrict', { district: 'alle', pushRoute: false });
    }
    if (this.$route.params.district === undefined) {
      return;
    }
    this.$store.dispatch('addDistrict', { district: this.$route.params.district, pushRoute: true });
  },

  watch: {
    $route(to) {
      if (to.params.district !== undefined) {
        this.$store.dispatch('addDistrict', { district: to.params.district, pushRoute: false });
      }
    },
  },
};
</script>
