import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { screen, render } from '@testing-library/react';

import { makeMockStore } from '@/utils/helpers';

import Home from './home';

const makeSut = () => {
  const store = { search: { loading: false } };

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
  it('should start with initial state', () => {
    makeSut();

    const input = screen.getByPlaceholderText(
      `Nunca dejes de buscar`
    ) as HTMLInputElement;

    expect(input).toHaveAttribute('value', '');
  });
});
