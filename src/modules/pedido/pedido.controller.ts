import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly srv: PedidoService) {}

  @Post()
  create(@Body() dto: CreatePedidoDto) {
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
