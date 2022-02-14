import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  filename: string;

  @Column()
  filepath: string;

  @Column({
    nullable: true,
  })
  moved_to: string;

  @Column({ nullable: true })
  received_timestamp: Date;

  @Column({ nullable: true })
  elapsed_time: number;
}
