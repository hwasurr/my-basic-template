import { sum } from '@my/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public async findAllQuestions(): Promise<any> {
    return sum(1, 2);
  }
}
