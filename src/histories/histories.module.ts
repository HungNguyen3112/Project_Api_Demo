import { Module } from '@nestjs/common';
import { HistoriesController } from './histories.controller';
import { Histories } from './histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoriesService } from './histories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Histories])],
  controllers: [HistoriesController],
  providers: [HistoriesService],
})
export class HistoriesModule {}
