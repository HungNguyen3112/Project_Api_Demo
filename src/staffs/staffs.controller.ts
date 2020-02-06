import { Controller, Body, Post, Get, Put, Param } from '@nestjs/common';
import { StaffsService } from './staffs.service';

@Controller('staff')
export class StaffsController {
  constructor(readonly staffsService: StaffsService) {}

  @Post('addNewStaff')
  async addNewStaff(@Body() newStaff: any) {
    return this.staffsService.addNewStaff(newStaff);
  }

  @Get('allstaff')
  async getAllStaff() {
    return this.staffsService.getAllStaff();
  }

  @Put('updateStaff/:staffId')
  async updateStaff(@Param('staffId') staffId: number, @Body() staff: any) {
    return this.staffsService.updateStaff(staffId, staff);
  }
}
