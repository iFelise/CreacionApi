import { IsString, IsEmail } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsEmail()
  @Transform(({ value }: TransformFnParams) => (value as string).toLowerCase())
  email: string;
}
