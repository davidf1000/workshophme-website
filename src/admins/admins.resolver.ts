import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateAdminInput, UpdateAdminInput } from 'src/graphql';
import { AdminsService } from './admins.service';
import {
  validateAdminUpdateInput,
  validateRegisterInput,
} from '../utils/input.validator';

@Resolver('Admin')
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) {}

  @Mutation('createAdmin')
  @UseGuards(JwtAuthGuard)
  create(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    validateRegisterInput(createAdminInput);
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
  @UseGuards(JwtAuthGuard)
  update(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    validateAdminUpdateInput(updateAdminInput);
    return this.adminsService.update(updateAdminInput);
  }

  @Mutation('removeAdmin')
  @UseGuards(JwtAuthGuard)
  remove(@Args('id', ParseIntPipe) id: number) {
    return this.adminsService.remove(id);
  }
}
