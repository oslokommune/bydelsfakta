import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from '@/i18n';
import { routes } from '@/router';
import mockStore from '@/../tests/MockStore';
import District from '../District.vue';

describe('Bydel', () => {
  let wrapper = null;
  let router = null;
  let store = null;

  beforeEach(() => {
    store = createStore(mockStore);
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    wrapper = mount(District, {
      global: {
        plugins: [router, store, i18n],
        stubs: {
          VLeaflet: true,
        },
      },
      props: {
        district: 'gamleoslo',
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders bydel-component and finds main-container class', () => {
    expect(wrapper.classes('main-container')).toBe(true);
  });

  test('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
