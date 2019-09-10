import 'whatwg-fetch';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import vueResize from 'vue-resize';
import VueAnalytics from 'vue-analytics';
import router from '../../router';
import GraphCard from '../GraphCard';
import clickOutside from '../../directives/clickOutside';
import { topics } from '../../config/topics';
import store from '../../store';
import setupI18n from '../../i18n';

const i18n = setupI18n();

describe('GraphCard', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vueResize);
    localVue.use(router);
    localVue.use(Vuex);
    localVue.use(VueAnalytics, {
      id: 'UA-1234-5',
    });
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(GraphCard, {
      propsData: {
        settings: topics['alder'].cards[0],
      },
      localVue,
      router,
      i18n,
      store,
      stubs: {
        'ok-icon': true,
        spinner: true,
      },
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
    wrapper.setProps({ settings: topics['eierform'].cards[0] });
    wrapper.vm.activeTab(1);
    expect(wrapper.vm.active).toEqual(1);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('change active tab multiple times', () => {
    wrapper.setProps({ settings: topics['husholdninger'].cards[0] });
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
