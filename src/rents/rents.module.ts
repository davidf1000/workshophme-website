import { Module } from '@nestjs/common';
import { RentsService } from './rents.service';
import { RentsResolver } from './rents.resolver';

@Module({
  providers: [RentsResolver, RentsService]
})
export class RentsModule {}
