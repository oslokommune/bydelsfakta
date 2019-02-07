import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Kommunaleboliger from '../../../../src/views/subviews/Kommunaleboliger.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Kommunaleboliger', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Kommunaleboliger, {
      propsData: {
        settings: page['kommunaleboliger'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Kommunaleboliger component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
