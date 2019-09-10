import 'whatwg-fetch';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueResize from 'vue-resize';
import VueRouter from 'vue-router';

import Topic from '../Topic';
import clickOutside from '../../directives/clickOutside';
import store from '../../store';
import setupI18n from '../../i18n';
import { routes } from '../../router';

const i18n = setupI18n();

describe('Topic', () => {
  let wrapper = null;
  let router = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(VueResize);
    localVue.use(Vuex);
    router = new VueRouter({ routes });
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Topic, {
      propsData: {
        district: 'bydel',
        topic: 'alder',
      },
      localVue,
      router,
      store,
      i18n,
      stubs: {
        'ok-icon': true,
        spinner: true,
        'v-category': true,
      },
    });
    router.push('/bydel/alle');
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
