import { Injectable } from '@nestjs/common';
import { Staffs } from './staff.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StaffsService {
  constructor(
    @InjectRepository(Staffs) readonly staffsService: Repository<Staffs>,
  ) {}

  async addNewStaff(newStaff: any) {
    return await this.staffsService.save(newStaff);
  }

  async getAllStaff(): Promise<Staffs[]> {
    return await this.staffsService.find();
  }

  async updateStaff(staff_id: number, staffUpdate: any) {
    const staff = await this.staffsService.findOne(staff_id);
    if (staff) {
      Object.assign(staff, staffUpdate);
      await this.staffsService.update(staff_id, staff);
      await this.staffsService.save(staff);
    }
    return staff;
  }
}
