import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import VueResize from 'vue-resize';

import Tema from '../../../src/views/Tema.vue';
import clickOutside from '../../../src/directives/clickOutside';

describe('Tema', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    const router = new VueRouter();
    wrapper = mount(Tema, {
      propsData: {
        bydel: 'bydel',
        tema: 'alder',
      },
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders tema-component and finds main-container class', () => {
    expect(wrapper.classes('main-container')).toBe(true);
  });

  test('renders component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
