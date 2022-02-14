import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationDto } from '../dto/notification.dto';
import { Notification } from '../entity/notification.entity';
import { NotificationInterface } from '../interfaces/notification.interface';
import { NotificationRepository } from '../repository/notification.repository';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(NotificationRepository)
    private notificationRepository: NotificationRepository,
    private configService: ConfigService,
  ) {}

  public async createNotification(
    notificationDto: NotificationDto,
  ): Promise<Notification> {
    return this.notificationRepository.createNotification(notificationDto);
  }
}
