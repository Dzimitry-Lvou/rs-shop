import { GoodsModel } from './goods.model';

export interface UserModel {
  firstName: string;
  lastName: string;
  cart: GoodsModel[];
  favorites: GoodsModel[];
  orders: [];
}
