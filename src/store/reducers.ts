import { combineReducers } from 'redux';

import { search } from './ducks';

export type ApplicationState = {
  search: any;
};

const reducers = combineReducers({ search });

export default reducers;
