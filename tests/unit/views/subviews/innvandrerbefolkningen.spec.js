import { mount, createLocalVue } from '@vue/test-utils';
import VueResize from 'vue-resize';
import Innvandrerbefolkningen from '../../../../src/views/subviews/Innvandrerbefolkningen.vue';
import page from '../../../../src/config/pages';
import clickOutside from '../../../../src/directives/clickOutside';

describe('Innvandrerbefolkningen', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(Innvandrerbefolkningen, {
      propsData: {
        settings: page['innvandrerbefolkningen'],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders Innvandrerbefolkningen component correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
