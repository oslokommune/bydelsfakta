import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import VueResize from 'vue-resize';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-resize/dist/vue-resize.css';

import 'vuetify/src/stylus/app.styl';
import './styles/main.scss';

Vue.use(VueResize);

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = process.env.NODE_ENV !== 'production';

// Directive to detect clicks outside of an element
Vue.directive('click-outside', {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
