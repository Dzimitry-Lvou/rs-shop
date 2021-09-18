import { CategoryModel } from '../core/models/category.model';
import { UserModel } from '../core/models/user.model';

export interface StateModel {
  categories: CategoryModel[];
  user: UserModel | null;
}
