import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateToolInput, UpdateToolInput } from 'src/graphql';
import {
  validateCreateToolInput,
  validateUpdateToolInput,
} from 'src/utils/input.validator';
import { ToolsService } from './tools.service';

@Resolver('Tool')
export class ToolsResolver {
  constructor(private readonly toolsService: ToolsService) {}

  @Mutation('createTool')
  @UseGuards(JwtAuthGuard)
  create(@Args('createToolInput') createToolInput: CreateToolInput) {
    validateCreateToolInput(createToolInput);
    return this.toolsService.create(createToolInput);
  }

  @Query('tools')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.toolsService.findAll();
  }

  @Query('tool')
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id') id: number) {
    return this.toolsService.findOne(id);
  }

  @Mutation('updateTool')
  @UseGuards(JwtAuthGuard)
  update(@Args('updateToolInput') updateToolInput: UpdateToolInput) {
    validateUpdateToolInput(updateToolInput);
    return this.toolsService.update(updateToolInput);
  }

  @Mutation('removeTool')
  @UseGuards(JwtAuthGuard)
  remove(@Args('id') id: number) {
    return this.toolsService.remove(id);
  }
}
