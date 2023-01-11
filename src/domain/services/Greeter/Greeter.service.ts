import { Injectable } from '@nestjs/common';
import { Person } from 'src/domain/entities/Person';

@Injectable()
export class GreeterService {
  public getGreeting(person: Person) {
    return `Hi, my name is ${person.name} and my age is ${person.age}`;
  }
}
