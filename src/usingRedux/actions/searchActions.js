import {
  SEARCH_REQUEST_STARTED,
  RECIEVE_SEARCH_RESPONSE,
  SEARCH_ERROR
} from './types';

export function fireSearch(searchTerm) {
  return function (dispatch) {
    dispatch(searchRequest(searchTerm));
    fetch('https://spice-prod.appspot.com/v1.1', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        type: 'search',
        filter: {distributorId: 'food.co.il'},
        query: searchTerm
      })
    }).then(r => {
      return r.json();
    }).then(r => {
      dispatch(recieveSearchResponse(searchTerm, r));
    }).catch(e => {
      dispatch(searchError(e, searchTerm));
    });
  };
}
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
