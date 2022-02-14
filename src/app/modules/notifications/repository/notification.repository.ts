import { EntityRepository, Repository } from 'typeorm';
import { CreateNotificationDto } from '../dto/create.notification.dto';
import { Notification } from '../entity/notification.entity';

@EntityRepository(Notification)
export class NotificationRepository extends Repository<Notification> {
  async createNotification(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const { UUID, date, event_type, event_data } = createNotificationDto;
    const notification = this.create({ UUID, date, event_type, event_data });
    await this.save(notification);
    return notification;
  }
}
