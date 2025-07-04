import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private repo: Repository<Pedido>,
  ) {}

  // Crea un Pedido enlazando usuario y productos por sus IDs
  async create(dto: CreatePedidoDto): Promise<Pedido> {
    const pedido = this.repo.create({
      usuario: { id: dto.usuarioId },
      productos: dto.productosIds.map((id) => ({ id })),
    });
    return this.repo.save(pedido);
  }

  // Devuelve todos los pedidos incluyendo usuario y productos
  findAll(): Promise<Pedido[]> {
    return this.repo.find({ relations: ['usuario', 'productos'] });
  }

  // Busca un pedido por ID, lanza 404 si no existe
  async findOne(id: string): Promise<Pedido> {
    const pedido = await this.repo.findOne({
      where: { id },
      relations: ['usuario', 'productos'],
    });
    if (!pedido) {
      throw new NotFoundException('Pedido no encontrado');
    }
    return pedido;
  }

  // Elimina un pedido por ID, lanza 404 si no existe
  async remove(id: string): Promise<void> {
    const result = await this.repo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Pedido no encontrado');
    }
  }
}
