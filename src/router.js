import Vue from 'vue';
import Router from 'vue-router';

import { topicNames, disabledTopics } from './config/topics';
import allDistricts from './config/allDistricts';

const District = () => import('./views/District');
const Topic = () => import('./views/Topic');
const NotFound = () => import('./views/NotFound');

Vue.use(Router);

export const routes = [
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
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

// Temp while we find out what our homepage should look like
router.beforeEach((to, from, next) => {
  if (to.params.topic) {
    if (!topicNames.find(name => name === to.params.topic) || disabledTopics.includes(to.params.topic)) {
      next({ name: 'NotFound', params: [to.path] });
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
        next({ name: 'NotFound', params: [to.path] });
      }
    } else if (districts.length > 1) {
      const errors = [];
      districts.forEach(district => {
        if (!allDistricts.find(item => item.key === district)) {
          errors.push(district);
        }
      });
      if (errors.length > 0) {
        next({ name: 'NotFound', params: [to.path] });
      }
    }
  }

  if (to.params.topic !== from.params.topic || (to.name === 'Topic' && from.name === 'District')) {
    window.scroll(0, 0);
  }

  next();
});

export default router;
