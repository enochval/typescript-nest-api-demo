import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products' })
export class ProductEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 500 })
    name: string

    @Column('int')
    qty: number

    @Column({ type: 'float' })
    price: number
}