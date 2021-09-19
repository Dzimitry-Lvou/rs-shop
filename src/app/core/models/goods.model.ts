export interface GoodsModel {
  id: string;
  name: string;
  imageUrls: string[];
  availableAmount: number;
  price: number;
  rating: number;
  description: string;
  isInCart: boolean;
  isFavorite: boolean;
  category: string;
  subCategory: string;
}

export const defaultItem: GoodsModel = {
  id: '',
  name: '',
  imageUrls: [],
  availableAmount: 0,
  price: 0,
  rating: 0,
  description: '',
  isInCart: false,
  isFavorite: false,
  category: '',
  subCategory: '',
};
