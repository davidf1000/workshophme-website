export interface CreateRentInput {
  tools: string;
  rentName: string;
  rentNim: string;
  rentPhone: string;
  rentLineId: string;
  organisation: string;
  fromDate: Date;
  expectedReturnDate: Date;
  status: string;
  totalPrice: number;
}

export interface UpdateRentInput {
  id: number;
  rentName: string;
  rentNim: string;
  rentPhone: string;
  rentLineId: string;
  organisation: string;
  fromDate: Date;
  expectedReturnDate: Date;
  status: string;
  totalPrice?: number;
  fine?: number;
  pickupName?: string;
  pickupNim?: string;
  returnName?: string;
  returnNim?: string;
  returnDate?: Date;
}
