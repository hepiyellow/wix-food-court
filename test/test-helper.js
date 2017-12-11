import configureStore from 'redux-mock-store';

export function createMockStore() {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  return mockStore(initialState);
}
