import { Injectable } from '@nestjs/common';
import { CreateRentInput } from './dto/create-rent.input';
import { UpdateRentInput } from './dto/update-rent.input';

@Injectable()
export class RentsService {
  create(createRentInput: CreateRentInput) {
    return 'This action adds a new rent';
  }

  findAll() {
    return `This action returns all rents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rent`;
  }

  update(id: number, updateRentInput: UpdateRentInput) {
    return `This action updates a #${id} rent`;
  }

  remove(id: number) {
    return `This action removes a #${id} rent`;
  }
}
