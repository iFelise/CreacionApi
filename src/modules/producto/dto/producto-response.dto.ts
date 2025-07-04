import { Expose, Transform, TransformFnParams } from 'class-transformer';

export class ProductoResponseDto {
  @Expose() id: string;
  @Expose() nombre: string;
  @Expose() precio: number;
  @Expose() categoriaId: string;

  @Expose()
  @Transform(({ obj }: TransformFnParams): string => {
    // Cast explicito a la forma que conocemos
    const o = obj as { precio: number };
    return `${o.precio} COP`;
  })
  precioFormateado: string;
}
