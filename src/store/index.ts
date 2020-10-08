import thunk from 'redux-thunk';
import { applyMiddleware, createStore, Store } from 'redux';

import reducers from './reducers';

const store = (initialStore = {}): Store => {
  return createStore(reducers, initialStore, applyMiddleware(thunk));
};

export { store };
