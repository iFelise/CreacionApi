import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() nombre: string;

  @Column({ unique: true }) email: string;

  @OneToMany(() => Pedido, (pedido) => pedido.usuario)
  pedidos: Pedido[];
}
