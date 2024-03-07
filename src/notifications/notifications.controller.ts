import { Controller, Post, Body} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  createNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.sendNotification(createNotificationDto);
  }
  
}
