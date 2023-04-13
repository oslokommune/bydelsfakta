<template>
  <div id="app" class="app" tabindex="-1" :class="{ menuIsOpen, navigationIsOpen }">
    <pkt-icons-sprite />
    <the-navigation-drawer />
    <div class="app__content">
      <div v-if="showWarning" class="ok-alert-container">
        <div class="ok-alert ok-alert--warning">
          {{ $t('alert.warning') }}
        </div>
      </div>
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
import PktIconsSprite from './components/PktIconsSprite.vue';
import TheNavigationDrawer from './components/TheNavigationDrawer.vue';
import TheNavigationTopbar from './components/TheNavigationTopbar.vue';
import TheFooter from './components/TheFooter.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',

  components: {
    PktIconsSprite,
    TheNavigationTopbar,
    TheNavigationDrawer,
    TheFooter,
    Modal,
  },

  data: () => ({
    isOpen: false,
    showWarning: false,
    warningMessage: '',
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
    if (import.meta.env.PROD) {
      const envs = JSON.parse(window.__GLOBAL_ENVS__);
      this.setProductionMode(envs.VITE_PRODUCTION_DATA);
      document.getElementById('bydelsfakta-globals').remove();
    } else {
      this.setProductionMode(import.meta.env.VITE_PRODUCTION_DATA);
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
$borderRadius: 1.5px;

@mixin boxShadow($color) {
  box-shadow: 0 1px 3px rgba($color, 0.2), 0 3px 12px rgba($color, 0.05);
}

@mixin boxColor($color, $shadowColor: #292858) {
  background: rgba($color, 0.1);
  @include boxShadow($shadowColor);

  &::after {
    background: linear-gradient($color, darken($color, 5%));
  }

  &::before {
    background: $color;
  }
}

.app:focus {
  outline: none;
}

.ok-alert-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ok-alert {
  position: relative;
  max-width: 600px;
  margin: 1rem 1.5rem 1rem;
  padding: 1rem 2.5rem 1rem 1.5rem;
  overflow: hidden;
  font-size: 1rem;
  border-radius: $borderRadius;

  &::after {
    position: absolute;
    top: 0;
    right: none;
    bottom: 0;
    left: 0;
    display: inline-flex;
    align-items: inherit;
    justify-content: center;
    width: 0.25rem;
    height: 100%;
    padding-top: 1rem;
    padding-left: 0;
    font-size: 1.75rem;
    font-family: 'Oslo Icons', sans-serif;
    text-align: center;
    content: '';
  }

  @include boxColor(#242433);

  &--warning {
    @include boxColor(#f8c66b, darken(#f8c66b, 20%));
  }
}
</style>
