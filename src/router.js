import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import District from './views/District.vue';
import Topic from './views/Topic.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: District,
    },
    {
      path: '/bydel/:district?',
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

// Temp while we find out what our homepage should look like
router.beforeEach((to, from, next) => {
  if (to.params.topic !== from.params.topic || (to.name === 'Topic' && from.name === 'District')) {
    window.scroll(0, 0);
  }

  next();
});

export default router;
