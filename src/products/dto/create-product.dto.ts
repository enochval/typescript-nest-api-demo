import { IsInt, IsNotEmpty, IsNumberString, IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { CreateProductDetailsDTO } from "./create-product-details.dto"
import { Type } from "class-transformer"

export class CreateProductDTO {
    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsInt()
    readonly qty: number

    @IsNotEmpty()
    @IsNumberString()
    readonly price: number

    @ValidateNested()
    @Type(() => CreateProductDetailsDTO)
    readonly productDetails: CreateProductDetailsDTO
}