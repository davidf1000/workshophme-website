import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateRentInput, UpdateRentInput } from 'src/graphql';
import { RentsService } from './rents.service';

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
    return this.rentsService.update(updateRentInput);
  }

  @Mutation('removeRent')
  remove(@Args('id') id: number) {
    return this.rentsService.remove(id);
  }
}
