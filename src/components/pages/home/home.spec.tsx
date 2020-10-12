import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { screen, render } from '@testing-library/react';

import { makeMockStore } from '@/utils/helpers';

import Home from './home';

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
        <Home />
      </RouterContext.Provider>
    </Provider>
  );
};

describe('Home Component', () => {
  const store = { search: { loading: false } };

  it('should start with initial state', () => {
    makeSut(store);

    const input = screen.getByPlaceholderText(
      `Nunca dejes de buscar`
    ) as HTMLInputElement;

    expect(input).toHaveAttribute('value', '');
  });

  it('should if show CircularProgress component if loading is true', async () => {
    makeSut({ search: { loading: true } });

    const loading = screen.getByTestId('loading');

    expect(loading).toBeTruthy();
  });
});
