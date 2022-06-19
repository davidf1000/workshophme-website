import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminsService } from './admins.service';

@Resolver('Admin')
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) {}

  @Mutation('createAdmin')
  create(@Args('createAdminInput') createAdminInput: Prisma.AdminCreateInput) {
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
    @Args('id') id: number,
    @Args('updateAdminInput') updateAdminInput: Prisma.AdminUpdateInput,
  ) {
    return this.adminsService.update(id, updateAdminInput);
  }

  @Mutation('removeAdmin')
  remove(@Args('id', ParseIntPipe) id: number) {
    return this.adminsService.remove(id);
  }
}
