import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { Person } from 'src/domain/entities/Person';
import { GreeterService } from 'src/domain/services/Greeter/Greeter.service';

@Injectable()
export class GiveGreetingsUseCase {
  constructor(private readonly _greeterService: GreeterService, private readonly _logger: PinoLogger) {
    this._logger.setContext(GiveGreetingsUseCase.name);
  }

  public greet(name: string, age: number) {
    const person = new Person({ name, age });
    this._logger.info('About to greet someone...');
    return this._greeterService.getGreeting(person);
  }
}
