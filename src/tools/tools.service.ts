import { Injectable } from '@nestjs/common';
import { CreateToolInput } from './dto/create-tool.input';
import { UpdateToolInput } from './dto/update-tool.input';

@Injectable()
export class ToolsService {
  create(createToolInput: CreateToolInput) {
    return 'This action adds a new tool';
  }

  findAll() {
    return `This action returns all tools`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tool`;
  }

  update(id: number, updateToolInput: UpdateToolInput) {
    return `This action updates a #${id} tool`;
  }

  remove(id: number) {
    return `This action removes a #${id} tool`;
  }
}
