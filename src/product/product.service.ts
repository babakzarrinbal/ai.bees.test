import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { ProductDiscountDto } from "./dto/product-discount.dto";
import { Category } from "../category/entities/category.entity";
import { CategoryService } from "../category/category.service";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly categoryService: CategoryService
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async getDiscount(id: number) : Promise<ProductDiscountDto>{
    const product = await this.productRepository.findOne(id, {relations: ['category']});
    const category = await this.categoryService.findOne(product.category.id);
    const productDiscount = new ProductDiscountDto(product);
    productDiscount.setDiscount(product.discount ?? await this.getDiscountFromCategories(category));
    return productDiscount;
  }

  private async getDiscountFromCategories(category: Category) : Promise<number>{
    const parentCategory = category.parentCategory !== null ? await this.categoryService.findOne(category.parentCategory?.id) : null;
    if(category.discount) return category.discount;
    if(parentCategory) return this.getDiscountFromCategories(parentCategory);
    if(category.discount === null && parentCategory === null) return -1;
  }
}
