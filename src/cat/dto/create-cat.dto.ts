import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
}
