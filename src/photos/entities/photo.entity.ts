import { UserEntity } from "src/users/entities/users.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'photos' })
export class PhotoEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    url: string

    @ManyToOne(type => UserEntity, userEntity => userEntity.photos, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity
}