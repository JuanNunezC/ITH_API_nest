import { DetailsService } from 'src/api/User/details/details.service';
import { Module } from '@nestjs/common';
import { Connection } from './configs/DBConnection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/api/User/Users/user/user.module';
import { SalesModule } from 'src/api/User/Sales/sales.module';

@Module({
  imports: [Connection, UserModule, SalesModule],
  controllers: [AppController],
  providers: [
    DetailsService, AppService],
})
export class AppModule { }
