// notifications.service.ts
import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { INotificationProvider } from './interfaces/notification.interface';
import { NotificationProviderFactory } from './factories/notification-provider.factory';

@Injectable()
export class NotificationsService {
  constructor(private readonly notificationProviderFactory: NotificationProviderFactory) {}

  async sendNotification(createNotificationDto: CreateNotificationDto): Promise<void> {
    const { user, message, channel } = createNotificationDto;
    
    for (const ch of channel) {
      try {
        const notificationProvider = this.notificationProviderFactory.create(ch);
        await notificationProvider.send(user, message);
      } catch (error) {
        // Log the error for debugging and monitoring purposes
        console.error('Error:', error.message);
      }
    }
  }
}












// Non-OCP Approach:



// import { Injectable } from '@nestjs/common';
// import { CreateNotificationDto } from './dto/create-notification.dto';
// import { INotificationProvider } from './interfaces/notification.interface';
// import { EmailNotificationProvider } from './providers/email-notification.provider';
// import { SmsNotificationProvider } from './providers/sms-notification.provider';

// @Injectable()
// export class NotificationsService {
//   private readonly notificationMap: Map<string, INotificationProvider>;

//   constructor(
//     private readonly emailNotification: EmailNotificationProvider, 
//     private readonly smsNotificationProvider: SmsNotificationProvider
//     ) {
//     this.notificationMap = new Map([
//       ['email', this.emailNotification],
//       ['sms', this.smsNotificationProvider],
//     ]);
//   }

//   async sendNotification(createNotificationDto: CreateNotificationDto): Promise<void> {
//     const { user, message, channel } = createNotificationDto;
    
//     for (const ch of channel) {
//       try {
//         const notification = this.notificationMap.get(ch);
//         if (!notification || notification === undefined) {
//           throw new Error(`Unsupported notification channel: ${ch}`);
//         }
//         await notification.send(user, message);
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//   }

//   }
// }
