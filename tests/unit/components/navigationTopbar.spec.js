import { mount, createLocalVue } from '@vue/test-utils';
import TheNavigationTopbar from '../../../src/components/TheNavigationTopbar.vue';
import router from '../../../src/router';
import clickOutside from '../../../src/directives/clickOutside';

describe('TheNavigationTopbar', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(router);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(TheNavigationTopbar, {
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
    router.push('/bydel/sagene');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('returns true if subpage is active', () => {
    router.push('/bydel/sagene/alder');
    expect(wrapper.vm.checkActiveSubpage('alder')).toEqual(true);
  });

  test('return false if subpage is not active', () => {
    router.push('/bydel/sagene/alder');
    expect(wrapper.vm.checkActiveSubpage('levekaar')).toEqual(false);
  });

  test('change showDropdown to false if it is true', () => {
    router.push('/bydel/sagene/alder');
    wrapper.setData({ showDropdown: true });
    wrapper.vm.closeMenu();
    expect(wrapper.vm.showDropdown).toEqual(false);
  });

  test('keep showDropdown as false if false', () => {
    router.push('/bydel/sagene/alder');
    wrapper.vm.closeMenu();
    expect(wrapper.vm.showDropdown).toEqual(false);
  });

  test('return router object when clicking on a subpage', () => {
    router.push('/bydel/sagene/alder');
    expect(wrapper.vm.onClickSubpage('levekaar')).toEqual({
      name: 'Topic',
      params: { district: 'sagene', topic: 'levekaar' },
    });
  });

  test('render multiple bydeler correctly', () => {
    router.push('/bydel/1-2-3-4/alder');
    expect(wrapper.element).toMatchSnapshot();
  });
});
