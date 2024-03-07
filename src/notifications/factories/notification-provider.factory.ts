import { Injectable } from '@nestjs/common';
import { EmailNotificationProvider } from '../providers/email-notification.provider';
import { SmsNotificationProvider } from '../providers/sms-notification.provider';
import { INotificationProvider } from '../interfaces/notification.interface';

@Injectable()
export class NotificationProviderFactory {
  create(channel: string): INotificationProvider {
    switch (channel) {
      case 'email':
        return new EmailNotificationProvider();
      case 'sms':
        return new SmsNotificationProvider();
      default:
        throw new Error(`Unsupported notification channel: ${channel}`);
    }
  }
}