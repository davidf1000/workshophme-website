import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.rentsService.findAll();
  }

  @Query('rent')
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id') id: number) {
    return this.rentsService.findOne(id);
  }

  @Mutation('updateRent')
  @UseGuards(JwtAuthGuard)
  update(@Args('updateRentInput') updateRentInput: UpdateRentInput) {
    return this.rentsService.update(updateRentInput);
  }

  @Mutation('removeRent')
  @UseGuards(JwtAuthGuard)
  remove(@Args('id') id: number) {
    return this.rentsService.remove(id);
  }
}
