import { PhotoEntity } from "src/photos/entities/photo.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'users' })
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(type => PhotoEntity, photoEntity => photoEntity.user, {
        cascade: ['insert', 'update'],
        onDelete: 'CASCADE'
    })
    photos: PhotoEntity[]
}