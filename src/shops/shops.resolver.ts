import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateShopInput, UpdateShopInput } from 'src/graphql';
import { ShopsService } from './shops.service';

@Resolver('Shop')
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Mutation('createShop')
  @UseGuards(JwtAuthGuard)
  create(@Args('createShopInput') createShopInput: CreateShopInput) {
    return this.shopsService.create(createShopInput);
  }

  @Query('shops')
  findAll() {
    return this.shopsService.findAll();
  }

  @Query('shop')
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id') id: number) {
    return this.shopsService.findOne(id);
  }

  @Mutation('updateShop')
  @UseGuards(JwtAuthGuard)
  update(@Args('updateShopInput') updateShopInput: UpdateShopInput) {
    return this.shopsService.update(updateShopInput.id, updateShopInput);
  }

  @Mutation('removeShop')
  @UseGuards(JwtAuthGuard)
  remove(@Args('id') id: number) {
    return this.shopsService.remove(id);
  }
}
