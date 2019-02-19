import '@babel/polyfill';
import Vue from 'vue';
import VueResize from 'vue-resize';
import * as VueGoogleMaps from 'vue2-google-maps';
import { L } from 'vue2-leaflet';
import App from './App.vue';
import router from './router';
import store from './store';

import clickOutside from './directives/clickOutside';
import googleMapsKey from './config/googleMapsKey';

import 'vue-resize/dist/vue-resize.css';
import 'leaflet/dist/leaflet.css';

import './styles/main.scss';

// this part resolve an issue where the markers would not appear
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(VueResize);

Vue.use(VueGoogleMaps, {
  load: {
    key: googleMapsKey,
    libraries: 'places',
  },
});

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = process.env.NODE_ENV !== 'production';

// Directive to detect clicks outside of an element
Vue.directive('click-outside', clickOutside);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
