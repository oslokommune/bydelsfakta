import allDistricts from '../config/allDistricts';
import { topics } from '../config/topics';

export const getDistrictName = (uri) => allDistricts.find((district) => district.uri === uri).value;

export const getHumanReadableTopic = (id) => (topics[id] ? topics[id].text : '');
