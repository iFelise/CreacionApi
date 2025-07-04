import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private srv: UsuarioService) {}

  @Post() create(@Body() dto: CreateUsuarioDto) {
    return this.srv.create(dto);
  }

  @Get() findAll() {
    return this.srv.findAll();
  }

  @Get(':id') findOne(@Param('id') id: string) {
    return this.srv.findOne(id);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.srv.remove(id);
  }
}
