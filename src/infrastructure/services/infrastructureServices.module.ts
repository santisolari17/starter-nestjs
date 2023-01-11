import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './appConfig/AppConfigService';
import { AxiosHttpClient } from './httpClient/AxiosHttpClient';

@Module({
  imports: [],
  providers: [AxiosHttpClient, AppConfigService, ConfigService],
  exports: [AxiosHttpClient, AppConfigService, ConfigService],
})
export class InfrastructureServicesModule {}
