import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsResolver } from './tools.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ToolsResolver, ToolsService, PrismaService],
})
export class ToolsModule {}
