import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { CategoryEntity } from "./category.entity"

@Entity({ name: "questions" })
export class QuestionEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    text: string

    @ManyToMany(type => CategoryEntity, categoryEntity => categoryEntity.questions, {
        cascade: ['insert', 'update'],
        onDelete: 'CASCADE'
    })
    categories
}