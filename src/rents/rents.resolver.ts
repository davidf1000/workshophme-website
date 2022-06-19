import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RentsService } from './rents.service';
import { CreateRentInput } from './dto/create-rent.input';
import { UpdateRentInput } from './dto/update-rent.input';

@Resolver('Rent')
export class RentsResolver {
  constructor(private readonly rentsService: RentsService) {}

  @Mutation('createRent')
  create(@Args('createRentInput') createRentInput: CreateRentInput) {
    return this.rentsService.create(createRentInput);
  }

  @Query('rents')
  findAll() {
    return this.rentsService.findAll();
  }

  @Query('rent')
  findOne(@Args('id') id: number) {
    return this.rentsService.findOne(id);
  }

  @Mutation('updateRent')
  update(@Args('updateRentInput') updateRentInput: UpdateRentInput) {
    return this.rentsService.update(updateRentInput.id, updateRentInput);
  }

  @Mutation('removeRent')
  remove(@Args('id') id: number) {
    return this.rentsService.remove(id);
  }
}
