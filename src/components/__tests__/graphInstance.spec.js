import { mount } from '@vue/test-utils';
import Vue3Resize from 'vue3-resize';
import { topics } from '@/config/topics';
import store from '@/store';
import i18n from '@/i18n';
import GraphInstance from '../GraphInstance.vue';

describe('GraphInstance', () => {
  let wrapper = null;

  beforeEach(() => {
    GraphInstance.methods.draw = jest.fn();

    wrapper = mount(GraphInstance, {
      global: {
        plugins: [store, i18n, Vue3Resize],
        stubs: {
          spinner: true,
        },
      },
      props: {
        settings: topics.alder.cards[0],
        showTable: false,
        mode: 'graph',
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('renders graphInstance-component and finds graph__container-class', () => {
    expect(wrapper.classes('graph__shadow')).toBe(true);
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
