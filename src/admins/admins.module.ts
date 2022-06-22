import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsResolver } from './admins.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AdminsResolver, AdminsService, PrismaService],
  exports: [AdminsService],
})
export class AdminsModule {}
