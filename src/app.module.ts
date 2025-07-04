import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioModule } from './modules/usuario/usuario.module';
import { ProductoModule } from './modules/producto/producto.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { CategoriaModule } from './modules/categoria/categoria.module';

@Module({
  imports: [
    // 1) Variables de entorno cargadas globalmente
    ConfigModule.forRoot({ isGlobal: true }),

    // 2) Conexión a PostgreSQL en Docker
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST!,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USER!,
      password: process.env.DB_PASS!,
      database: process.env.DB_NAME!,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    // 3) Módulos de la aplicación
    UsuarioModule,
    ProductoModule,
    PedidoModule,
    CategoriaModule,
  ],
})
export class AppModule {}
