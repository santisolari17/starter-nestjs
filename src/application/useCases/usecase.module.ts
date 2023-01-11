import { Module } from '@nestjs/common';
import { ServicesModule } from '../../domain/services/services.module';
import { GiveGreetingsUseCase } from './GiveGreetings/GiveGreetings.usecase';

@Module({
  imports: [ServicesModule],
  providers: [GiveGreetingsUseCase],
  exports: [GiveGreetingsUseCase],
})
export class UsecaseModule {}
