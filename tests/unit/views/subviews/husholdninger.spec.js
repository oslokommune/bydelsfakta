import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Husholdninger from '../../../../src/views/subviews/Husholdninger.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Husholdninger', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Husholdninger, {
      propsData: {
        settings: page['husholdninger'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Husholdninger component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
