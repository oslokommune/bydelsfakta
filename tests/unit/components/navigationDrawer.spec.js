import { mount, createLocalVue } from '@vue/test-utils';
import TheNavigationDrawer from '../../../src/components/TheNavigationDrawer.vue';
import router from '../../../src/router';

describe('TheNavigationDrawer', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/sagene');
    wrapper = mount(TheNavigationDrawer, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders TheNavigationDrawer-component and finds navbar-id', () => {
    expect(wrapper.attributes().id).toBe('navbar');
  });

  test('renders TheNavigationDrawer correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('render TheNavigationDrawer with route /bydel/gamleoslo correctly', () => {
    router.push('/bydel/gamleoslo');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('render TheNavigationDrawer with route /bydel/1-2-3-4 correctly', () => {
    router.push('/bydel/1-2-3-4');
    expect(wrapper.vm.$route.path).toEqual('/bydel/1-2-3-4');
    router.push('/bydel/test');
    expect(wrapper.vm.$route.path).toEqual('/bydel/test');
  });

  test('change selectedPredefinedOption to length of 3', () => {
    expect(wrapper.vm.selected.length).toEqual(1);
    wrapper.vm.selectedPredefinedOption = ['1', '2', '3'];
    expect(wrapper.vm.selected.length).toEqual(3);
  });

  test('selectedPredefinedOption is length of 0', () => {
    wrapper.setData({ selectedPredefinedOption: [] });
    expect(wrapper.vm.selectedPredefinedOption.length).toEqual(0);
  });

  test('selectedPredefinedOption is set to length of 3 and router is pushed to Topic', () => {
    router.push('/bydel/sagene/alder');
    wrapper.setData({ selectedPredefinedOption: ['1', '2', '3'] });
    expect(wrapper.vm.selected).toEqual(['1', '2', '3']);
    expect(wrapper.vm.$route.path).toEqual('/bydel/1-2-3/alder');
  });
});

describe('created lifecycle hook', () => {
  test('params is alle', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/alle');
    const wrapper = mount(TheNavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test('params.length is bigger than 0', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/1-2-3-4');
    const wrapper = mount(TheNavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.vm.compareBydeler).toEqual(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('params is undefined', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/');
    const wrapper = mount(TheNavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test('district is 1 instead of sagene', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/1');
    const wrapper = mount(TheNavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test('district is sagene and topic is alder', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/sagene/alder');
    const wrapper = mount(TheNavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
