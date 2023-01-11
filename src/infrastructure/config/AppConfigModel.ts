import { IsEnum, IsNumber, IsString, IsUrl, ValidateIf } from 'class-validator';
import { EAppEnvironment } from '../enums/EAppEnvironment';

/**
 * This class represents the Model of this app configuration variables, defined in a .env file
 **/
export class AppConfigModel {
  @IsNumber()
  port: number;

  @IsEnum(EAppEnvironment)
  environment: EAppEnvironment;

  constructor(config: any) {
    this.port = config.port;
    this.environment = config.environment;
  }
}
