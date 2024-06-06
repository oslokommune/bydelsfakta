import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import Vue3Resize from 'vue3-resize';
import VueGtag from 'vue-gtag';
import clickOutside from '@/directives/clickOutside';
import { topics } from '@/config/topics';
import mockStore from '@/../tests/MockStore';
import i18n from '@/i18n';
import { routes } from '@/router';
import GraphCard from '../GraphCard.vue';
import GraphInstance from '../GraphInstance.vue';

describe('GraphCard', () => {
  let wrapper = null;
  let router = null;
  let store = null;

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    store = createStore(mockStore);

    GraphInstance.methods.draw = jest.fn();

    wrapper = mount(GraphCard, {
      global: {
        plugins: [router, store, i18n, Vue3Resize, VueGtag],
        directives: {
          'click-outside': clickOutside,
        },
        stubs: {
          'ok-icon': true,
          spinner: true,
        },
      },
      props: {
        settings: topics.alder.cards[0],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
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
