import { Injectable } from '@nestjs/common';
import { CreateToolInput, UpdateToolInput } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToolsService {
  constructor(private prisma: PrismaService) {}

  async create(createToolInput: CreateToolInput) {
    const created = await this.prisma.tool.create({ data: createToolInput });
    return created;
  }

  async findAll() {
    const tools = await this.prisma.tool.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return tools;
  }

  async findOne(id: number) {
    const tool = await this.prisma.tool.findUnique({
      where: {
        id: id,
      },
    });
    return tool;
  }

  async update(updateToolInput: UpdateToolInput) {
    const updateTool = await this.prisma.tool.update({
      where: {
        id: updateToolInput.id,
      },
      data: {
        ...updateToolInput,
      },
    });
    return updateTool;
  }

  async remove(id: number) {
    const deleteTool = await this.prisma.tool.delete({
      where: {
        id,
      },
    });
    return deleteTool;
  }
}
