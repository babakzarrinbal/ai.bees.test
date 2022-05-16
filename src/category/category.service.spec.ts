import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { CategoryController } from "./category.controller";

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Category])],
      controllers: [CategoryController],
      providers: [CategoryService],
      exports: [CategoryService]
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
