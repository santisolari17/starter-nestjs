import { Module } from '@nestjs/common';
import { ClassValidatorEntityValidator } from './ClassValidatorEntityValidator';
import { GeoIp } from './GeoIp';

@Module({
  providers: [ClassValidatorEntityValidator, GeoIp],
  exports: [ClassValidatorEntityValidator, GeoIp],
})
export class UtilsModule {}
