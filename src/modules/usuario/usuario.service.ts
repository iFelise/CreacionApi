import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private repo: Repository<Usuario>,
  ) {}

  create(dto: CreateUsuarioDto) {
    const u = this.repo.create(dto);
    return this.repo.save(u);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const u = await this.repo.findOne({ where: { id } });
    if (!u) throw new NotFoundException('Usuario no encontrado');
    return u;
  }

  async remove(id: string) {
    const res = await this.repo.delete(id);
    if (res.affected === 0)
      throw new NotFoundException('Usuario no encontrado');
  }
}
