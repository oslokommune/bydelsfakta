import Vue from 'vue';
import Router from 'vue-router';
import Graph from './components/Graph.vue';
import page from './config/pages';
import baseUrl from './util/config';

import Home from './views/Home.vue';
import Bydel from './views/Bydel.vue';
import Alder from './views/subviews/Alder.vue';
import Boligpriser from './views/subviews/Boligpriser.vue';
import Bygningstyper from './views/subviews/Bygningstyper.vue';
import Eierform from './views/subviews/Eierform.vue';
import Flytting from './views/subviews/Flytting.vue';
import Folkemengde from './views/subviews/Folkemengde.vue';
import Husholdninger from './views/subviews/Husholdninger.vue';
import Innvandrerbefolkningen from './views/subviews/Innvandrerbefolkningen.vue';
import Kommunaleboliger from './views/subviews/Kommunaleboliger.vue';
import Levekaar from './views/subviews/Levekaar.vue';
import Trangboddhet from './views/subviews/Trangboddhet.vue';

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
    },
    {
      path: '/bydel/:bydel/folkemengde',
      name: 'BydelFolkemengde',
      props: { settings: page.folkemengde },
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
      props: { settings: page.innvandring },
      component: Innvandrerbefolkningen,
    },
    {
      path: '/bydel/:bydel/husholdninger',
      name: 'BydelHusholdninger',
      props: { settings: page.husholdninger },
      component: Husholdninger,
    },
    {
      path: '/bydel/:bydel/trangboddhet',
      name: 'BydelTrandboddhet',
      props: { settings: page.trangboddhet },
      component: Trangboddhet,
    },
    {
      path: '/bydel/:bydel/eierform',
      name: 'BydelEierform',
      props: { settings: page.eierform },
      component: Eierform,
    },
    {
      path: '/bydel/:bydel/kommunaleboliger',
      name: 'BydelKommunaleboliger',
      props: { settings: page.kommunale_boliger },
      component: Kommunaleboliger,
    },
    {
      path: '/bydel/:bydel/flytting',
      name: 'BydelFlytting',
      props: { settings: page.flytting },
      component: Flytting,
    },
    {
      path: '/bydel/:bydel/bygningstyper',
      name: 'BydelBygningstyper',
      props: { settings: page.bygningstyper },
      component: Bygningstyper,
    },
    {
      path: '/bydel/:bydel/boligpriser',
      name: 'BydelBoligpriser',
      props: { settings: page.boligpriser },
      component: Boligpriser,
    },
    {
      path: '/bydel/:bydel/levekaar',
      name: 'Bydellevekaar',
      props: { settings: page.levekaar },
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
      props: { settings: page.folkemengde },
      component: Folkemengde,
    },
    {
      path: '/sammenlign/:bydel/alder',
      name: 'Alder',
      props: { settings: page.alder },
      component: Alder,
    },
    {
      path: '/sammenlign/:bydel/innvandrerbefolkningen',
      name: 'Innvandrerbefolkningen',
      props: { settings: page.innvandring },
      component: Innvandrerbefolkningen,
    },
    {
      path: '/sammenlign/:bydel/husholdninger',
      name: 'Husholdninger',
      props: { settings: page.husholdninger },
      component: Husholdninger,
    },
    {
      path: '/sammenlign/:bydel/trangboddhet',
      name: 'Trandboddhet',
      props: { settings: page.trangboddhet },
      component: Trangboddhet,
    },
    {
      path: '/sammenlign/:bydel/eierform',
      name: 'Eierform',
      props: { settings: page.eierform },
      component: Eierform,
    },
    {
      path: '/sammenlign/:bydel/kommunaleboliger',
      name: 'Kommunaleboliger',
      props: { settings: page.kommunale_boliger },
      component: Kommunaleboliger,
    },
    {
      path: '/sammenlign/:bydel/flytting',
      name: 'Flytting',
      props: { settings: page.flytting },
      component: Flytting,
    },
    {
      path: '/sammenlign/:bydel/bygningstyper',
      name: 'Bygningstyper',
      props: { settings: page.bygningstyper },
      component: Bygningstyper,
    },
    {
      path: '/sammenlign/:bydel/boligpriser',
      name: 'Boligpriser',
      props: { settings: page.boligpriser },
      component: Boligpriser,
    },
    {
      path: '/sammenlign/:bydel/levekaar',
      name: 'levekaar',
      props: { settings: page.levekaar },
      component: Levekaar,
    },
  ],
});
