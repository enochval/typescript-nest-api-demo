import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: "product_details" })
export class ProductDetailsEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 45 })
    dimension: string

    @Column({ length: 45, name: 'part_number' })
    partNumber: string

    @Column({ type: 'int' })
    weight: number

    @Column({ length: 45 })
    manufacturer: string

    @Column({ length: 45 })
    origin: string

    @OneToOne(() => ProductEntity)
    @JoinColumn({ name: "product_id"})
    product: ProductEntity
}