import { EnvNotFoundError } from '@my-nest/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

interface MongoDBEnv {
  readonly MONGODB_URI: string;
}
@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService<MongoDBEnv>) {
    if (!configService.get('MONGODB_URI')) {
      throw new EnvNotFoundError('Environment variable "MONGODB_URI" must be defined');
    }
  }

  public async createMongooseOptions(): Promise<MongooseModuleOptions> {
    const MONGODB_URI = this.configService.get<string>('MONGODB_URI');
    return {
      uri: MONGODB_URI,
    };
  }
}
