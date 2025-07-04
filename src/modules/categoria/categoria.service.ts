import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private repo: Repository<Categoria>,
  ) {}

  create(dto: CreateCategoriaDto): Promise<Categoria> {
    const cat = this.repo.create(dto);
    return this.repo.save(cat);
  }

  findAll(): Promise<Categoria[]> {
    return this.repo.find();
  }

  async findOne(id: string): Promise<Categoria> {
    const cat = await this.repo.findOne({ where: { id } });
    if (!cat) {
      throw new NotFoundException('Categoría no encontrada');
    }
    return cat;
  }

  async remove(id: string): Promise<void> {
    const result = await this.repo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Categoría no encontrada');
    }
  }
}
