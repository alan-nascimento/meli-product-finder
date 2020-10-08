import thunk from 'redux-thunk';
import { applyMiddleware, createStore, Store } from 'redux';

import reducers, { ApplicationState } from './reducers';

const store: Store<ApplicationState> = createStore(
  reducers,
  applyMiddleware(thunk)
);

export { store };
