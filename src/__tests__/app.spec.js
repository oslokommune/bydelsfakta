import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router';

import App from '../App';
import clickOutside from '../directives/clickOutside';
import setupI18n from '../i18n';
import mockStore from '../../tests/MockStore';
import { routes } from '../router';

global.scroll = jest.fn();
window.scroll = jest.fn();

const i18n = setupI18n();

describe('App', () => {
  let wrapper = null;
  let store = null;
  let router = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    localVue.use(VueMeta);
    localVue.directive('click-outside', clickOutside);
    store = new Vuex.Store(mockStore);
    router = new VueRouter({ routes });
    wrapper = shallowMount(App, {
      localVue,
      router,
      store,
      i18n,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders app-component and finds id #app', () => {
    expect(wrapper.classes('app')).toBe(true);
  });

  test('shallowmounts app', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
