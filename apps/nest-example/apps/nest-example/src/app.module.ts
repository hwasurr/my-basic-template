import { NestLibExampleModule } from '@app/nest-lib-example';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [NestLibExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
