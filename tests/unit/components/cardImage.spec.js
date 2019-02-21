import { mount, RouterLinkStub } from '@vue/test-utils';
import VCategory from '../../../src/components/VCategory.vue';

describe('VCategory', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(VCategory, {
      propsData: {
        kategori: 'test',
        tema: 'test',
        bgImage: 'test',
        bgColor: 'black',
        txtColor: 'white',
        id: 'test',
        link: '/test',
      },
      stubs: { RouterLink: RouterLinkStub },
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
