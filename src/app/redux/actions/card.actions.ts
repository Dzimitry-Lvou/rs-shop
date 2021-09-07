import { createAction, props } from '@ngrx/store';
import { CategoryModel } from 'src/app/core/models/category.model';

export const loadCategories = createAction('[Header] load categories');
export const updateCategories = createAction(
  '[Categories API] update categories',
  props<{ categories: CategoryModel[] }>(),
);
