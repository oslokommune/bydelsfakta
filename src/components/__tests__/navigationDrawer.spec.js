import { mount, createLocalVue } from '@vue/test-utils';
import vuex from 'vuex';
import TheNavigationDrawer from '../TheNavigationDrawer';
import router from '../../router';
import store from '../../store';
import setupI18n from '../../i18n';

const i18n = setupI18n();

global.scroll = jest.fn();
window.scroll = jest.fn();

describe('TheNavigationDrawer', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(router);
    localVue.use(vuex);
    router.push('/bydel/sagene');
    wrapper = mount(TheNavigationDrawer, {
      localVue,
      router,
      store,
      i18n,
      stubs: {
        'oslo-logo': true,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders TheNavigationDrawer-component and finds navbar-id', () => {
    expect(wrapper.classes('navbar')).toBe(true);
  });

  test('renders TheNavigationDrawer correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('render TheNavigationDrawer with route /bydel/gamleoslo correctly', () => {
    router.push('/bydel/gamleoslo');
    expect(wrapper.element).toMatchSnapshot();
  });
});
