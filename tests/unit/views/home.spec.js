import { mount } from '@vue/test-utils';
import Home from '../../../src/views/Home.vue';

describe('Home', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(Home);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('Renders home-component and finds h1 with forside', () => {
    expect(wrapper.find('h1').is('h1')).toBe(true);
  });

  test('Home renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
