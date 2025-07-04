import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private repo: Repository<Producto>,
  ) {}

  create(dto: CreateProductoDto) {
    const p = this.repo.create(dto);
    return this.repo.save(p);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const p = await this.repo.findOne({ where: { id } });
    if (!p) throw new NotFoundException('Producto no encontrado');
    return p;
  }

  async remove(id: string) {
    const res = await this.repo.delete(id);
    if (res.affected === 0)
      throw new NotFoundException('Producto no encontrado');
  }
}
