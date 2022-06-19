import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CreateAdminInput, UpdateAdminInput } from 'src/graphql';
import { AdminsService } from './admins.service';

@Resolver('Admin')
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) {}

  @Mutation('createAdmin')
  create(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminsService.create(createAdminInput);
  }

  @Query('admins')
  findAll() {
    console.log('Triggered');

    return this.adminsService.findAll();
  }

  @Query('admin')
  findOne(@Args('id') id: number) {
    return this.adminsService.findOne(id);
  }

  @Mutation('updateAdmin')
  update(
    @Args('updateAdminInput') updateAdminInput: UpdateAdminInput,
  ) {
    return this.adminsService.update(updateAdminInput);
  }

  @Mutation('removeAdmin')
  remove(@Args('id', ParseIntPipe) id: number) {
    return this.adminsService.remove(id);
  }
}
