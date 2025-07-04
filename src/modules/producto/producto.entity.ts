import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from '../categoria/categoria.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() nombre: string;

  @Column('decimal') precio: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  categoria: Categoria;
}
