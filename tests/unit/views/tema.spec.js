import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import VueResize from 'vue-resize';

import Topic from '../../../src/views/Topic.vue';
import clickOutside from '../../../src/directives/clickOutside';

describe('Topic', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    const router = new VueRouter();
    wrapper = mount(Topic, {
      propsData: {
        district: 'bydel',
        topic: 'alder',
      },
      localVue,
      router,
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

  test('renders different component when props change', () => {
    expect(wrapper.vm.topic).toBe('alder');
    wrapper.setProps({ topic: 'levekaar' });
    expect(wrapper.vm.topic).toBe('levekaar');
  });
});
