/* eslint-disable import/no-import-module-exports */
import { NestExpressApplication } from '@nestjs/platform-express';
import { DefaultEnvironmentVariables } from '@my-nest/config';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService =
    app.get<ConfigService<DefaultEnvironmentVariables>>(ConfigService);
  const PORT = configService.get<number>('PORT')!;

  await app.listen(PORT).then(() => {
    Logger.debug(`Server listening on port ${PORT}`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
