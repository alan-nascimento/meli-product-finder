import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { screen, render } from '@testing-library/react';

import { makeMockStore } from '@/utils/helpers';
import { mockProductState, mockSearchState } from '@/utils/test';

import ProductDetail from './product-detail';

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
        <ProductDetail />
      </RouterContext.Provider>
    </Provider>
  );
};

describe('ProductDetail Component', () => {
  const store = {
    search: mockSearchState(),
    product: mockProductState(),
  };

  it('should start with initial state', () => {
    makeSut(store);

    const input = screen.getByPlaceholderText(
      `Nunca dejes de buscar`
    ) as HTMLInputElement;

    expect(input).toHaveAttribute('value', '');
  });

  it('should if show CircularProgress component if loading is true', async () => {
    makeSut({ ...store, product: { ...store.product, loading: true } });

    const loading = screen.getByTestId('loading');

    expect(loading).toBeTruthy();
  });

  it('should present not found error', () => {
    makeSut({
      ...store,
      product: { ...store.product, data: { item: undefined }, error: true },
    });

    const notFound = screen.getByTestId('not-found-error');

    expect(notFound).toBeTruthy();
  });
});
