import { Body, Controller, Post } from '@nestjs/common';
import { GiveGreetingsUseCase } from '../../useCases/GiveGreetings/GiveGreetings.usecase';
import { PersonDto } from './dtos/Person.dto';

@Controller('greetings')
export class MainAppController {
  constructor(private readonly _giveGreetingsUseCase: GiveGreetingsUseCase) {}

  @Post()
  public async processIncomingMailTrackingEvent(@Body() body: PersonDto) {
    return this._giveGreetingsUseCase.greet(body.name, body.age);
  }
}
