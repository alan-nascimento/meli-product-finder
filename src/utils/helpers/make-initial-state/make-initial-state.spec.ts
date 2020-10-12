import faker from 'faker';

import { makeInitialState } from './make-initial-state';

describe('Helpers: makeInitialState', () => {
  it('should return the initalState with data and loading', () => {
    const arg = { data: { [faker.random.word()]: faker.random.word() } };
    const initialState = makeInitialState(arg);

    const expectedInitialState = {
      data: arg,
      error: false,
      loading: false,
    };

    expect(initialState).toEqual(expectedInitialState);
  });

  it('should return the initalState with prop equal default params', () => {
    const initialState = makeInitialState({});

    const expectedInitialState = {
      data: {},
      error: false,
      loading: false,
    };

    expect(initialState).toEqual(expectedInitialState);
  });
});
