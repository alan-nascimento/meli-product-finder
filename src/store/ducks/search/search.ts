import produce from 'immer';
import { Dispatch } from 'redux';

import search from '@/services/search';
import {
  errorMessage,
  ErrorMessage,
  simpleAction,
  SimpleAction,
  makeInitialState,
} from '@/utils/helpers';

import { ProductList } from './types';

const SEARCH_REQUEST = '@app/SEARCH_REQUEST';
const SEARCH_SUCCESS = '@app/SEARCH_SUCCESS';
const SEARCH_FAILURE = '@app/SEARCH_FAILURE';

const initialState = makeInitialState<ProductList | ErrorMessage>({
  categories: [],
  items: [],
});

export default function reducer(
  state = initialState,
  action: SimpleAction<ErrorMessage>
): any {
  return produce(state, (draft) => {
    switch (action.type) {
      case SEARCH_REQUEST: {
        draft.loading = true;
        break;
      }
      case SEARCH_SUCCESS: {
        draft.data = action.payload;
        draft.loading = false;
        break;
      }
      case SEARCH_FAILURE: {
        draft.error = {
          message: action.payload.message,
          status: action.payload.status,
        };
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

const searchRequest = simpleAction(SEARCH_REQUEST);
const searchSuccess = simpleAction(SEARCH_SUCCESS);
const searchFailure = simpleAction(SEARCH_FAILURE);

export const searchAction = (query: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(searchRequest());

  try {
    const payload = await search(query);

    dispatch(searchSuccess(payload));
  } catch (error) {
    const err = errorMessage(error);
    dispatch(searchFailure(err));
  }
};
