import { pow, sum } from '@my/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestLibExampleService {
  gretting() {
    return 'hello world';
  }

  sum() {
    return sum(1, 2);
  }

  pow() {
    return pow(1, 2);
  }
}
