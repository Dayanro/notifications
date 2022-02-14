import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsController } from './controller/notifications.controller';
import { EventData } from './entity/eventData.entity';
import { Notification } from './entity/notification.entity';
import { NotificationsService } from './services/notifications.service';
import { Connection } from 'typeorm';
import { NotificationRepository } from './repository/notification.repository';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationRepository])],
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [TypeOrmModule, NotificationsService],
})
export class NotificationsModule {
  private connection: Connection;
}
