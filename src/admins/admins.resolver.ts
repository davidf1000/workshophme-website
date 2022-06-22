import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.adminsService.findAll();
  }

  @Query('admin')
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id') id: number) {
    return this.adminsService.findOne(id);
  }

  @Mutation('updateAdmin')
  update(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminsService.update(updateAdminInput);
  }

  @Mutation('removeAdmin')
  remove(@Args('id', ParseIntPipe) id: number) {
    return this.adminsService.remove(id);
  }
}
