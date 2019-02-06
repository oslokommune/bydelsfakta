import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Boligpriser from '../../../../src/views/subviews/Boligpriser.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Boligpriser', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Boligpriser, {
      propsData: {
        settings: page['boligpriser'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Boligpriser component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
