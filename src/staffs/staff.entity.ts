import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('staff')
export class Staffs {
  @PrimaryGeneratedColumn('increment')
  staff_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  last_name: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  DoB: Date;

  @Column({
    type: 'tinyint',
    comment: '1: Male, 2: Female',
    default: 0,
  })
  gender: number;

  @Column({ type: 'varchar', length: 300, nullable: false })
  address: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  mobile: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  skype: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  join_date: Date;

  @Column({ type: 'varchar', length: 250, nullable: false })
  department_staff: string;

  @Column({ type: 'varchar', length: 1000, nullable: false })
  image: string;
}
