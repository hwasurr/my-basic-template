import { Controller, Get } from '@nestjs/common';
import { NestAppExampleService } from './nest-app-example.service';

@Controller()
export class NestAppExampleController {
  constructor(private readonly nestAppExampleService: NestAppExampleService) {}

  @Get()
  getHello(): string {
    return this.nestAppExampleService.getHello();
  }
}
