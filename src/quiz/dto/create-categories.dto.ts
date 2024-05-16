import { IsArray, ValidateNested } from "class-validator";
import { CategoryDTO } from "./category.dto";
import { Type } from "class-transformer";

export class CreateCategoryDTO {

    @ValidateNested()
    @IsArray()
    @Type(type => CategoryDTO)
    readonly categories: CategoryDTO[]
}