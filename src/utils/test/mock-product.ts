import faker from 'faker';

import { Product } from '@/store/ducks/search/types';

export const mockProduct = (): Product => ({
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  price: {
    currency: faker.finance.currencyCode(),
    amount: faker.random.number(),
    decimals: faker.random.number(2),
  },
  condition: faker.random.word(),
  sold_quantity: faker.random.number(),
  picture: faker.internet.url(),
  description: faker.commerce.productDescription(),
  free_shipping: faker.random.boolean(),
  state: faker.address.state(),
});
