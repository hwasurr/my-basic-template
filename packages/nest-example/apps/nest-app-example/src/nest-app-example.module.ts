import { Module } from '@nestjs/common';
import { NestAppExampleController } from './nest-app-example.controller';
import { NestAppExampleService } from './nest-app-example.service';

@Module({
  imports: [],
  controllers: [NestAppExampleController],
  providers: [NestAppExampleService],
})
export class NestAppExampleModule {}
