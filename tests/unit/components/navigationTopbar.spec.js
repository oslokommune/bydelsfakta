import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import NavigationTopbar from '../../../src/components/NavigationTopbar.vue';
import clickOutside from '../../../src/directives/clickOutside';

describe('NavigationTopbar', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.directive('click-outside', clickOutside);
    const router = new VueRouter();
    wrapper = mount(NavigationTopbar, {
      stubs: { RouterLink: RouterLinkStub },
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders navigationDrawer-component and finds oslo__navigation-topbar-class', () => {
    expect(wrapper.classes('oslo__navigation-topbar')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
