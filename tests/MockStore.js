import router from '../src/router';

import districts from '../src/config/geoData/districts';
import allDistricts from '../src/config/allDistricts';

export const state = {
  compareDistricts: false,
  districts: ['01'],
  districtsGeo: districts,
  menuIsOpen: true,
  navigationIsOpen: false,
  isTouchDevice: false,
  ie11: false,
  productionMode: true, // null: development, false: test, true: prod
};

export const getters = {
  geoDistricts: (state) => {
    if (!state.compareDistricts && state.districts.length !== 0) {
      return { ...state.districtsGeo[`${allDistricts.find((district) => district.key === state.districts[0]).uri}`] };
    }
    if (state.districts[0] === 'alle') {
      return { ...state.districtsGeo.oslo };
    }

    const features = state.districts.map((id) =>
      state.districtsGeo.oslo.features.find((district) => district.properties.id === id)
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
    if (payload === 'prod') state.productionMode = true;
    else if (payload === 'dev') state.productionMode = false;
    else state.productionMode = null;
  },
};

export const actions = {
  addDistrict({ commit }, payload) {
    const payloadDistricts = payload.district.split('-');
    if (payloadDistricts.length === 1) {
      if (payloadDistricts[0] === 'alle') {
        commit('ADD_DISTRICT', districts);
      } else {
        const districtValue = allDistricts.find((district) => district.uri === payloadDistricts[0]);
        const districtKey = allDistricts.find((district) => district.key === payloadDistricts[0]);

        if (districtValue === undefined) commit('ADD_DISTRICT', [districtKey.key]);
        else commit('SELECT_DISTRICT', [districtValue.key]);
      }
    } else {
      commit('ADD_DISTRICT', districts);
    }

    if (payload.pushRoute) {
      if (router.currentRoute.value.params.topic === undefined) {
        router.push({ name: 'District', params: { district: districts.join('-') } });
      } else {
        router.push({
          name: 'Topic',
          params: { district: districts.join('-'), topic: router.currentRoute.value.params.topic },
        });
      }
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
};

export const storeStructure = {
  strict: true,
  state,
  getters,
  mutations,
  actions,
};

export default storeStructure;
