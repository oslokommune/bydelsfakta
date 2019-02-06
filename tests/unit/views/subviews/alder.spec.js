import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Alder from '../../../../src/views/subviews/Alder.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Alder', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Alder, {
      propsData: {
        settings: page['alder'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Alder component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
