import { Module } from '@nestjs/common';
import { UsecaseModule } from '../useCases/usecase.module';
import { MainAppController } from './MainApp/MainApp.controller';

@Module({
  imports: [UsecaseModule],
  controllers: [MainAppController],
})
export class ControllerModule {}
