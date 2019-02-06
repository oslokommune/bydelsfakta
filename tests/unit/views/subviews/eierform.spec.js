import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Eierform from '../../../../src/views/subviews/Eierform.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Eierform', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Eierform, {
      propsData: {
        settings: page['eierform'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Eierform component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
