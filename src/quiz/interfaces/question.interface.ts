import { Category } from "./category.interface"

export class Question {

    id?: string

    title: string

    text: string

    categories: Category[]
}