import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import vueResize from 'vue-resize';
import VueAnalytics from 'vue-analytics';
import clickOutside from '@/directives/clickOutside';
import { topics } from '@/config/topics';
import mockStore from '@/../tests/MockStore';
import setupI18n from '@/i18n';
import { routes } from '@/router';
import GraphCard from '../GraphCard.vue';

const i18n = setupI18n();

describe('GraphCard', () => {
  let wrapper = null;
  let router = null;
  let store = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vueResize);
    localVue.use(Vuex);
    localVue.use(VueAnalytics, {
      id: 'UA-1234-5',
    });
    localVue.directive('click-outside', clickOutside);
    store = new Vuex.Store(mockStore);
    router = new VueRouter({ routes });
    wrapper = mount(GraphCard, {
      propsData: {
        settings: topics.alder.cards[0],
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
    wrapper.setProps({ settings: topics.eierform.cards[0] });
    wrapper.vm.activeTab(1);
    expect(wrapper.vm.active).toEqual(1);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('change active tab multiple times', () => {
    expect(wrapper.vm.active).toEqual(0);
    wrapper.vm.activeTab(1);
    expect(wrapper.vm.active).toEqual(1);
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
