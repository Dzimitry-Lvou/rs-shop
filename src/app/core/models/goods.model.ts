export interface GoodsModel {
  id: string;
  name: string;
  imageUrls: string[];
  availableAmount: number;
  price: number;
  rating: number;
  description: string;
  isInCart: false;
  isFavorite: false;
  category: string;
  subCategory: string;
}
