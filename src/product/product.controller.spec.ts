import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { CategoryModule } from "../category/category.module";
import { Category } from "../category/entities/category.entity";
import { CategoryService } from "../category/category.service";
import { Repository } from "typeorm";


// describe('ProductController', () => {
//   let controller: ProductController;
//
//   let productController: ProductController;
//   let productService: ProductService;
//
//   beforeEach(() => {
//
//     let categoryService = new CategoryService(categoryRepository);
//     productService = new ProductService();
//     catsController = new CatsController(catsService);
//   });
//   describe('findAll', () => {
//     it('should return an array of cats', async () => {
//       const result = ['test'];
//       jest.spyOn(productService, 'findAll').mockImplementation(() => result);
//
//       expect(await catsController.findAll()).toBe(result);
//     });
// });
