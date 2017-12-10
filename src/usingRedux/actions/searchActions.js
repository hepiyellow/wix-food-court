import {
  SEARCH_REQUEST_STARTED,
  RECIEVE_SEARCH_RESPONSE,
  SEARCH_ERROR
} from './types';


// TODO: Add fetchData action using thunk to do async fetch

export function searchRequest(searchTerm) {
  return {
    type: SEARCH_REQUEST_STARTED,
    payload: searchTerm
  };
}

export function recieveSearchResponse(searchTerm, response) {
  return {
    type: RECIEVE_SEARCH_RESPONSE,
    payload: {searchTerm, response}
  };
}

export function searchError(error, searchTerm) {
  return {
    type: SEARCH_ERROR,
    payload: {error, searchTerm}
  };
}
