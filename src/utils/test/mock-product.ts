import faker from 'faker';

import { InitialState } from '@/utils/helpers';
import { Product, ProductDetail } from '@/store/ducks/search/types';

export const mockProduct = (): Product => ({
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  price: {
    currency: faker.finance.currencyCode(),
    amount: 2200,
    decimals: 0,
  },
  condition: faker.random.word(),
  sold_quantity: faker.random.number(),
  picture: faker.internet.url(),
  description: faker.commerce.productDescription(),
  free_shipping: faker.random.boolean(),
  state: faker.address.state(),
});

export const mockProductDetail = (): ProductDetail => ({
  author: {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
  },
  item: mockProduct(),
});

export const mockProductState = (): InitialState<ProductDetail> => ({
  data: mockProductDetail(),
  loading: false,
  error: false,
});
