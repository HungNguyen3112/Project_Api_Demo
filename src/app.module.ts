import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffsModule } from './staffs/staffs.module';
import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { HistoriesService } from './histories/histories.service';
import { HistoriesModule } from './histories/histories.module';

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'root',
  password: '1234',
  database: 'sutrix_demo',
  synchronize: true,
  entities: ['./src/**/*.entity.ts'],
};

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), StaffsModule, HistoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
