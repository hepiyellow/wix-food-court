import * as ACTION from '../actions/types';

export const SearchStatus = {
  IDLE: 'IDLE',
  IN_PROGRESS: 'IN_PROGRESS',
  ERROR: 'ERROR',
  COMPLETE: 'COMPLETE'
};

const DEFAULT_STATE = {
  searchTerm: '',
  searchResponse: {
    value: {
      results: []
    }
  },
  searchStatus: {
    status: SearchStatus.IDLE
  }
};

export default function searchReducer(state = DEFAULT_STATE, reduxAction) {
  switch (reduxAction.type) {
    case ACTION.SEARCH_REQUEST_STARTED: {
      return Object.assign({}, state, {
        searchStatus: {
          status: SearchStatus.IN_PROGRESS,
          searchTerm: reduxAction.payload
        }
      });
    }
    case ACTION.RECIEVE_SEARCH_RESPONSE: {
      const {searchTerm, response} = reduxAction.payload;
      return Object.assign({}, state, {
        searchTerm,
        searchResponse: response,
        searchStatus: {
          status: SearchStatus.COMPLETE,
          searchTerm
        }
      });
    }
    case ACTION.SEARCH_ERROR: {
      const {searchTerm, error} = reduxAction.payload;
      return Object.assign({}, state, {
        searchStatus: {
          status: SearchStatus.ERROR,
          searchTerm,
          error,
        }
      });
    }
    default:
      return state;
  }
}
