import { mount, RouterLinkStub } from '@vue/test-utils';
import CardImage from '../../../src/components/CardImage.vue';

describe('CardImage', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(CardImage, {
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

  test('renders CardImage-component and finds main-container__item-class', () => {
    expect(wrapper.classes('main-container__item')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
