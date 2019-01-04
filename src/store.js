import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    selectedBydel: [],
  },
  debug,
  mutations: {
    SET_SELECTED_BYDEL: (state, { selectedBydel }) => {
      const newState = state;
      newState.selectedBydel = selectedBydel;
    },
  },
  actions: {
    SET_SELECTED_BYDEL: ({ commit }, { selectedBydel }) => {
      commit('SET_SELECTED_BYDEL', { selectedBydel });
    },
  },
});
