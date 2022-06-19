import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ToolsService } from './tools.service';
import { CreateToolInput } from './dto/create-tool.input';
import { UpdateToolInput } from './dto/update-tool.input';

@Resolver('Tool')
export class ToolsResolver {
  constructor(private readonly toolsService: ToolsService) {}

  @Mutation('createTool')
  create(@Args('createToolInput') createToolInput: CreateToolInput) {
    return this.toolsService.create(createToolInput);
  }

  @Query('tools')
  findAll() {
    return this.toolsService.findAll();
  }

  @Query('tool')
  findOne(@Args('id') id: number) {
    return this.toolsService.findOne(id);
  }

  @Mutation('updateTool')
  update(@Args('updateToolInput') updateToolInput: UpdateToolInput) {
    return this.toolsService.update(updateToolInput.id, updateToolInput);
  }

  @Mutation('removeTool')
  remove(@Args('id') id: number) {
    return this.toolsService.remove(id);
  }
}
