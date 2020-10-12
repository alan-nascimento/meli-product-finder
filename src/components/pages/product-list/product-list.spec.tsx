import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { screen, render } from '@testing-library/react';

import { makeMockStore } from '@/utils/helpers';
import { mockSearchState } from '@/utils/test';

import ProductList from './product-list';

const makeSut = (store) => {
  const router: any = {
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
  };

  render(
    <Provider store={makeMockStore(store)}>
      <RouterContext.Provider value={router}>
        <ProductList />
      </RouterContext.Provider>
    </Provider>
  );
};

describe('ProductList Component', () => {
  const store = {
    search: mockSearchState(),
    product: {
      data: {
        item: {},
      },
      loading: false,
      error: false,
    },
  };

  it('should start with initial state', () => {
    makeSut(store);

    const input = screen.getByPlaceholderText(
      `Nunca dejes de buscar`
    ) as HTMLInputElement;

    expect(input).toHaveAttribute('value', '');
  });

  it('should if show CircularProgress component if loading is true', async () => {
    makeSut({ ...store, search: { ...store.search, loading: true } });

    const loading = screen.getByTestId('loading');

    expect(loading).toBeTruthy();
  });

  it('should present not found error', () => {
    makeSut({ ...store, search: { ...store.search, data: { items: [] } } });

    const notFound = screen.getByTestId('not-found-error');

    expect(notFound).toBeTruthy();
  });

  it('should list the correct categories', () => {
    makeSut(store);

    const breadcrumbs = screen.getByTestId('breadcrumbs');

    expect(breadcrumbs).toHaveTextContent(store.search.data.categories[0]);
    expect(breadcrumbs).toHaveTextContent(store.search.data.categories[1]);
  });

  it('should list the products with correct values', () => {
    makeSut(store);

    const {
      search: { data: search },
    } = store;

    const productList = screen.getByTestId('product-list');

    const price = `${search.items[0].price.amount}`.slice(0, 2);
    const priceAfterPoint = `${search.items[0].price.amount}`.slice(2, 5);

    expect(productList).toHaveTextContent(`$ ${price}.${priceAfterPoint}00`);
    expect(productList).toHaveTextContent(search.items[0].title);
    expect(productList).toHaveTextContent(search.items[0].state);
  });
});
