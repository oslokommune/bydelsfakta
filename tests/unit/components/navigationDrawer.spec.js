import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import NavigationDrawer from '../../../src/components/NavigationDrawer.vue';

describe('NavigationDrawer', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    wrapper = mount(NavigationDrawer, {
      stubs: { RouterLink: RouterLinkStub },
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders navigationDrawer-component and finds navbar-id', () => {
    expect(wrapper.attributes().id).toBe('navbar');
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
