import produce from 'immer';
import { Dispatch } from 'redux';

import getProduct from '@/services/product';
import { simpleAction, SimpleAction, makeInitialState } from '@/utils/helpers';

import { ProductDetail } from './types';

const GET_PRODUCT_REQUEST = '@app/GET_PRODUCT_REQUEST';
const GET_PRODUCT_SUCCESS = '@app/GET_PRODUCT_SUCCESS';
const GET_PRODUCT_FAILURE = '@app/GET_PRODUCT_FAILURE';

const initialState = makeInitialState<ProductDetail>({
  categories: [],
  items: [],
});

export default function reducer(
  state = initialState,
  action: SimpleAction<ProductDetail>
): any {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_PRODUCT_REQUEST: {
        draft.error = false;
        draft.loading = true;
        break;
      }
      case GET_PRODUCT_SUCCESS: {
        draft.data = action.payload;
        draft.loading = false;
        break;
      }
      case GET_PRODUCT_FAILURE: {
        draft.error = true;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

const getProductRequest = simpleAction(GET_PRODUCT_REQUEST);
const getProductSuccess = simpleAction(GET_PRODUCT_SUCCESS);
const getProductFailure = simpleAction(GET_PRODUCT_FAILURE);

export const getProductAction = (id: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(getProductRequest());

  try {
    const payload = await getProduct(id);

    dispatch(getProductSuccess(payload));
  } catch {
    dispatch(getProductFailure());
  }
};
