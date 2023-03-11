import { NestFactory } from '@nestjs/core';
import { NestAppExampleModule } from './nest-app-example.module';

async function bootstrap() {
  const app = await NestFactory.create(NestAppExampleModule);
  await app.listen(3000);
}
bootstrap();
