import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateModel } from '../state.model';

export const selectCategories = createFeatureSelector<StateModel>('categories');

export const getCategories = createSelector(
  selectCategories,
  (state: StateModel) => state.categories,
);
