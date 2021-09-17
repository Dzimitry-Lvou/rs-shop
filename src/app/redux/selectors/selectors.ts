import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateModel } from '../state.model';

export const selectCategories = createFeatureSelector<StateModel>('categories');

export const selectUser = createFeatureSelector<StateModel>('user');

export const getCategories = createSelector(
  selectCategories,
  (state: StateModel) => state.categories,
);

export const getUser = createSelector(selectUser, (state: StateModel) => state.user);
