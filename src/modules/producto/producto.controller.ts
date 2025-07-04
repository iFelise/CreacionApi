import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly srv: ProductoService) {}

  @Post()
  create(@Body() dto: CreateProductoDto) {
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
