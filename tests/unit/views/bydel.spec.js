import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

import Bydel from '../../../src/views/Bydel.vue';

describe('Bydel', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    wrapper = mount(Bydel, {
      propsData: {
        bydel: 'bydel',
      },
      localVue,
      router,
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
