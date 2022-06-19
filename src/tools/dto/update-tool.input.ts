import { CreateToolInput } from './create-tool.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateToolInput extends PartialType(CreateToolInput) {
  id: number;
}
