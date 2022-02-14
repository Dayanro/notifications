import { AppService } from './app.service';
import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ExceptionFilter } from 'src/shared/filter/rpc-exception.filter';
import { NotificationDto } from './app/modules/notifications/dto/notification.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
