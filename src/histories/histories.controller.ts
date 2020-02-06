import { Controller, Body, Post, Get, Param, Delete } from '@nestjs/common';
import { HistoriesService } from './histories.service';

@Controller('histories')
export class HistoriesController {
  constructor(readonly historiesService: HistoriesService) {}

  @Post('addhistory')
  async addHistory(@Body() newHistory: any) {
    return this.historiesService.addNewHistories(newHistory);
  }

  @Get('gethistorybystaff/:staff_id')
  async getHistoryByStaff(@Param('staff_id') staff_id: number) {
    return this.historiesService.getHistoriesByStaffId(staff_id);
  }

  @Delete('deletehistory/:history_id')
  async deleteHistory(@Param('history_id') history_id: number) {
    return this.historiesService.deleteHistoriesById(history_id);
  }
}
