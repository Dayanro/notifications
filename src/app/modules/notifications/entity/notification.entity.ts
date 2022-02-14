import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventData } from './eventData.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  UUID: string;

  @Column()
  date: Date;

  @Column()
  event_type: string;

  @OneToOne(() => EventData, {
    cascade: true,
  })
  @JoinColumn()
  event_data: EventData;
}
