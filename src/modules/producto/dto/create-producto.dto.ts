import { IsString, IsNumber } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  @Transform(({ value }: TransformFnParams) => Number(value as string))
  precio: number;

  @IsString()
  categoriaId: string;
}
