import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly srv: CategoriaService) {}

  @Post()
  create(@Body() dto: CreateCategoriaDto) {
    return this.srv.create(dto);
  }

  @Get()
  findAll() {
    return this.srv.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.srv.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.srv.remove(id);
  }
}
