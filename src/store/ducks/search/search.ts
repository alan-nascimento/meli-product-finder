import produce from 'immer';
import { Dispatch } from 'redux';

import { search } from '@/services/search';
import { simpleAction, SimpleAction, makeInitialState } from '@/utils/helpers';

import { ProductList } from './types';

export const SEARCH_REQUEST = '@app/SEARCH_REQUEST';
export const SEARCH_SUCCESS = '@app/SEARCH_SUCCESS';
export const SEARCH_FAILURE = '@app/SEARCH_FAILURE';

export const initialState = makeInitialState<ProductList>({
  categories: [],
  items: [],
});

export default function reducer(
  state = initialState,
  action: SimpleAction<ProductList>
): any {
  return produce(state, (draft) => {
    switch (action.type) {
      case SEARCH_REQUEST: {
        draft.error = false;
        draft.loading = true;
        break;
      }
      case SEARCH_SUCCESS: {
        draft.data = action.payload;
        draft.loading = false;
        break;
      }
      case SEARCH_FAILURE: {
        draft.error = true;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export const searchRequest = simpleAction(SEARCH_REQUEST);
export const searchSuccess = simpleAction(SEARCH_SUCCESS);
export const searchFailure = simpleAction(SEARCH_FAILURE);

export const searchAction = (query: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(searchRequest());

  try {
    const payload = await search(query);

    dispatch(searchSuccess(payload));
  } catch {
    dispatch(searchFailure());
  }
};
