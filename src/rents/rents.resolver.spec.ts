import { Test, TestingModule } from '@nestjs/testing';
import { RentsResolver } from './rents.resolver';
import { RentsService } from './rents.service';

describe('RentsResolver', () => {
  let resolver: RentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentsResolver, RentsService],
    }).compile();

    resolver = module.get<RentsResolver>(RentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
