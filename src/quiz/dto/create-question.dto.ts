import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator"
import { CategoryDTO } from "./category.dto"
import { Type } from "class-transformer"

export class CreateQuestionDTO {

    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsNotEmpty()
    @IsString()
    readonly text: string

    @ValidateNested()
    @IsArray()
    @Type(type => CategoryDTO)
    readonly categories: CategoryDTO[]
}