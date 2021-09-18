import { createAction, props } from '@ngrx/store';
import { CategoryModel } from 'src/app/core/models/category.model';
import { UserModel } from 'src/app/core/models/user.model';

export const loadCategories = createAction('[Header] load categories');
export const updateCategories = createAction(
  '[Categories API] update categories',
  props<{ categories: CategoryModel[] }>(),
);

export const loginUser = createAction('[Auth] login user');

export const updateUser = createAction('[Auth] update user');
export const userUpdateSuccess = createAction(
  '[User API] user update success',
  props<{ user: UserModel }>(),
);

export const logoutUser = createAction('[Auth] logout user');
export const userLogoutSuccess = createAction('[Auth] user logout success');
