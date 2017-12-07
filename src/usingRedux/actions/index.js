import {SET_FILTER} from './types';
export function setFilterActionCreator(filterString) {
  return {
    type: SET_FILTER,
    payload: filterString
  };
}
