import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import Bydel from '../../../src/views/District.vue';
import setupI18n from '../../../src/i18n';
import store from '../../../src/store';

const i18n = setupI18n();

describe('Bydel', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    const router = new VueRouter();
    wrapper = shallowMount(Bydel, {
      propsData: {
        district: 'bydel',
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

  test('renders bydel-component and finds main-container class', () => {
    expect(wrapper.classes('main-container')).toBe(true);
  });

  test('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
