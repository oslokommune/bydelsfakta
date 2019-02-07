import { mount, createLocalVue } from '@vue/test-utils';
import NavigationDrawer from '../../../src/components/NavigationDrawer.vue';
import router from '../../../src/router';

describe('NavigationDrawer', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/sagene');
    wrapper = mount(NavigationDrawer, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders navigationDrawer-component and finds navbar-id', () => {
    expect(wrapper.attributes().id).toBe('navbar');
  });

  test('renders navigationDrawer correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('render navigationDrawer with route /bydel/gamleoslo correctly', () => {
    router.push('/bydel/gamleoslo');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('render navigationDrawer with route /bydel/1-2-3-4 correctly', () => {
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
    wrapper.vm.selectedPredefinedOption = [];
    expect(wrapper.vm.selectedPredefinedOption.length).toEqual(0);
  });

  test('selectedPredefinedOption is set to length of 3 and router is pushed to Tema', () => {
    router.push('/bydel/sagene/alder');
    wrapper.vm.selectedPredefinedOption = ['1', '2', '3'];
    expect(wrapper.vm.selected).toEqual(['1', '2', '3']);
    expect(wrapper.vm.$route.path).toEqual('/bydel/1-2-3/alder');
  });
});

describe('created lifecycle hook', () => {
  test('params is alle', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/alle');
    const wrapper = mount(NavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test('params.length is bigger than 0', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/1-2-3-4');
    const wrapper = mount(NavigationDrawer, {
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
    const wrapper = mount(NavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test('bydel is 1 instead of sagene', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/1');
    const wrapper = mount(NavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test('bydel is sagene and tema is alder', () => {
    const localVue = createLocalVue();
    localVue.use(router);
    router.push('/bydel/sagene/alder');
    const wrapper = mount(NavigationDrawer, {
      localVue,
      router,
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
