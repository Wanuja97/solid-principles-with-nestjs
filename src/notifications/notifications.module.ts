import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { EmailNotificationProvider } from './providers/email-notification.provider';
import { SmsNotificationProvider } from './providers/sms-notification.provider';
import { NotificationProviderFactory } from './factories/notification-provider.factory';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, EmailNotificationProvider, SmsNotificationProvider,NotificationProviderFactory],
})
export class NotificationsModule {}
