import { mount, createLocalVue } from '@vue/test-utils';
import vueResize from 'vue-resize';
import GraphInstance from '../../../src/components/GraphInstance.vue';
import page from '../../../src/config/topics';

describe('GraphInstance', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vueResize);
    wrapper = mount(GraphInstance, {
      propsData: {
        settings: page['alder'].subpages[0].graphs[0],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders graphInstance-component and finds graph__container-class', () => {
    expect(wrapper.classes('graph__container')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
