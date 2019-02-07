import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Levekaar from '../../../../src/views/subviews/Levekaar.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Levekaar', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Levekaar, {
      propsData: {
        settings: page['levekaar'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Levekaar component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
