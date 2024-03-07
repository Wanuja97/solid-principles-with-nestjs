import { Test, TestingModule } from '@nestjs/testing';
import { UserpostsService } from './userposts.service';

describe('UserpostsService', () => {
  let service: UserpostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserpostsService],
    }).compile();

    service = module.get<UserpostsService>(UserpostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
