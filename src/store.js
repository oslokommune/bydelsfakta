import Vue from 'vue';
import Vuex from 'vuex';

import districts from './config/geoData/districts';
import bydeler from './config/bydeler';

Vue.use(Vuex);

const initialState = () => {
  return {
    compareDistricts: false,
    districtsValue: [],
    districtsGeo: districts,
    selectedDistricts: [],
  };
};

const state = {
  compareDistricts: false,
  districtsValue: [],
  districtsGeo: districts,
  selectedDistricts: [],
};

const getters = {
  geoDistricts: state => {
    if (!state.compareDistricts && state.districtsValue.length !== 0) {
      return state.districtsGeo[`${bydeler.find(item => item.key === state.districtsValue[0]).uri}`];
    }
    let newGeoData;
    let newGeo = [];
    state.districtsValue.forEach(id =>
      newGeo.push(state.districtsGeo.oslo.features.find(district => district.properties.id === parseInt(id)))
    );
    newGeoData = { ...state.districtsGeo.oslo, features: newGeo };
    return newGeoData;
  },
};

const mutations = {
  ADD_DISTRICT(state, payload) {
    state.compareDistricts = true;
    if (state.districtsValue.find(district => district === payload)) {
      state.districtsValue = state.districtsValue.filter(district => district !== payload);
    } else {
      state.districtsValue.push(payload);
    }
  },
  SELECT_DISTRICT(state, payload) {
    state.compareDistricts = false;
    state.districtsValue = [payload];
  },
  SELECT_COMPARE(state) {
    state.compareDistricts = true;
  },
  CLEAN_STATE(state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key];
    });
  },
};

const actions = {
  addDistrict({ commit }, payload) {
    commit('ADD_DISTRICT', payload);
  },
  selectDistrict({ commit }, payload) {
    commit('SELECT_DISTRICT', payload);
  },
  selectCompare({ commit }) {
    commit('SELECT_COMPARE');
  },
  cleanState({ commit }) {
    commit('CLEAN_STATE');
  },
};

export default new Vuex.Store({ state, getters, mutations, actions });
