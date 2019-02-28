import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResize from 'vue-resize';

import Topic from '../../../src/views/Topic.vue';
import clickOutside from '../../../src/directives/clickOutside';
import store from '../../../src/store';
import setupI18n from '../../../src/i18n'

const i18n = setupI18n();

describe('Topic', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(VueResize);
    localVue.use(Vuex);
    localVue.directive('click-outside', clickOutside);
    const router = new VueRouter();
    wrapper = shallowMount(Topic, {
      propsData: {
        district: 'bydel',
        topic: 'alder',
      },
      localVue,
      router,
      store,
      i18n,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders topic-component and finds main-container class', () => {
    expect(wrapper.classes('main-container')).toBe(true);
  });

  test('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
