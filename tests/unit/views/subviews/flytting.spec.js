import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Flytting from '../../../../src/views/subviews/Flytting.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Flytting', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Flytting, {
      propsData: {
        settings: page['flytting'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Flytting component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
