import { Action, createReducer, on } from '@ngrx/store';
import { updateCategories, userLogoutSuccess, userUpdateSuccess } from '../actions/card.actions';
import { StateModel } from '../state.model';

export const initialState: StateModel = {
  categories: [],
  user: null,
};

const mainReducer = createReducer(
  initialState,
  on(
    updateCategories,
    (state, { categories }): StateModel => ({
      ...state,
      categories,
    }),
  ),
  on(
    userUpdateSuccess,
    (state, { user }): StateModel => ({
      ...state,
      user,
    }),
  ),
  on(
    userLogoutSuccess,
    (state): StateModel => ({
      ...state,
      user: null,
    }),
  ),
);

export function reducer(state: StateModel, action: Action) {
  return mainReducer(state, action);
}
