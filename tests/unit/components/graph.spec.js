import { mount, createLocalVue } from '@vue/test-utils';
import vueResize from 'vue-resize';
import Graph from '../../../src/components/Graph.vue';
import page from '../../../src/config/pages';

describe('Graph', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vueResize);
    wrapper = mount(Graph, {
      propsData: {
        settings: page['alder'].subpages[0].graphs[0],
      },
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders graph-component and finds graph__container-class', () => {
    expect(wrapper.classes('graph__container')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
