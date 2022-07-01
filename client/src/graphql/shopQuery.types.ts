import { Product } from '../components/shop/shop.types';

export interface CreateShopInput {
  title: string;
  imageUrl: string;
  link: string;
  price: number;
}

export interface GetShopResponse {
  shop: Product;
}

export interface GetShopsResponse {
  shops: Product[];
}

export interface UpdateShopInput extends CreateShopInput {
  id: number;
}
