import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import TheNavigationTopbar from '../../../src/components/TheNavigationTopbar';
import router from '../../../src/router';
import clickOutside from '../../../src/directives/clickOutside';
import store from '../../../src/store';
import setupI18n from '../../../src/i18n';

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
    wrapper = shallowMount(TheNavigationTopbar, {
      localVue,
      router,
      store,
      i18n,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders navigationDrawer-component and finds oslo__navigation-topbar-class', () => {
    expect(wrapper.classes('oslo__navigation-topbar')).toBe(true);
  });

  test('renders correctly', () => {
    router.push('/bydel/sagene');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('return false if subpage is not active', () => {
    router.push('/bydel/sagene/boligpriser');
    expect(wrapper.vm.checkActiveTopic('levekaar')).toEqual(false);
  });

  test('change showDropdown to false if it is true', () => {
    router.push('/bydel/sagene/boligpriser');
    wrapper.setData({ showDropdown: true });
    wrapper.vm.closeMenu();
    expect(wrapper.vm.showDropdown).toEqual(false);
  });

  test('keep showDropdown as false if false', () => {
    router.push('/bydel/sagene/boligpriser');
    wrapper.vm.closeMenu();
    expect(wrapper.vm.showDropdown).toEqual(false);
  });

  test('return router object when clicking on a subpage', () => {
    router.push('/bydel/sagene/boligpriser');
    expect(wrapper.vm.onClickTopic('boligpriser')).toEqual({
      name: 'Topic',
      params: { district: 'sagene', topic: 'boligpriser' },
    });
  });
});
