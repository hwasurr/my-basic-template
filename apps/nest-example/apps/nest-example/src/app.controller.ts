import { NestLibExampleService } from '@app/nest-lib-example';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly nestLibExampleService: NestLibExampleService,
  ) {}

  @Get()
  getHello(): string {
    return this.nestLibExampleService.gretting();
  }
}
