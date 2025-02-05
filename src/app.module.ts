import { ActiveMQModule } from '@dollarsign/nestjs-activemq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ActiveMQModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
