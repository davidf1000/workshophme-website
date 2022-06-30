export interface StepRentProps {
  step: number;
}

export interface RentFormData {
  name: string;
  nim: string;
  organisation: string;
  phone: string;
  line: string;
  pickupDate: string;
  pickupHour: number;
  pickupMinute: number;
  returnDate: string;
  returnHour: number;
  returnMinute: number;
  tools: ToolRent[];
  totalPrice: number;
}

export interface ToolRent {
  toolId: number;
  quantity: number;
}

export interface StepProps {
  formData: RentFormData;
  setFormData: Function;
  error: RentFormError;
  setError: Function;
}

export interface RentFormError {
  name: string;
  nim: string;
  organisation: string;
  phone: string;
  line: string;
  pickupDate: string;
  returnDate: string;
  tools: string;
}

export interface Tool {
  id: number;
  name: string;
  image: string;
  activated: boolean;
  totalStock: number;
  priceHour: number;
  priceDay: number;
}

export interface Admin {
  id: number;
  createdAt?: Date;
  email: string;
  name: string;
  rents?: Rent[];
}

export interface Rent {
  id: number;
  createdAt?: Date;
  tools: ToolRent[];
  rentName: string;
  rentNim: string;
  rentPhone: string;
  rentLineId: string;
  organisation: string;
  fromDate: Date;
  expectedReturnDate: Date;
  totalPrice: number;
  status: string;
  fine?: number;
  pickupName?: string;
  pickupNim?: string;
  returnName?: string;
  returnNim?: string;
}

