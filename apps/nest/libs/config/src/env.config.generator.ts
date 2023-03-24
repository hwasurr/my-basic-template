import { EnvNotFoundError } from '@my-nest/common';
import { ConfigModuleOptions } from '@nestjs/config';
import { ClassConstructor, plainToInstance, Type } from 'class-transformer';
import { IsEnum, IsNumber, validateSync } from 'class-validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class DefaultEnvironmentVariables {
  @IsEnum(Environment) NODE_ENV: Environment = Environment.Development;

  @IsNumber() @Type(() => Number) PORT = 4000;
}

/**
 * Environment variable validating function using class-validator
 * @param environmentVariables 환경변수를 필드로 선언한 클래스
 * (https://docs.nestjs.com/techniques/configuration#custom-validate-function 참고.)
 */
export const validateUsingClassValidator = <T extends ClassConstructor<any>>(
  environmentVariables: T,
) => {
  return (config: Record<string, unknown>) => {
    const validatedConfig = plainToInstance(environmentVariables, config, {
      enableImplicitConversion: true,
    });

    const validationErrors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });
    if (validationErrors.length > 0)
      throw new EnvNotFoundError(validationErrors.toString());

    return validatedConfig;
  };
};

export const generateConfigModuleOptions = (
  options?: ConfigModuleOptions,
): ConfigModuleOptions => ({
  isGlobal: true,
  expandVariables: true,
  validate: validateUsingClassValidator(DefaultEnvironmentVariables),
  ...options,
});
