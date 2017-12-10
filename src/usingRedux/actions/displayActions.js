import {
  SET_FILTER,
  SET_SHOW_STATIC_DATA
} from './types';

export function setFilter(filterString) {
  return {
    type: SET_FILTER,
    payload: filterString
  };
}
export function setShowStaticData(filterString) {
  return {
    type: SET_SHOW_STATIC_DATA,
    payload: filterString
  };
}
