import { Action, createReducer, on } from '@ngrx/store';
import { updateCategories } from '../actions/card.actions';
import { StateModel } from '../state.model';

export const initialState: StateModel = {
  categories: [],
};

const reducer = createReducer(
  initialState,
  on(updateCategories, (state, { categories }) => ({
    ...state,
    categories,
  })),
);

export function categoriesReducer(state: StateModel, action: Action) {
  return reducer(state, action);
}
