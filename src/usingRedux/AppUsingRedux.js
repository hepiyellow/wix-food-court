import 'babel-polyfill';
import React from 'react';

import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';

import App from './containers/App';
import reducers from './reducers';

const loggerMiddleware = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const AppUsingRedux = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
};
export default AppUsingRedux;
