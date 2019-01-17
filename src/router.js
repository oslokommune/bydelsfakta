import Vue from 'vue';
import Router from 'vue-router';
import Graph from './components/Graph.vue';
import { page } from './config/pages';

const Alder = () => import('./views/subviews/Alder.vue');
const Boligpriser = () => import('./views/subviews/Boligpriser.vue');
const Bydel = () => import('./views/Bydel.vue');
const Bygningstyper = () => import('./views/subviews/Bygningstyper.vue');
const Eierform = () => import('./views/subviews/Eierform.vue');
const Flytting = () => import('./views/subviews/Flytting.vue');
const Folkemengde = () => import('./views/subviews/Folkemengde.vue');
const Home = () => import('./views/Home.vue');
const Husholdninger = () => import('./views/subviews/Husholdninger.vue');
const Innvandrerbefolkningen = () => import('./views/subviews/Innvandrerbefolkningen.vue');
const Kommunaleboliger = () => import('./views/subviews/Kommunaleboliger.vue');
const Levekaar = () => import('./views/subviews/Levekaar.vue');
const Trangboddhet = () => import('./views/subviews/Trangboddhet.vue');

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
      props: { settings: { url: '/mockDataA.json', template: 'a' } },
      component: Graph,
    },
    {
      path: '/graphB',
      name: 'Graph2',
      props: { settings: { url: '/mockDataB.json', template: 'b' } },
      component: Graph,
    },
    {
      path: '/graphC',
      name: 'Graph3',
      props: { settings: { url: '/mockDataC.json', template: 'c' } },
      component: Graph,
    },
    {
      path: '/graphD',
      name: 'Graph4',
      props: { settings: { url: '/mockDataD2.json', method: 'ratio', template: 'd' } },
      component: Graph,
    },
    {
      path: '/graphD2',
      name: 'Graph5b',
      props: { settings: { url: '/mockDataD2.json', method: 'value', template: 'd' } },
      component: Graph,
    },
    {
      path: '/graphE',
      name: 'Graph5',
      props: { settings: { url: '/mockDataD2.json', template: 'e' } },
      component: Graph,
    },
    {
      path: '/graphF',
      name: 'Graph8',
      props: { settings: { url: '/mockDataD2.json', template: 'f' } },
      component: Graph,
    },
    {
      path: '/graphG',
      name: 'Graph7',
      props: { settings: { url: '/mockDataG.json', template: 'g' } },
      component: Graph,
    },
    {
      path: '/graphH',
      name: 'Graph10',
      props: { settings: { url: '/mockDataH.json', template: 'h' } },
      component: Graph,
    },
    {
      path: '/graphI',
      name: 'Graph6',
      props: { settings: { url: '/mockDataI.json', template: 'i' } },
      component: Graph,
    },
    {
      path: '/graphJ',
      name: 'Graph9',
      props: { settings: { url: '/mockDataJ.json', template: 'j' } },
      component: Graph,
    },
    {
      path: '/bydel/:bydel',
      name: 'Bydel',
      component: Bydel,
    },
    {
      path: '/bydel/:bydel/folkemengde',
      name: 'BydelFolkemengde',
      component: Folkemengde,
    },
    {
      path: '/bydel/:bydel/alder',
      name: 'BydelAlder',
      props: { settings: page.alder },
      component: Alder,
    },
    {
      path: '/bydel/:bydel/innvandrerbefolkningen',
      name: 'BydelInnvandrerbefolkningen',
      component: Innvandrerbefolkningen,
    },
    {
      path: '/bydel/:bydel/husholdninger',
      name: 'BydelHusholdninger',
      component: Husholdninger,
    },
    {
      path: '/bydel/:bydel/trangboddhet',
      name: 'BydelTrandboddhet',
      component: Trangboddhet,
    },
    {
      path: '/bydel/:bydel/eierform',
      name: 'BydelEierform',
      component: Eierform,
    },
    {
      path: '/bydel/:bydel/kommunaleboliger',
      name: 'BydelKommunaleboliger',
      component: Kommunaleboliger,
    },
    {
      path: '/bydel/:bydel/flytting',
      name: 'BydelFlytting',
      component: Flytting,
    },
    {
      path: '/bydel/:bydel/bygningstyper',
      name: 'BydelBygningstyper',
      component: Bygningstyper,
    },
    {
      path: '/bydel/:bydel/boligpriser',
      name: 'BydelBoligpriser',
      component: Boligpriser,
    },
    {
      path: '/bydel/:bydel/levekaar',
      name: 'Bydellevekaar',
      component: Levekaar,
    },
    {
      path: '/sammenlign/:bydel',
      name: 'Sammenlign',
      component: Bydel,
    },
    {
      path: '/sammenlign/:bydel/folkemengde',
      name: 'Folkemengde',
      component: Folkemengde,
    },
    {
      path: '/sammenlign/:bydel/alder',
      name: 'Alder',
      component: Alder,
    },
    {
      path: '/sammenlign/:bydel/innvandrerbefolkningen',
      name: 'Innvandrerbefolkningen',
      component: Innvandrerbefolkningen,
    },
    {
      path: '/sammenlign/:bydel/husholdninger',
      name: 'Husholdninger',
      component: Husholdninger,
    },
    {
      path: '/sammenlign/:bydel/trangboddhet',
      name: 'Trandboddhet',
      component: Trangboddhet,
    },
    {
      path: '/sammenlign/:bydel/eierform',
      name: 'Eierform',
      component: Eierform,
    },
    {
      path: '/sammenlign/:bydel/kommunaleboliger',
      name: 'Kommunaleboliger',
      component: Kommunaleboliger,
    },
    {
      path: '/sammenlign/:bydel/flytting',
      name: 'Flytting',
      component: Flytting,
    },
    {
      path: '/sammenlign/:bydel/bygningstyper',
      name: 'Bygningstyper',
      component: Bygningstyper,
    },
    {
      path: '/sammenlign/:bydel/boligpriser',
      name: 'Boligpriser',
      component: Boligpriser,
    },
    {
      path: '/sammenlign/:bydel/levekaar',
      name: 'levekaar',
      component: Levekaar,
    },
  ],
});
