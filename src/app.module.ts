import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { UserpostsModule } from './userposts/userposts.module';
import { NotificationsModule } from './notifications/notifications.module';

import { AzureBlobStorageService } from './StorageServices/azure-blob-storage.service';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [UsersModule, PostsModule, UserpostsModule, NotificationsModule, PaymentsModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
