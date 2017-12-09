import * as ACTION from '../actions/types';
const DEFAULT_STATE = {
  searchTerm: '',
  searchResults: [],
  searchInProgress: false,
};
export default function searchReducer(state = DEFAULT_STATE, reduxAction) {
  // TODO: use thunk to do fetch
  switch (reduxAction.type) {
    case ACTION.SEARCH_REQUEST: {
      return {
        searchTerm: reduxAction.payload,
        searchResults: [],
        searchInProgress: true
      };
    }
    default:
      return state;
  }
}
