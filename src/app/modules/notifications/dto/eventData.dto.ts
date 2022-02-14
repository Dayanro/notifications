import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class EventDataDto {
  @IsString()
  filename?: string;

  @IsString()
  filepath?: string;

  @IsString()
  moved_to?: string;

  @Type(() => Date)
  received_timestamp?: Date;

  @IsNumber()
  elapsed_time?: number;
}
