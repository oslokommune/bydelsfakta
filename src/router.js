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
      path: '/bydel/:bydel',
      name: 'Bydel',
      component: Bydel,
      children: [
        {
          path: 'folkemengde',
          name: 'BydelFolkemengde',
          component: Home,
        },
        {
          path: 'alder',
          name: 'BydelAlder',
          component: Home,
        },
        {
          path: 'innvandrerbefolkningen',
          name: 'BydelInnvandrerbefolkningen',
          component: Home,
        },
        {
          path: 'husholdninger',
          name: 'BydelHusholdninger',
          component: Home,
        },
        {
          path: 'trangboddhet',
          name: 'BydelTrandboddhet',
          component: Home,
        },
        {
          path: 'eierform',
          name: 'BydelEierform',
          component: Home,
        },
        {
          path: 'kommunaleboliger',
          name: 'BydelKommunaleboliger',
          component: Home,
        },
        {
          path: 'flytting',
          name: 'BydelFlytting',
          component: Home,
        },
        {
          path: 'bygningstyper',
          name: 'BydelBygningstyper',
          component: Home,
        },
        {
          path: 'boligpriser',
          name: 'BydelBoligpriser',
          component: Home,
        },
        {
          path: 'levekaar',
          name: 'Bydellevekaar',
          component: Home,
        },
      ],
    },
    {
      path: '/sammenlign/:bydel*',
      name: 'Sammenlign',
      component: Bydel,
      children: [
        {
          path: 'folkemengde',
          name: 'Folkemengde',
          component: Home,
        },
        {
          path: 'alder',
          name: 'Alder',
          component: Home,
        },
        {
          path: 'innvandrerbefolkningen',
          name: 'Innvandrerbefolkningen',
          component: Home,
        },
        {
          path: 'husholdninger',
          name: 'Husholdninger',
          component: Home,
        },
        {
          path: 'trangboddhet',
          name: 'Trandboddhet',
          component: Home,
        },
        {
          path: 'eierform',
          name: 'Eierform',
          component: Home,
        },
        {
          path: 'kommunaleboliger',
          name: 'Kommunaleboliger',
          component: Home,
        },
        {
          path: 'flytting',
          name: 'Flytting',
          component: Home,
        },
        {
          path: 'bygningstyper',
          name: 'Bygningstyper',
          component: Home,
        },
        {
          path: 'boligpriser',
          name: 'Boligpriser',
          component: Home,
        },
        {
          path: 'levekaar',
          name: 'levekaar',
          component: Home,
        },
      ],
    },
  ],
});
