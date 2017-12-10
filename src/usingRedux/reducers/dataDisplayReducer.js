import * as ACTION from '../actions/types';
const DEFAULT_STATE = {
  filter: '',
  showStaticData: false
};

export default function dataDisplayReducer(state = DEFAULT_STATE, reduxAction) {
  switch (reduxAction.type) {
    case ACTION.SET_FILTER: {
      return Object.assign({}, state, {filter: reduxAction.payload});
    }
    case ACTION.SET_SHOW_STATIC_DATA: {
      return Object.assign({}, state, {showStaticData: reduxAction.payload});
    }
    default:
      return state;
  }
}
