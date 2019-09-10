import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VCategory from '../VCategory';
import store from '../../store';
import setupI18n from '../../i18n';

const i18n = setupI18n();

describe('VCategory', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    wrapper = mount(VCategory, {
      propsData: {
        category: 'test',
        topic: 'test',
        bgImage: 'test',
        bgColor: 'black',
        txtColor: 'white',
        id: 'test',
        link: '/test',
        district: 'sagene',
      },
      localVue,
      stubs: { RouterLink: RouterLinkStub },
      i18n,
      store,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders VCategory-component and finds main-container__item-class', () => {
    expect(wrapper.classes('main-container__item')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
