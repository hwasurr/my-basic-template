import { Test, TestingModule } from '@nestjs/testing';
import { NestLibExampleService } from './nest-lib-example.service';

describe('NestLibExampleService', () => {
  let service: NestLibExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestLibExampleService],
    }).compile();

    service = module.get<NestLibExampleService>(NestLibExampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
