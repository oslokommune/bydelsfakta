import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import District from './views/District.vue';
import Topic from './views/Topic.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/bydel/:district',
      name: 'District',
      component: District,
      props: true,
    },
    {
      path: '/bydel/:district/:topic',
      name: 'Topic',
      component: Topic,
      props: true,
    },
  ],
});
