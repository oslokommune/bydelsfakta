import Vue from 'vue';
import Vuex from 'vuex';

import districts from './config/geoData/districts';
import bydeler from './config/bydeler';

Vue.use(Vuex);

const state = {
  compareDistricts: false,
  districtsValue: [],
  districtsGeo: districts,
  selectedDistricts: [],
};

const getters = {
  geoDistricts: state => {
    let newGeoData = {};
    state.districtsValue.forEach(value => (newGeoData = { ...newGeoData, [value]: districts[value] }));
    console.log(newGeoData);
    return newGeoData;
  },
};

const mutations = {
  ADD_DISTRICT(state, payload) {
    state.districtsValue.push(bydeler.find(item => item.key === payload).uri);
  },
};

const actions = {
  addDistrict({ commit }, payload) {
    commit('ADD_DISTRICT', payload);
  },
};

export default new Vuex.Store({ state, getters, mutations, actions });
