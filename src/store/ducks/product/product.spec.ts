import faker from 'faker';

import * as mockService from '@/services/product';
import { makeMockStore, SimpleAction } from '@/utils/helpers';

import reducer, {
  initialState,
  getProductAction,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  getProductRequest,
  getProductSuccess,
  getProductFailure,
} from './product';

jest.mock('@/services/product');

let response;
let INITIAL_STATE;
let store = makeMockStore();

const mockError = (error) => ({ error });
const mockErrorResponse = (data) => () => Promise.reject(mockError(data));

describe('Store: GetProduct', () => {
  describe('Types', () => {
    it(`Type GET_PRODUCT_REQUEST is equal ${GET_PRODUCT_REQUEST}`, () => {
      expect(GET_PRODUCT_REQUEST).toEqual('@app/GET_PRODUCT_REQUEST');
    });

    it(`Type GET_PRODUCT_SUCCESS is equal ${GET_PRODUCT_SUCCESS}`, () => {
      expect(GET_PRODUCT_SUCCESS).toEqual('@app/GET_PRODUCT_SUCCESS');
    });

    it(`Type GET_PRODUCT_FAILURE is equal ${GET_PRODUCT_FAILURE}`, () => {
      expect(GET_PRODUCT_FAILURE).toEqual('@app/GET_PRODUCT_FAILURE');
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

    it('should call reducer when `GET_PRODUCT_REQUEST` then returns the correct state', () => {
      const action: SimpleAction<any> = {
        type: GET_PRODUCT_REQUEST,
        payload: faker.random.objectElement(),
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loading: true,
      };

      expect(result).toEqual(expected);
    });

    it('should call reducer when `GET_PRODUCT_SUCCESS` then returns the correct state', () => {
      const action: SimpleAction<any> = {
        type: GET_PRODUCT_SUCCESS,
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

    it('should call reducer when `GET_PRODUCT_FAILURE` then returns the correct state', () => {
      const action: SimpleAction<any> = {
        type: GET_PRODUCT_FAILURE,
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
      const getProductSpy = jest.spyOn(mockService, 'getProduct');

      store = makeMockStore();

      const expected = [getProductRequest(), getProductSuccess(response)];
      const action: any = getProductAction(faker.random.uuid());

      return store.dispatch(action).then(() => {
        const actual = store.getActions();

        expect(expected).toEqual(actual);
        expect(getProductSpy).toHaveBeenCalledTimes(1);
      });
    });

    it('should call getExamAction with server data on error', () => {
      jest
        .spyOn(mockService, 'getProduct')
        .mockImplementation(mockErrorResponse(response));

      store = makeMockStore();
      const expected = [getProductRequest(), getProductFailure(response)];

      const action: any = getProductAction(faker.random.uuid());

      return store.dispatch(action).then(() => {
        const actual = store.getActions();

        expect(actual).toEqual(expected);
      });
    });
  });
});
