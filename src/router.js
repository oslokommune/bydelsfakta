import Vue from 'vue';
import Router from 'vue-router';

import District from './views/District.vue';
import Topic from './views/Topic.vue';
import NotFound from './views/NotFound.vue';

import { topicNames } from './config/topics';
import allDistricts from './config/allDistricts';

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
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});

// Temp while we find out what our homepage should look like
router.beforeEach((to, from, next) => {
  if (to.params.topic) {
    if (!topicNames.find(name => name === to.params.topic)) {
      next({ name: 'NotFound', params: { '0': '/404' } });
    }
  }

  if (to.params.district) {
    const districts = to.params.district.split('-');
    if (districts[0] === 'alle') {
      next();
    } else if (districts.length === 1) {
      if (allDistricts.find(district => district.uri === districts[0])) {
        next();
      } else if (allDistricts.find(district => district.key === districts[0])) {
        next();
      } else {
        next({ name: 'NotFound', params: { '0': '/404' } });
      }
    } else if (districts.length > 1) {
      const errors = [];
      districts.forEach(district => {
        if (!allDistricts.find(item => item.key === district)) {
          errors.push(district);
        }
      });
      if (errors.length > 0) {
        next({ name: 'NotFound', params: { '0': '/404' } });
      }
    }
  }

  if (to.params.topic !== from.params.topic || (to.name === 'Topic' && from.name === 'District')) {
    window.scroll(0, 0);
  }

  next();
});

export default router;
