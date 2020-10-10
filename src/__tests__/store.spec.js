import { mutations, actions, getters } from '../store';
import districts from '../config/geoData/districts';
import { allDistricts, oneDistrict, oneDistrictCompare } from '../../tests/config/expectedDistrictResults';

const {
  ADD_DISTRICT,
  SELECT_DISTRICT,
  CLEAN_STATE,
  SET_IE11_COMPATIBILITY,
  SET_MENU_IS_OPEN,
  SET_NAVIGATION_IS_OPEN,
  SET_PRODUCTION_MODE,
  SET_TOUCH_DEVICE,
} = mutations;
const {
  addDistrict,
  cleanState,
  setIE11Compatibility,
  setMenuIsOpen,
  setNavigationIsOpen,
  setProductionMode,
  setTouchDevice,
} = actions;
const { geoDistricts } = getters;

describe('mutations', () => {
  it('ADD_DISTRICT', () => {
    const state = {
      compareDistricts: false,
      districts: [],
    };

    ADD_DISTRICT(state, ['01']);

    expect(state.compareDistricts).toEqual(true);
    expect(state.districts.length).toEqual(1);
    expect(state.districts[0]).toEqual('01');
  });

  it('SELECT_DISTRICT', () => {
    const state = {
      compareDistricts: true,
      districts: ['01', '02', '03'],
    };

    expect(state.districts.length).toEqual(3);

    SELECT_DISTRICT(state, ['01']);

    expect(state.compareDistricts).toEqual(false);
    expect(state.districts.length).toEqual(1);
    expect(state.districts[0]).toEqual('01');
  });

  it('CLEAN_STATE', () => {
    const state = {
      compareDistricts: true,
      districts: ['01', '02'],
    };

    expect(state.compareDistricts).toEqual(true);
    expect(state.districts.length).toEqual(2);

    CLEAN_STATE(state);

    expect(state.compareDistricts).toEqual(false);
    expect(state.districts.length).toEqual(0);
  });

  it('SET_MENU_IS_OPEN', () => {
    const state = {
      menuIsOpen: false,
    };

    expect(state.menuIsOpen).toEqual(false);

    SET_MENU_IS_OPEN(state, true);

    expect(state.menuIsOpen).toEqual(true);
  });

  it('SET_NAVIGATION_IS_OPEN', () => {
    const state = {
      navigationIsOpen: false,
    };

    expect(state.navigationIsOpen).toEqual(false);

    SET_NAVIGATION_IS_OPEN(state, true);

    expect(state.navigationIsOpen).toEqual(true);
  });

  it('SET_TOUCH_DEVICE', () => {
    const state = {
      isTouchDevice: false,
    };

    expect(state.isTouchDevice).toEqual(false);

    SET_TOUCH_DEVICE(state, true);

    expect(state.isTouchDevice).toEqual(true);
  });

  it('SET_IE11_COMPATIBILITY', () => {
    const state = {
      ie11: false,
    };

    expect(state.ie11).toEqual(false);

    SET_IE11_COMPATIBILITY(state, true);

    expect(state.ie11).toEqual(true);
  });

  it('SET_PRODUCTION_MODE to prod', () => {
    const state = {
      productionMode: null,
    };

    expect(state.productionMode).toEqual(null);

    SET_PRODUCTION_MODE(state, 'prod');

    expect(state.productionMode).toEqual(true);
  });

  it('SET_PRODUCTION_MODE to dev', () => {
    const state = {
      productionMode: null,
    };

    expect(state.productionMode).toEqual(null);

    SET_PRODUCTION_MODE(state, 'dev');

    expect(state.productionMode).toEqual(false);
  });

  it('SET_PRODUCTION_MODE to null', () => {
    const state = {
      productionMode: true,
    };

    expect(state.productionMode).toEqual(true);

    SET_PRODUCTION_MODE(state, '');

    expect(state.productionMode).toEqual(null);
  });
});

describe('actions', () => {
  let commit;
  let state;
  beforeEach(() => {
    commit = jest.fn();
    state = {};
  });

  it('addDistrict with multiple districts', () => {
    addDistrict({ commit, state }, { district: '01-02-03-04' });

    expect(commit).toHaveBeenCalledWith('ADD_DISTRICT', ['01', '02', '03', '04']);
  });

  it('addDistrict with only one district', () => {
    addDistrict({ commit, state }, { district: 'sagene' });

    expect(commit).toHaveBeenCalledWith('SELECT_DISTRICT', ['03']);
  });

  it('addDistrict with only one district from checkbox', () => {
    addDistrict({ commit, state }, { district: '01' });

    expect(commit).toHaveBeenCalledWith('ADD_DISTRICT', ['01']);
  });

  it('addDistrict with alle as a district', () => {
    addDistrict({ commit, state }, { district: 'alle' });

    expect(commit).toHaveBeenCalledWith('ADD_DISTRICT', ['alle']);
  });

  it('addDistrict with alle as a district with pushRoute true', () => {
    addDistrict({ commit, state }, { district: 'alle', pushRoute: true });

    expect(commit).toHaveBeenCalledWith('ADD_DISTRICT', ['alle']);
  });

  it('cleanState', () => {
    cleanState({ commit, state });
    expect(commit).toHaveBeenCalledWith('CLEAN_STATE');
  });

  it('Change navigation to open', () => {
    setNavigationIsOpen({ commit, state }, true);
    expect(commit).toHaveBeenCalledWith('SET_NAVIGATION_IS_OPEN', true);
  });

  it('Change menu to open', () => {
    setMenuIsOpen({ commit, state }, true);
    expect(commit).toHaveBeenCalledWith('SET_MENU_IS_OPEN', true);
  });

  it('set compabiliity to ie11', () => {
    setIE11Compatibility({ commit, state }, true);
    expect(commit).toHaveBeenCalledWith('SET_IE11_COMPATIBILITY', true);
  });

  it('set production mode to prod', () => {
    setProductionMode({ commit, state }, 'prod');
    expect(commit).toHaveBeenCalledWith('SET_PRODUCTION_MODE', 'prod');
  });

  it('set touch device', () => {
    setTouchDevice({ commit, state }, true);
    expect(commit).toHaveBeenCalledWith('SET_TOUCH_DEVICE', true);
  });
});

describe('getters', () => {
  it('geoDistricts', () => {
    const state = {
      districtsGeo: districts,
      compareDistricts: true,
      districts: ['alle'],
    };

    const result = geoDistricts(state);
    expect(result).toEqual(districts.oslo);
  });

  it('geoDistricts: one district not in compareDistricts mode', () => {
    const state = {
      districtsGeo: districts,
      compareDistricts: false,
      districts: ['01'],
    };

    const result = geoDistricts(state);
    expect(result).toEqual(oneDistrict);
  });

  it('geoDistricts: one district and in compareDistricts mode', () => {
    const state = {
      districtsGeo: districts,
      compareDistricts: true,
      districts: ['15'],
    };

    const result = geoDistricts(state);
    expect(result).toEqual(oneDistrictCompare);
  });

  it('geoDistricts: alle district', () => {
    const state = {
      districtsGeo: districts,
      compareDistricts: true,
      districts: ['alle'],
    };

    const result = geoDistricts(state);
    expect(result).toEqual(allDistricts);
  });
});
