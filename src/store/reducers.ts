import { combineReducers } from 'redux';

import { InitialState } from '@/utils/helpers';

import { ProductList } from './ducks/search/types';
import { ProductDetail } from './ducks/product/types';
import { search, product } from './ducks';

export type ApplicationState = {
  search: InitialState<ProductList>;
  product: InitialState<ProductDetail>;
};

const reducers = combineReducers({ search, product });

export default reducers;
