import { mount, RouterLinkStub } from '@vue/test-utils';
import store from '@/store';
import i18n from '@/i18n';
import VCategory from '../VCategory.vue';

describe('VCategory', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(VCategory, {
      global: {
        plugins: [i18n, store],
        stubs: { RouterLink: RouterLinkStub },
      },
      props: {
        category: 'test',
        topic: 'test',
        bgImage: 'test',
        bgColor: 'black',
        txtColor: 'white',
        id: 'test',
        link: '/test',
        district: 'sagene',
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders VCategory-component and finds main-container__item-class', () => {
    expect(wrapper.classes('main-container__item')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
