import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { CategoryModule } from "../category/category.module";
import { ProductController } from "./product.controller";

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Product]),
        CategoryModule
      ],
      controllers: [ProductController],
      providers: [ProductService]
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
