import {combineReducers} from 'redux';
import dataDisplayReducer from './dataDisplayReducer';

const rootReducer = combineReducers({
  dataDisplay: dataDisplayReducer
});

export default rootReducer;
