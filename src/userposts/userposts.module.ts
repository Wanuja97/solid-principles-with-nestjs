import { Module } from '@nestjs/common';
import { UserpostsService } from './userposts.service';
import { UserpostsController } from './userposts.controller';

@Module({
  controllers: [UserpostsController],
  providers: [UserpostsService],
})
export class UserpostsModule {}
