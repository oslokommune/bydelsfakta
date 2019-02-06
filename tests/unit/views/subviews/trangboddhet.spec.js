import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Trangboddhet from '../../../../src/views/subviews/Trangboddhet.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Trangboddhet', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Trangboddhet, {
      propsData: {
        settings: page['trangboddhet'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Trangboddhet component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
