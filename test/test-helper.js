import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'redux';
import {mount} from 'enzyme';

export function createMockStore() {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  return mockStore(initialState);
}

export function mountWithMockStore(component) {
  const store = createMockStore();
  const wrapper = mount((
    <Provider store={store}>
      {component}
    </Provider>
  )).dive();

  return {wrapper, store};
}
