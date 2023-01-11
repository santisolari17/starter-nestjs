import { Module } from '@nestjs/common';
import { InfrastructureServicesModule } from '../../infrastructure/services/infrastructureServices.module';
import { GreeterService } from './Greeter/Greeter.service';

@Module({
  imports: [InfrastructureServicesModule],
  providers: [GreeterService],
  exports: [GreeterService],
})
export class ServicesModule {}
