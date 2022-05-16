import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CategoryModule } from './category/category.module';
import { Product } from "./product/entities/product.entity";
import { Category } from "./category/entities/category.entity";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./roles.gaurd";

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'product-catalogue',
      entities: [Product, Category],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
