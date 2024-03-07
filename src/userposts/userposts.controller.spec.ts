import { Test, TestingModule } from '@nestjs/testing';
import { UserpostsController } from './userposts.controller';
import { UserpostsService } from './userposts.service';

describe('UserpostsController', () => {
  let controller: UserpostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserpostsController],
      providers: [UserpostsService],
    }).compile();

    controller = module.get<UserpostsController>(UserpostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
