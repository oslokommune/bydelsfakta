import 'whatwg-fetch';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';
import VueResize from 'vue-resize';
import { Icon } from 'leaflet';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import './util/polyfills';
import App from './App';
import router from './router';
import store from './store';
import clickOutside from './directives/clickOutside';

import 'vue-resize/dist/vue-resize.css';
import 'leaflet/dist/leaflet.css';

import './styles/main.scss';
import setupI18n from './i18n';

const production = process.env.NODE_ENV === 'production';
const envs = production ? JSON.parse(window.__GLOBAL_ENVS__) : {};
const i18n = setupI18n();

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(VueMeta);
Vue.use(VueResize);

Vue.config.productionTip = false;
Vue.config.devtools = !production;
Vue.config.performance = !production;

// Directive to detect clicks outside of an element
Vue.directive('click-outside', clickOutside);

Vue.use(VueAnalytics, {
  id: production ? envs.VUE_APP_GOOGLE_ANALYTICS_ID : process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
  router,
  debug: {
    sendHitTask: production,
  },
});

if (production) {
  Sentry.init({
    dsn: production ? envs.VUE_APP_SENTRY_DSN : process.env.VUE_APP_SENTRY_DSN,
    integrations: [new Integrations.Vue({ Vue, attachProps: true, logErrors: true })],
  });
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
