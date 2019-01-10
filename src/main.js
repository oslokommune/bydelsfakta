import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuetify/src/stylus/app.styl';
import './styles/main.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = process.env.NODE_ENV !== 'production';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
