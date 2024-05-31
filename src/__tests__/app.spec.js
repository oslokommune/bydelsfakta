import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import Vue3Resize from 'vue3-resize';
import VueSkipTo from '@vue-a11y/skip-to';
import App from '@/App.vue';
import clickOutside from '@/directives/clickOutside';
import i18n from '@/i18n';
import mockStore from '@/../tests/MockStore';
import { routes } from '@/router';

global.scroll = jest.fn();
window.scroll = jest.fn();

describe('App', () => {
  let wrapper = null;
  let store = null;
  let router = null;

  beforeEach(() => {
    store = createStore(mockStore);
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    wrapper = mount(App, {
      global: {
        plugins: [router, store, i18n, Vue3Resize, VueSkipTo],
        directives: {
          'click-outside': clickOutside,
        },
      },
      shallow: true,
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders app-component and finds id #app', () => {
    expect(wrapper.classes('app')).toBe(true);
  });

  test('shallowmounts app', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
