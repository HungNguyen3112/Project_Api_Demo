import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('histories')
export class Histories {
  @PrimaryGeneratedColumn('increment')
  history_id: number;

  @Column({ type: 'text', nullable: false })
  histories_work: string;

  @Column({ type: 'int' })
  staff_id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  histories_time: Date;
}
