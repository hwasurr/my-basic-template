import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  public async createMongooseOptions(): Promise<MongooseModuleOptions> {
    return {
      uri: 'mongodb://localhost/nest',
    };
  }
}
