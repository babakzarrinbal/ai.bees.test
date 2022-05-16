import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Product } from "../../product/entities/product.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({type: "float", nullable: true})
  discount: number;

  @OneToMany(() => Product, (products) => products.category, {nullable: true})
  products: Product[];

  @ManyToOne((type) => Category, (category) => category.childCategories, {nullable: true})
  parentCategory: Category

  @OneToMany((type) => Category, (category) => category.parentCategory, {nullable: true})
  childCategories: Category[]
}
