import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Bydel from './views/Bydel.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/bydel/:bydel*',
      name: 'Bydel',
      component: Bydel,
      children: [
        {
          path: 'levekaar',
          name: 'levekaar',
          component: Home,
        },
      ],
    },
    {
      path: '/sammenlign/:bydel*',
      name: 'Sammenlign',
      component: Bydel,
    },
  ],
});
