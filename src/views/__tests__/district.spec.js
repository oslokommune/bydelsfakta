import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import District from '../District';
import setupI18n from '../../i18n';
import { routes } from '../../router';
import mockStore from '../../../tests/MockStore';

const i18n = setupI18n();

describe('Bydel', () => {
  let wrapper = null;
  let router = null;
  let store = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    localVue.use(VueMeta);
    router = new VueRouter({ routes });
    store = new Vuex.Store(mockStore);
    wrapper = mount(District, {
      propsData: {
        district: 'gamleoslo',
      },
      localVue,
      router,
      store,
      i18n,
      stubs: {
        VLeaflet: true,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders bydel-component and finds main-container class', () => {
    expect(wrapper.classes('main-container')).toBe(true);
  });

  test('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
