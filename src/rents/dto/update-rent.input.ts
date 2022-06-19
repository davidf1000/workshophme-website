import { CreateRentInput } from './create-rent.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateRentInput extends PartialType(CreateRentInput) {
  id: number;
}
