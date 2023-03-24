import { MongooseConfigService } from '@my-nest/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configModuleOptions } from './settings/env.config';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
