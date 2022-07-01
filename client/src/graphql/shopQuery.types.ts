export interface CreateShopInput {
  title: string;
  imageUrl: string;
  link: string;
  price: number;
}

export interface UpdateShopInput extends CreateShopInput {
  id: number;
}
