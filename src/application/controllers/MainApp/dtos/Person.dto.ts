import { IsInt, IsString } from 'class-validator';

export class PersonDto {
  @IsString()
  public name: string;

  @IsInt()
  public age: number;
}
