import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/views/Home.vue';

describe('HelloWorld.vue', () => {
  it('renders Forside when nothing is passed', () => {
    const msg = 'Forside';
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch(msg);
  });
});
