import faker from 'faker';

import * as mockService from '@/services/search';
import { makeMockStore, SimpleAction } from '@/utils/helpers';

import reducer, {
  initialState,
  searchAction,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  searchRequest,
  searchSuccess,
  searchFailure,
} from './search';

jest.mock('@/services/search');

let response;
let INITIAL_STATE;
let store = makeMockStore();

const mockError = (error) => ({ error });
const mockErrorResponse = (data) => () => Promise.reject(mockError(data));

describe('Store: Search', () => {
  describe('Types', () => {
    it(`Type SEARCH_REQUEST is equal ${SEARCH_REQUEST}`, () => {
      expect(SEARCH_REQUEST).toEqual('@app/SEARCH_REQUEST');
    });

    it(`Type SEARCH_SUCCESS is equal ${SEARCH_SUCCESS}`, () => {
      expect(SEARCH_SUCCESS).toEqual('@app/SEARCH_SUCCESS');
    });

    it(`Type SEARCH_FAILURE is equal ${SEARCH_FAILURE}`, () => {
      expect(SEARCH_FAILURE).toEqual('@app/SEARCH_FAILURE');
    });
  });

  describe('Reducers', () => {
    beforeEach(() => {
      INITIAL_STATE = { ...initialState };
    });

    it('should call reducer when `action.type` invalid then return INITIAL_STATE', () => {
      const action: SimpleAction<any> = {
        type: 'NO_EXIST',
        payload: faker.random.objectElement(),
      };
      const result = reducer(undefined, action);
      const expected = INITIAL_STATE;

      expect(result).toEqual(expected);
    });

    it('should call reducer when `SEARCH_REQUEST` then returns the correct state', () => {
      const action: SimpleAction<any> = {
        type: SEARCH_REQUEST,
        payload: faker.random.objectElement(),
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loading: true,
      };

      expect(result).toEqual(expected);
    });

    it('should call reducer when `SEARCH_SUCCESS` then returns the correct state', () => {
      const action: SimpleAction<any> = {
        type: SEARCH_SUCCESS,
        payload: faker.random.objectElement(),
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        data: action.payload,
        loading: false,
      };

      expect(result).toEqual(expected);
    });

    it('should call reducer when `SEARCH_FAILURE` then returns the correct state', () => {
      const action: SimpleAction<any> = {
        type: SEARCH_FAILURE,
        payload: faker.random.objectElement(),
      };
      const result = reducer(undefined, action);

      const expected = {
        ...INITIAL_STATE,
        error: true,
        loading: false,
      };

      expect(result).toEqual(expected);
    });
  });

  describe('Actions', () => {
    beforeEach(() => {
      response = {};
      store.clearActions();
    });

    it('should call getExamAction with server data on success', () => {
      const searchSpy = jest.spyOn(mockService, 'search');

      store = makeMockStore();

      const expected = [searchRequest(), searchSuccess(response)];
      const action: any = searchAction(faker.random.uuid());

      return store.dispatch(action).then(() => {
        const actual = store.getActions();

        expect(expected).toEqual(actual);
        expect(searchSpy).toHaveBeenCalledTimes(1);
      });
    });

    it('should call getExamAction with server data on error', () => {
      jest
        .spyOn(mockService, 'search')
        .mockImplementation(mockErrorResponse(response));

      store = makeMockStore();
      const expected = [searchRequest(), searchFailure(response)];

      const action: any = searchAction(faker.random.uuid());

      return store.dispatch(action).then(() => {
        const actual = store.getActions();

        expect(actual).toEqual(expected);
      });
    });
  });
});
