import thunk from 'redux-thunk';
import { applyMiddleware, createStore, Store } from 'redux';

import reducers from './reducers';

const makeStore = (initialStore = {}): Store =>
  createStore(reducers, initialStore, applyMiddleware(thunk));

export { makeStore };
