import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Category } from "../../category/entities/category.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({type: 'float', nullable: true})
  discount: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
