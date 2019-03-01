import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import router from './router';

import districts from './config/geoData/districts';
import bydeler from './config/allDistricts';

Vue.use(Vuex);

export const state = {
  compareDistricts: false,
  districts: [],
  districtsGeo: districts,
};

export const getters = {
  geoDistricts: state => {
    if (!state.compareDistricts && state.districts.length !== 0) {
      return { ...state.districtsGeo[`${bydeler.find(district => district.key === state.districts[0]).uri}`] };
    } else if (state.districts[0] === 'alle') {
      return { ...state.districtsGeo.oslo };
    }

    const features = state.districts.map(id =>
      state.districtsGeo.oslo.features.find(district => district.properties.id === parseInt(id))
    );

    return {
      ...state.districtsGeo.oslo,
      features,
    };
  },
};

export const mutations = {
  ADD_DISTRICT(state, payload) {
    state.compareDistricts = true;
    state.districts = payload;
  },
  SELECT_DISTRICT(state, payload) {
    state.compareDistricts = false;
    state.districts = payload;
  },
  CLEAN_STATE(state) {
    state.compareDistricts = false;
    state.districts = [];
    state.districtsGeo = districts;
  },
};

export const actions = {
  addDistrict({ commit }, payload) {
    const districts = payload.district.split('-');
    if (districts.length === 1) {
      if (districts[0] === 'alle') {
        commit('ADD_DISTRICT', districts);
      } else {
        const districtValue = bydeler.find(district => district.uri === districts[0]);
        const districtKey = bydeler.find(district => district.key === districts[0]);
        districtValue === undefined
          ? commit('ADD_DISTRICT', [districtKey.key])
          : commit('SELECT_DISTRICT', [districtValue.key]);
      }
    } else {
      commit('ADD_DISTRICT', districts);
    }

    if (payload.pushRoute) {
      router.currentRoute.params.topic === undefined
        ? router.push({ name: 'District', params: { district: districts.join('-') } })
        : router.push({
            name: 'Topic',
            params: { district: districts.join('-'), topic: router.currentRoute.params.topic },
          });
    }
  },
  cleanState({ commit }) {
    commit('CLEAN_STATE');
  },
};

export const storeStructure = {
  strict: true,
  state,
  getters,
  mutations,
  actions,
};

const store = new Store(storeStructure);

export default store;
