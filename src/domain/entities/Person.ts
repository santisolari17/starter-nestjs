import { IsInt, IsString } from 'class-validator';

export class Person {
  @IsString()
  public name: string;

  @IsInt()
  public age: number;

  constructor(params: any) {
    this.name = params.name;
    this.age = params.age;
  }
}
