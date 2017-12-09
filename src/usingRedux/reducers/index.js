import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import dataDisplayReducer from './dataDisplayReducer';

const rootReducer = combineReducers({
  dataDisplay: dataDisplayReducer,
  search: searchReducer
});

export default rootReducer;
