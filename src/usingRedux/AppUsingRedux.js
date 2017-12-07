import 'babel-polyfill';
import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './containers/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const AppUsingRedux = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App/>
    </Provider>
  )
;
};
export default AppUsingRedux;
