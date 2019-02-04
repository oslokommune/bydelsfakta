import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Bydel from './views/Bydel.vue';
import Tema from './views/Tema.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/bydel/:bydel',
      name: 'Bydel',
      component: Bydel,
      props: true,
    },
    {
      path: '/bydel/:bydel/:tema',
      name: 'Tema',
      component: Tema,
      props: true,
    },
  ],
});
