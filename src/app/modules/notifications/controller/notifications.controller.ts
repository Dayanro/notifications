import { NotificationsService } from '../services/notifications.service';
import { Controller, HttpStatus, UseFilters } from '@nestjs/common';
import { moduleConfig } from '../notifications.config';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ExceptionFilter } from 'src/shared/filter/rpc-exception.filter';
import { NotificationDto } from '../dto/notification.dto';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @UseFilters(new ExceptionFilter())
  @MessagePattern({ cmd: 'create-notification' })
  async createNotification(
    @Payload() notificationDto: NotificationDto,
  ): Promise<any> {
    await this.notificationsService.createNotification(notificationDto);
    return HttpStatus[200];
  }
}
