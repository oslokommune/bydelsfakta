import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from '@/i18n';
import { routes } from '@/router';
import mockStore from '@/../tests/MockStore';
import NotFound from '../NotFound.vue';

describe('NotFound', () => {
  let wrapper = null;
  let router = null;
  let store = null;

  beforeEach(() => {
    store = createStore(mockStore);
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    wrapper = mount(NotFound, {
      global: {
        plugins: [router, store, i18n],
        stubs: {
          'v-category': true,
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
