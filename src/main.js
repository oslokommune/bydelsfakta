import { createApp } from 'vue';
import { VueHeadMixin, createHead } from '@unhead/vue';
import VueGtag from 'vue-gtag';
import Vue3Resize from 'vue3-resize';
import VueSkipTo from '@vue-a11y/skip-to';
import '@vue-a11y/skip-to/dist/style.css';
import './util/polyfills';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import clickOutside from './directives/clickOutside';

import 'vue3-resize/dist/vue3-resize.css';
import 'leaflet/dist/leaflet.css';

import './styles/main.scss';

const production = import.meta.env.PROD;
const envs = production ? JSON.parse(window.__GLOBAL_ENVS__) : {};

const app = createApp(App);

const head = createHead();
app.mixin(VueHeadMixin);
app.use(head);

app.use(store);
app.use(router);
app.use(i18n);

app.use(Vue3Resize);
app.use(VueSkipTo);

// Directive to detect clicks outside of an element
app.directive('click-outside', clickOutside);

app.use(VueGtag, {
  config: {
    id: production ? envs.VITE_GOOGLE_ANALYTICS_ID : import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  },
  router,
});

app.mount('#app');
