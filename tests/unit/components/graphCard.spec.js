import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import vueResize from 'vue-resize';
import GraphCard from '../../../src/components/GraphCard.vue';
import clickOutside from '../../../src/directives/clickOutside';
import page from '../../../src/config/pages';

describe('GraphCard', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vueResize);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(GraphCard, {
      propsData: {
        settings: page['alder'].aldersgrupper[0],
      },
      stubs: { RouterLink: RouterLinkStub },
      localVue,
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
});
