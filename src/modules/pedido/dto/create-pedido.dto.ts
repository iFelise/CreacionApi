import { IsUUID, IsArray } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class CreatePedidoDto {
  @IsUUID()
  usuarioId: string;

  @IsArray()
  @Transform(({ value }: TransformFnParams): string[] => {
    // Aseguramos que value sea string[] y devolvemos string[]
    const arr = value as string[];
    return Array.from(new Set(arr));
  })
  productosIds: string[];
}
