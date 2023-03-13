import { Module } from '@nestjs/common';
import { NestLibExampleService } from './nest-lib-example.service';

@Module({
  providers: [NestLibExampleService],
  exports: [NestLibExampleService],
})
export class NestLibExampleModule {}
