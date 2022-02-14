import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { Notification } from './app/modules/notifications/entity/notification.entity';
import { EventData } from './app/modules/notifications/entity/eventData.entity';
import { DatabaseModule } from './database/database.module';
import { NotificationsModule } from './app/modules/notifications/notifications.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
