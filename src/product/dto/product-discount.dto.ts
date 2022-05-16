import { ApiProperty } from "@nestjs/swagger";
import { Product } from "../entities/product.entity";

export class ProductDiscountDto {
  @ApiProperty()
  productId: number;

  @ApiProperty()
  productName: string;

  @ApiProperty()
  discount: number;

  constructor(product: Product) {
    this.productId = product.id;
    this.productName = product.name;
  }

  setDiscount(discount: number) {
    this.discount = discount;
  }
}