import { mount, createLocalVue } from '@vue/test-utils';
import vueResize from 'vue-resize';
import router from '../../../src/router';
import GraphCard from '../../../src/components/GraphCard.vue';
import clickOutside from '../../../src/directives/clickOutside';
import topics from '../../../src/config/topics';

describe('GraphCard', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vueResize);
    localVue.use(router);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(GraphCard, {
      propsData: {
        settings: topics['alder'].subpages[0].graphs[0],
      },
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders graphCard-component and finds card-container-class', () => {
    expect(wrapper.classes('card-container')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('change an active tab', () => {
    wrapper.setProps({ settings: topics['eierform'].subpages[0].graphs[0] });
    wrapper.vm.activeTab(1);
    expect(wrapper.vm.active).toEqual(1);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('change active tab multiple times', () => {
    wrapper.setProps({ settings: topics['husholdninger'].subpages[0].graphs[0] });
    expect(wrapper.vm.active).toEqual(0);
    wrapper.vm.activeTab(1);
    expect(wrapper.vm.active).toEqual(1);
    wrapper.vm.activeTab(2);
    expect(wrapper.vm.active).toEqual(2);
  });

  test('if dropdown is false, stay false', () => {
    expect(wrapper.vm.showDropdown).toEqual(false);
    wrapper.vm.closeMenu();
    expect(wrapper.vm.showDropdown).toEqual(false);
  });

  test('if dropdown is true, change to false', () => {
    wrapper.setData({ showDropdown: true });
    expect(wrapper.vm.showDropdown).toEqual(true);
    wrapper.vm.closeMenu();
    expect(wrapper.vm.showDropdown).toEqual(false);
  });

  test('saveSvg is called once', () => {
    const spy = jest.spyOn(wrapper.vm, 'saveSvg');
    spy(wrapper.vm.settings.tabs[wrapper.vm.active].id);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
