import {
  DefaultEnvironmentVariables,
  generateConfigModuleOptions,
  validateUsingClassValidator,
} from '@my-nest/config';
import { IsString, Matches } from 'class-validator';
import { join } from 'path';

export const APP_NAME = 'api-1';
export class EnvironmentVariables extends DefaultEnvironmentVariables {
  @Matches(/^mongodb:\/\//, { message: `"MONGODB_URI" should start with "mongodb://"` })
  @IsString()
  MONGODB_URI: string;
}

export const configModuleOptions = generateConfigModuleOptions({
  validate: validateUsingClassValidator(EnvironmentVariables),
  envFilePath: [join(process.cwd(), `apps/${APP_NAME}`, '.env.development.local')],
});
