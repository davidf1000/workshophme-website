export interface CreateToolInput {
  name: string;
  image: string;
  activated: boolean;
  totalStock: number;
  priceHour: number;
  priceDay: number;
}

export interface UpdateToolInput extends CreateToolInput {
  id: number;
}
