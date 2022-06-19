import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsResolver } from './tools.resolver';

@Module({
  providers: [ToolsResolver, ToolsService]
})
export class ToolsModule {}
