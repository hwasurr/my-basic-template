import { Injectable } from '@nestjs/common';

@Injectable()
export class NestAppExampleService {
  getHello(): string {
    return 'Hello World!';
  }
}
