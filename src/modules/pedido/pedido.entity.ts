import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Column,
} from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../producto/producto.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.pedidos)
  usuario: Usuario;

  @ManyToMany(() => Producto)
  @JoinTable()
  productos: Producto[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;
}
