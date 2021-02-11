import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import TheNavigationTopbar from '../TheNavigationTopbar';
import router from '../../router';
import clickOutside from '../../directives/clickOutside';
import store from '../../store';
import setupI18n from '../../i18n';

const i18n = setupI18n();

global.scroll = jest.fn();
window.scroll = jest.fn();

describe('TheNavigationTopbar', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(router);
    localVue.use(Vuex);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(TheNavigationTopbar, {
      localVue,
      router,
      store,
      i18n,
      stubs: {
        'ok-icon': true,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders navigationDrawer-component and finds oslo__navigation-topbar-class', () => {
    expect(wrapper.classes('oslo__navigation-topbar')).toBe(true);
  });

  test('renders correctly', async () => {
    await router.push('/bydel/sagene');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('return false if subpage is not active', async () => {
    await router.push('/bydel/sagene/boligpriser');
    expect(wrapper.vm.checkActiveTopic('levekaar')).toEqual(false);
  });

  test('change showDropdown to false if it is true', async () => {
    wrapper.setData({ showDropdown: true });
    wrapper.vm.closeMenu();
    expect(wrapper.vm.showDropdown).toEqual(false);
  });

  test('keep showDropdown as false if false', async () => {
    wrapper.vm.closeMenu();
    expect(wrapper.vm.showDropdown).toEqual(false);
  });

  test('return router object when clicking on a subpage', async () => {
    expect(wrapper.vm.onClickTopic('boligpriser')).toEqual({
      name: 'Topic',
      params: { district: 'sagene', topic: 'boligpriser' },
    });
  });
});
