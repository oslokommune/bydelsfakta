import { mount } from '@vue/test-utils';
import VueSkipTo from '@vue-a11y/skip-to';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';
import TheNavigationDrawer from '../TheNavigationDrawer.vue';

global.scroll = jest.fn();
window.scroll = jest.fn();

describe('TheNavigationDrawer', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(TheNavigationDrawer, {
      global: {
        plugins: [router, store, i18n, VueSkipTo],
        stubs: {
          'oslo-logo': true,
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders TheNavigationDrawer-component and finds navbar-id', () => {
    expect(wrapper.classes('navbar')).toBe(true);
  });

  test('renders TheNavigationDrawer correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('render TheNavigationDrawer with route /bydel/sagene correctly', async () => {
    await router.push('/bydel/sagene');
    expect(wrapper.element).toMatchSnapshot();
  });
});
