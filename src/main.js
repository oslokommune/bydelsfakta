import 'whatwg-fetch';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueResize from 'vue-resize';
import { Icon } from 'leaflet';
import './util/polyfills';
import App from './App.vue';
import router from './router';
import store from './store';
import clickOutside from './directives/clickOutside';

import 'vue-resize/dist/vue-resize.css';
import 'leaflet/dist/leaflet.css';

import './styles/main.scss';
import setupI18n from './i18n';

let envs = {};

if (process.env.VUE_APP_NODE_ENV !== 'development') {
  envs = JSON.parse(window.__GLOBAL_ENVS__);
  document.getElementById('bydelsfakta-globals').remove();
  process.env = {
    ...process.env,
    ...envs,
  };
  console.log(process.env);
}

console.log(process.env);

const i18n = setupI18n();

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(VueResize);

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';

// Directive to detect clicks outside of an element
Vue.directive('click-outside', clickOutside);

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID || envs.VUE_APP_GOOGLE_ANALYTICS_ID,
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production',
  },
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
