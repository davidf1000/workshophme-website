import { Module } from '@nestjs/common';
import { RentsService } from './rents.service';
import { RentsResolver } from './rents.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [RentsResolver, RentsService, PrismaService],
})
export class RentsModule {}
