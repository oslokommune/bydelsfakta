import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import Vue3Resize from 'vue3-resize';
import clickOutside from '@/directives/clickOutside';
import i18n from '@/i18n';
import { routes } from '@/router';
import mockStore from '@/../tests/MockStore';
import GraphInstance from '@/components/GraphInstance.vue';
import Topic from '../Topic.vue';

describe('Topic', () => {
  let wrapper = null;
  let router = null;
  let store = null;

  beforeEach(async () => {
    store = createStore(mockStore);
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    GraphInstance.methods.draw = jest.fn();

    wrapper = mount(Topic, {
      global: {
        plugins: [router, store, i18n, Vue3Resize],
        directives: {
          'click-outside': clickOutside,
        },
        stubs: {
          'ok-icon': true,
          spinner: true,
          'v-category': true,
        },
      },
      props: {
        district: 'gamleoslo',
        topic: 'alder',
      },
    });
    await router.push('/bydel/gamleoslo/alder');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders topic-component and finds main-container class', () => {
    expect(wrapper.classes('main-container')).toBe(true);
  });

  test('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
