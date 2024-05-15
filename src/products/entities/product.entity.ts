import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductDetailsEntity } from "./product-details.entity";

@Entity({ name: 'products' })
export class ProductEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @Column('int')
    qty: number

    @Column({ type: 'float' })
    price: number

    @OneToOne(() => ProductDetailsEntity, (productDetails) => productDetails.product, {
        cascade: ["insert", "update"],
        onDelete: "CASCADE"
    })
    productDetails: ProductDetailsEntity
}