import { IsDate, IsString } from 'class-validator';
import { EventDataDto } from './eventData.dto';
import { Type } from 'class-transformer';

export class NotificationDto {
  @IsString()
  UUID: string;

  @Type(() => Date)
  date: Date;

  @IsString()
  event_type: string;

  event_data: EventDataDto;
}
