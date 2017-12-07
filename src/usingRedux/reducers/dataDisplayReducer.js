import * as ACTION from '../actions/types';
export function dataDisplayReducer(state = {filter: ''}, reduxAction) {
  switch (reduxAction.type) {
    case ACTION.SET_FILTER: {
      return {filter: reduxAction.payload};
    }
    default:
      return state;
  }
}
