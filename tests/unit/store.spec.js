import sinon from 'sinon';
import { mutations, actions, getters } from '../../src/store';
import districts from '../../src/config/geoData/districts';
import { allDistricts, oneDistrict, oneDistrictCompare } from '../config/expectedDistrictResults';

const { ADD_DISTRICT, SELECT_DISTRICT, CLEAN_STATE } = mutations;
const { addDistrict, cleanState } = actions;
const { geoDistricts } = getters;

describe('mutations', () => {
  it('ADD_DISTRICT', () => {
    const state = {
      compareDistricts: false,
      districts: [],
    };

    ADD_DISTRICT(state, ['1']);

    expect(state.compareDistricts).toEqual(true);
    expect(state.districts.length).toEqual(1);
    expect(state.districts[0]).toEqual('1');
  });

  it('SELECT_DISTRICT', () => {
    const state = {
      compareDistricts: true,
      districts: ['1', '2', '3'],
    };

    expect(state.districts.length).toEqual(3);

    SELECT_DISTRICT(state, ['1']);

    expect(state.compareDistricts).toEqual(false);
    expect(state.districts.length).toEqual(1);
    expect(state.districts[0]).toEqual('1');
  });

  it('CLEAN_STATE', () => {
    const state = {
      compareDistricts: true,
      districts: ['1', '2'],
    };

    expect(state.compareDistricts).toEqual(true);
    expect(state.districts.length).toEqual(2);

    CLEAN_STATE(state);

    expect(state.compareDistricts).toEqual(false);
    expect(state.districts.length).toEqual(0);
  });
});

describe('actions', () => {
  let commit;
  let state;
  beforeEach(() => {
    commit = sinon.spy();
    state = {};
  });

  it('addDistrict with multiple districts', () => {
    addDistrict({ commit, state }, { district: '1-2-3-4' });

    expect(commit.args).toEqual([['ADD_DISTRICT', ['1', '2', '3', '4']]]);
  });

  it('addDistrict with only one district', () => {
    addDistrict({ commit, state }, { district: 'sagene' });

    expect(commit.args).toEqual([['SELECT_DISTRICT', ['3']]]);
  });

  it('addDistrict with only one district from checkbox', () => {
    addDistrict({ commit, state }, { district: '1' });

    expect(commit.args).toEqual([['ADD_DISTRICT', ['1']]]);
  });

  it('addDistrict with alle as a district', () => {
    addDistrict({ commit, state }, { district: 'alle' });

    expect(commit.args).toEqual([['ADD_DISTRICT', ['alle']]]);
  });

  it('addDistrict with alle as a district with pushRoute true', () => {
    addDistrict({ commit, state }, { district: 'alle', pushRoute: true });

    expect(commit.args).toEqual([['ADD_DISTRICT', ['alle']]]);
  });

  it('cleanState', () => {
    cleanState({ commit, state });
    expect(commit.args).toEqual([['CLEAN_STATE']]);
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
      districts: ['1'],
    };

    const result = geoDistricts(state);
    expect(result).toEqual(oneDistrict);
  });

  it('geoDistricts: one district and in compareDistricts mode', () => {
    const state = {
      districtsGeo: districts,
      compareDistricts: true,
      districts: ['1'],
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
