import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateModel } from '../state.model';

export const selectFeatureCategories = createFeatureSelector<StateModel>('categories');

export const selectFeatureUser = createFeatureSelector<StateModel>('user');

export const selectCategories = createSelector(
  selectFeatureCategories,
  (state: StateModel) => state.categories,
);

export const selectUser = createSelector(selectFeatureUser, (state: StateModel) => state.user);
export const selectUserFullName = createSelector(selectFeatureUser, (state: StateModel) => {
  const user = state.user;
  return user ? `${state.user?.firstName} ${state.user?.lastName}` : '';
});
