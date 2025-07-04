import { Expose } from 'class-transformer';

export class CategoriaResponseDto {
  @Expose()
  id: string;

  @Expose()
  nombre: string;
}
