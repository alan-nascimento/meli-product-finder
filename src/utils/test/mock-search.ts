import faker from 'faker';

import { ProductList } from '@/store/ducks/search/types';
import { InitialState } from '@/utils/helpers';

import { mockProduct } from './mock-product';

export const mockSearch = (): ProductList => ({
  author: {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
  },
  items: [mockProduct(), mockProduct(), mockProduct(), mockProduct()],
  categories: [faker.random.word(), faker.random.word()],
});

export const mockSearchState = (): InitialState<ProductList> => ({
  data: mockSearch(),
  loading: false,
  error: false,
});
