import '@babel/polyfill';
import Vue from 'vue';
import VueResize from 'vue-resize';
import { L } from 'vue2-leaflet';
import App from './App.vue';
import router from './router';
import store from './store';

import clickOutside from './directives/clickOutside';

import 'vue-resize/dist/vue-resize.css';
import 'leaflet/dist/leaflet.css';

import './styles/main.scss';
import setupI18n from './i18n';

const i18n = setupI18n();

// this part resolve an issue where the markers would not appear
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(VueResize);

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = process.env.NODE_ENV !== 'production';

// Directive to detect clicks outside of an element
Vue.directive('click-outside', clickOutside);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
