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
  createdAt: Date;
  name: string;
  desc: string;
  image: string;
  activated: boolean;
  totalStock: number;
  priceHour: number;
  priceDay: number;
}
