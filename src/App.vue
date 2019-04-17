<template>
  <div class="app" :class="{ menuIsOpen, navigationIsOpen }">
    <the-navigation-drawer />
    <div class="app__content">
      <the-navigation-topbar />
      <main>
        <router-view />
      </main>
      <the-footer />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheNavigationDrawer from './components/TheNavigationDrawer.vue';
import TheNavigationTopbar from './components/TheNavigationTopbar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: { TheNavigationTopbar, TheNavigationDrawer, TheFooter },

  computed: {
    ...mapState(['menuIsOpen', 'navigationIsOpen']),
  },

  methods: {
    ...mapActions(['addDistrict', 'setTouchDevice', 'setIE11Compatibility', 'setProductionMode']),
  },

  created() {
    this.setProductionMode(process.env.VUE_APP_PRODUCTION_DATA);

    if (this.$route.name === 'Home') {
      this.addDistrict({ district: 'alle', pushRoute: false });
    }
    if (this.$route.params.district === undefined) {
      return;
    }
    this.addDistrict({ district: this.$route.params.district, pushRoute: true });
  },

  mounted() {
    if ('ontouchstart' in document.documentElement) {
      this.setTouchDevice(true);
    }
    if (!!window.MSInputMethodContext && !!document.documentMode) {
      this.setIE11Compatibility(true);
    }
  },

  watch: {
    $route(to) {
      if (to.params.district !== undefined) {
        this.addDistrict({ district: to.params.district, pushRoute: false });
      }
    },
  },
};

// Using a class on body to determine how to style focus states
document.body.addEventListener('mousedown', function() {
  document.body.classList.add('using-mouse');
});
document.body.addEventListener('keydown', function() {
  document.body.classList.remove('using-mouse');
});
</script>
