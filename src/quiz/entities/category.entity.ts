import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { QuestionEntity } from "./question.entity"

@Entity({ name: 'categories' })
export class CategoryEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @ManyToMany(type => QuestionEntity, questionEntity => questionEntity.categories, {
        cascade: ['insert', 'update'],
        onDelete: 'CASCADE'
    })
    @JoinTable({ 
        name: 'category_questions', 
        joinColumn: { name: 'category_id' }, 
        inverseJoinColumn: { name: 'question_id' }
    })
    questions
}