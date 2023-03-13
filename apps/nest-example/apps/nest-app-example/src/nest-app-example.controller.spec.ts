import { Test, TestingModule } from '@nestjs/testing';
import { NestAppExampleController } from './nest-app-example.controller';
import { NestAppExampleService } from './nest-app-example.service';

describe('NestAppExampleController', () => {
  let nestAppExampleController: NestAppExampleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestAppExampleController],
      providers: [NestAppExampleService],
    }).compile();

    nestAppExampleController = app.get<NestAppExampleController>(NestAppExampleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestAppExampleController.getHello()).toBe('Hello World!');
    });
  });
});
