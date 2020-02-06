import { Module } from '@nestjs/common';
import { StaffsController } from './staffs.controller';
import { StaffsService } from './staffs.service';
import { Staffs } from './staff.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Staffs])],
  controllers: [StaffsController],
  providers: [StaffsService],
})
export class StaffsModule {}
