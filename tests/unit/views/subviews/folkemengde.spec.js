import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Folkemengde from '../../../../src/views/subviews/Folkemengde.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Folkemengde', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Folkemengde, {
      propsData: {
        settings: page['folkemengde'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Folkemengde component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
