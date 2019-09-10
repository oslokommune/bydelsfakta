import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../App';
import router from '../router';
import clickOutside from '../directives/clickOutside';
import store from '../store';
import setupI18n from '../i18n';

global.scroll = jest.fn();
window.scroll = jest.fn();

const i18n = setupI18n();

describe('App', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(router);
    localVue.use(Vuex);
    localVue.directive('click-outside', clickOutside);
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
