import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  public async getHello(): Promise<any> {
    return this.service.findAllQuestions();
  }
}
