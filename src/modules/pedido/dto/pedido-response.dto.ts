import { Expose, Transform, TransformFnParams } from 'class-transformer';

export class PedidoResponseDto {
  @Expose()
  id: string;

  @Expose()
  usuarioId: string;

  @Expose()
  productosIds: string[];

  @Expose()
  @Transform(({ value }: TransformFnParams) => {
    // value viene como any, pero sabemos que es Date
    const fecha = value as Date;
    return fecha.toISOString().split('T')[0];
  })
  fechaCreacion: string;
}
