import { Expose } from 'class-transformer';

export class UsuarioResponseDto {
  @Expose() id: string;

  // Declaramos también 'nombre' para tiparlo correctamente
  @Expose()
  nombre: string;

  @Expose({ name: 'nombreCompleto' })
  getNombreCompleto(): string {
    return this.nombre;
  }

  @Expose() email: string;
}
