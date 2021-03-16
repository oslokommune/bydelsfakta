<template>
  <div id="app" class="app" tabindex="-1" :class="{ menuIsOpen, navigationIsOpen }">
    <the-navigation-drawer />
    <div class="app__content">
      <the-navigation-topbar />
      <main>
        <router-view />
      </main>
      <the-footer />
    </div>
    <modal v-if="isOpen" @close="isOpen = false" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheNavigationDrawer from './components/TheNavigationDrawer';
import TheNavigationTopbar from './components/TheNavigationTopbar';
import TheFooter from './components/TheFooter';
import Modal from './components/Modal';

export default {
  name: 'App',

  components: { TheNavigationTopbar, TheNavigationDrawer, TheFooter, Modal },

  data: () => ({
    isOpen: false,
  }),

  metaInfo() {
    return {
      title: 'Bydelsfakta – Visualisering av statistikk om befolkning, levekår og boforhold',
    };
  },

  computed: {
    ...mapState(['menuIsOpen', 'navigationIsOpen', 'ie11']),
  },

  watch: {
    $route(to) {
      if (to.params.district !== undefined) {
        this.addDistrict({ district: to.params.district, pushRoute: false });
        document.getElementById('app').focus();
      }
    },
  },

  mounted() {
    if ('ontouchstart' in document.documentElement) {
      this.setTouchDevice(true);
    }
    if (!!window.MSInputMethodContext && !!document.documentMode) {
      this.isOpen = true;
      this.setIE11Compatibility(true);
    }
  },

  created() {
    if (process.env.NODE_ENV === 'production') {
      const envs = JSON.parse(window.__GLOBAL_ENVS__);
      this.setProductionMode(envs.VUE_APP_PRODUCTION_DATA);
      document.getElementById('bydelsfakta-globals').remove();
    } else {
      this.setProductionMode(process.env.VUE_APP_PRODUCTION_DATA);
    }

    if (this.$route.name === 'Home') {
      this.addDistrict({ district: 'alle', pushRoute: false });
    }
    if (this.$route.params.district === undefined) {
      return;
    }
    this.addDistrict({ district: this.$route.params.district, pushRoute: true });
  },

  methods: {
    ...mapActions(['addDistrict', 'setTouchDevice', 'setIE11Compatibility', 'setProductionMode']),
  },
};

// Using a class on body to determine how to style focus states
document.body.addEventListener('mousedown', () => {
  document.body.classList.add('using-mouse');
});
document.body.addEventListener('keydown', () => {
  document.body.classList.remove('using-mouse');
});
</script>

<style lang="scss">
.app:focus {
  outline: none;
}
</style>
