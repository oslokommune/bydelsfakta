import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Bygningstyper from '../../../../src/views/subviews/Bygningstyper.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Bygningstyper', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Bygningstyper, {
      propsData: {
        settings: page['bygningstyper'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Bygningstyper component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
