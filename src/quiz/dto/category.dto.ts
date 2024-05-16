import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CategoryDTO {

    @IsOptional()
    @IsUUID()
    readonly id?: string

    @IsNotEmpty()
    @IsString()
    readonly name: string
}