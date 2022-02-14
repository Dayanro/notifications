import { EventDataInterface } from './eventData.interface';

export interface NotificationInterface {
  UUID: string;
  date: Date;
  event_type: string;
  event_data: EventDataInterface;
}
