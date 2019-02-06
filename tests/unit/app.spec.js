import { createLocalVue, mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import Bydel from '../../src/views/Bydel.vue';
import Home from '../../src/views/Home.vue';
import router from '../../src/router';
import clickOutside from '../../src/directives/clickOutside';

describe('App', () => {
  let wrapper = null;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(router);
    localVue.directive('click-outside', clickOutside);
    wrapper = mount(App, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('renders app-component and finds id #app', () => {
    expect(wrapper.attributes('id')).toBe('app');
  });

  test('router sends you to bydel alle', () => {
    router.push('/bydel/alle');
    expect(wrapper.find(Bydel).exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('router sends you to bydel sagene', () => {
    router.push('/bydel/sagene');
    expect(wrapper.find(Bydel).exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('router sends you to homepage', () => {
    router.push('/');
    expect(wrapper.find(Home).exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
