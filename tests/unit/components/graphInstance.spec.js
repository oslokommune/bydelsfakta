import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import vueResize from 'vue-resize';
import GraphInstance from '../../../src/components/GraphInstance.vue';
import { topics } from '../../../src/config/topics';
import store from '../../../src/store';
import setupI18n from '../../../src/i18n';

const i18n = setupI18n();

describe('GraphInstance', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vueResize);
    localVue.use(Vuex);
    wrapper = mount(GraphInstance, {
      propsData: {
        settings: topics['alder'].cards[0],
        showTable: false,
        mode: 'graph',
      },
      localVue,
      store,
      i18n,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders graphInstance-component and finds graph__container-class', () => {
    expect(wrapper.classes('graph__shadow')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
