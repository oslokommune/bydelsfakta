import { createRouter, createWebHistory } from 'vue-router';

import { topicNames, disabledTopics } from './config/topics';
import allDistricts from './config/allDistricts';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/District.vue'),
  },
  {
    path: '/bydel/:district?',
    name: 'District',
    component: () => import('@/views/District.vue'),
    props: true,
  },
  {
    path: '/bydel/:district/:topic',
    name: 'Topic',
    component: () => import('@/views/Topic.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Temp while we find out what our homepage should look like
router.beforeEach((to, from) => {
  if (to.params.topic) {
    if (
      (!topicNames.find((name) => name === to.params.topic) && import.meta.env.VITE_PRODUCTION_DATA === 'prod') ||
      disabledTopics.includes(to.params.topic)
    ) {
      return { name: 'NotFound', params: [to.path] };
    }
  }
  if (to.params.district) {
    const districts = to.params.district.split('-');
    if (districts[0] === 'alle') {
      return true;
    }
    if (districts.length === 1) {
      if (allDistricts.find((district) => district.uri === districts[0])) {
        return true;
      }
      if (allDistricts.find((district) => district.key === districts[0])) {
        return true;
      }
      return { name: 'NotFound', params: [to.path] };
    }
    if (districts.length > 1) {
      const errors = [];
      districts.forEach((district) => {
        if (!allDistricts.find((item) => item.key === district)) {
          errors.push(district);
        }
      });
      if (errors.length > 0) {
        return { name: 'NotFound', params: [to.path] };
      }
    }
  }
  if (to.params.topic !== from.params.topic || (to.name === 'Topic' && from.name === 'District')) {
    window.scroll(0, 0);
  }
  return true;
});

export default router;
