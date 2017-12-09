import {SET_FILTER, SEARCH_REQUEST} from './types';
export function setFilterActionCreator(filterString) {
  return {
    type: SET_FILTER,
    payload: filterString
  };
}

export function fireSearchActionCreator(searchTerm) {
  return {
    type: SEARCH_REQUEST,
    payload: searchTerm
  };
}
