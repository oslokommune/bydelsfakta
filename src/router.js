import Vue from 'vue';
import Router from 'vue-router';
import Graph from './components/Graph.vue';
import page from './config/pages';
import baseUrl from './util/config';

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
      path: '/graphA',
      name: 'Graph1',
      props: { settings: { url: `${baseUrl()}/mockDataA.json`, template: 'a' } },
      component: Graph,
    },
    {
      path: '/graphB',
      name: 'Graph2',
      props: { settings: { url: `${baseUrl()}/mockDataB.json`, template: 'b' } },
      component: Graph,
    },
    {
      path: '/graphC',
      name: 'Graph3',
      props: { settings: { url: `${baseUrl()}/mockDataC.json`, template: 'c' } },
      component: Graph,
    },
    {
      path: '/graphD',
      name: 'Graph4',
      props: { settings: { url: `${baseUrl()}/mockDataD2.json`, method: 'ratio', template: 'd' } },
      component: Graph,
    },
    {
      path: '/graphD2',
      name: 'Graph5b',
      props: { settings: { url: `${baseUrl()}/mockDataD2.json`, method: 'value', template: 'd' } },
      component: Graph,
    },
    {
      path: '/graphE',
      name: 'Graph5',
      props: { settings: { url: `${baseUrl()}/mockDataD2.json`, template: 'e' } },
      component: Graph,
    },
    {
      path: '/graphF',
      name: 'Graph8',
      props: { settings: { url: `${baseUrl()}/mockDataD2.json`, template: 'f' } },
      component: Graph,
    },
    {
      path: '/graphG',
      name: 'Graph7',
      props: { settings: { url: `${baseUrl()}/mockDataG.json`, template: 'g' } },
      component: Graph,
    },
    {
      path: '/graphH',
      name: 'Graph10',
      props: { settings: { url: `${baseUrl()}/mockDataH.json`, template: 'h' } },
      component: Graph,
    },
    {
      path: '/graphI',
      name: 'Graph6',
      props: { settings: { url: `${baseUrl()}/mockDataI.json`, template: 'i' } },
      component: Graph,
    },
    {
      path: '/graphJ',
      name: 'Graph9',
      props: { settings: { url: `${baseUrl()}/mockDataJ.json`, template: 'j' } },
      component: Graph,
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
