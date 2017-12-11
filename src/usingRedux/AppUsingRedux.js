import 'babel-polyfill';
import React from 'react';

import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';

import App from './containers/App';
import reducers from './reducers';

const loggerMiddleware = createLogger();
const createAppStore = () => {
  return createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
};

export {createAppStore}; // for testing

const store = createAppStore();
const AppUsingRedux = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
};
export default AppUsingRedux;
