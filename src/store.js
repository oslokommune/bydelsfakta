import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import router from './router';

import districts from './config/geoData/districts';
import allDistricts from './config/allDistricts';

Vue.use(Vuex);

export const state = {
  compareDistricts: false,
  districts: [],
  districtsGeo: districts,
  menuIsOpen: false,
  navigationIsOpen: false,
  isTouchDevice: false,
  ie11: false,
  contextShowDropdown: false,
  productionMode: null, // null: development, false: test, true: prod
};

export const getters = {
  geoDistricts: state => {
    if (!state.compareDistricts && state.districts.length !== 0) {
      return { ...state.districtsGeo[`${allDistricts.find(district => district.key === state.districts[0]).uri}`] };
    } else if (state.districts[0] === 'alle') {
      return { ...state.districtsGeo.oslo };
    }

    const features = state.districts.map(id =>
      state.districtsGeo.oslo.features.find(district => district.properties.id === id)
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
  SET_MENU_IS_OPEN(state, payload) {
    state.menuIsOpen = payload;
  },
  SET_NAVIGATION_IS_OPEN(state, payload) {
    state.navigationIsOpen = payload;
  },
  SET_TOUCH_DEVICE(state, payload) {
    state.isTouchDevice = payload;
  },
  SET_IE11_COMPATIBILITY(state, payload) {
    state.ie11 = payload;
  },
  SET_PRODUCTION_MODE(state, payload) {
    state.productionMode = payload === 'prod' ? true : payload === 'dev' ? false : null;
  },
  SET_CONTEXT_DROPDOWN(state, payload) {
    state.contextShowDropdown = payload;
  },
};

export const actions = {
  addDistrict({ commit }, payload) {
    const districts = payload.district.split('-');
    if (districts.length === 1) {
      if (districts[0] === 'alle') {
        commit('ADD_DISTRICT', districts);
      } else {
        const districtValue = allDistricts.find(district => district.uri === districts[0]);
        const districtKey = allDistricts.find(district => district.key === districts[0]);
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

  setTouchDevice({ commit }, payload) {
    commit('SET_TOUCH_DEVICE', payload);
  },
  cleanState({ commit }) {
    commit('CLEAN_STATE');
  },
  setMenuIsOpen({ commit }, payload) {
    commit('SET_MENU_IS_OPEN', payload);
  },
  setNavigationIsOpen({ commit }, payload) {
    commit('SET_NAVIGATION_IS_OPEN', payload);
  },
  setIE11Compatibility({ commit }, payload) {
    commit('SET_IE11_COMPATIBILITY', payload);
  },
  setProductionMode({ commit }, payload) {
    commit('SET_PRODUCTION_MODE', payload);
  },
  setContextShowDropdown({ commit }, payload) {
    commit('SET_CONTEXT_DROPWDOWN', payload);
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
