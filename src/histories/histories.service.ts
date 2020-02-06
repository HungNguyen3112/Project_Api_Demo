import { Injectable } from '@nestjs/common';
import { Histories } from './histories.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HistoriesService {
  constructor(
    @InjectRepository(Histories)
    readonly HistoriesService: Repository<Histories>,
  ) {}

  async addNewHistories(history_work: any) {
    return this.HistoriesService.save(history_work);
  }

  async getHistoriesByStaffId(staff_id: number) {
    return this.HistoriesService.find({ where: { staff_id } });
  }
  async deleteHistoriesById(history_id: number) {
    const deleteHistory = await this.HistoriesService.findOne(history_id);

    if (deleteHistory) {
      return this.HistoriesService.remove(deleteHistory);
    }
  }
}
