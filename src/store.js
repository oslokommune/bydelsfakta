import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

import districts from './config/geoData/districts';
import bydeler from './config/bydeler';

Vue.use(Vuex);

const initialState = () => {
  return {
    compareDistricts: false,
    districts: [],
    districtsGeo: districts,
  };
};

const state = {
  compareDistricts: false,
  districts: [],
  districtsGeo: districts,
};

const getters = {
  geoDistricts: state => {
    if (!state.compareDistricts && state.districts.length !== 0) {
      return { ...state.districtsGeo[`${bydeler.find(item => item.key === state.districts[0]).uri}`] };
    } else if (state.districts[0] === 'alle') {
      return { ...state.districtsGeo.oslo };
    }
    let newGeoData;
    let newGeo = [];
    state.districts.forEach(id =>
      newGeo.push(state.districtsGeo.oslo.features.find(district => district.properties.id === parseInt(id)))
    );
    newGeoData = { ...state.districtsGeo.oslo, features: newGeo };
    return newGeoData;
  },
};

const mutations = {
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

const actions = {
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
      router.currentRoute.params.tema === undefined
        ? router.push({ name: 'Bydel', params: { bydel: districts.join('-') } })
        : router.push({
            name: 'Tema',
            params: { bydel: districts.join('-'), tema: router.currentRoute.params.tema },
          });
    }
  },
  cleanState({ commit }) {
    commit('CLEAN_STATE');
  },
};

export default new Vuex.Store({ state, getters, mutations, actions, strict: true });
