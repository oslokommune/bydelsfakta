import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VContextMenu from '../VContextMenu';
import setupI18n from '../../i18n';
import clickOutside from '../../directives/clickOutside';
import mockStore from '../../../tests/MockStore';

const i18n = setupI18n();

describe('VCategory', () => {
  let wrapper = null;
  let store = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.directive('click-outside', clickOutside);
    store = new Vuex.Store(mockStore);
    wrapper = mount(VContextMenu, {
      propsData: {
        graphId: 'alder_segment_antall',
      },
      localVue,
      stubs: { 'ok-icon': true },
      i18n,
      store,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
