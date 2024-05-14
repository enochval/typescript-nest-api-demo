import { Type } from "class-transformer"
import { IsInt, IsNumberString, IsOptional, IsString, ValidateNested } from "class-validator"
import { UpdateProductDetailsDTO } from "./update-product-details.dto"

export class UpdateProductDTO {

    @IsOptional()
    @IsString()
    readonly name: string

    @IsOptional()
    @IsInt()
    readonly qty: number

    @IsOptional()
    @IsNumberString()
    readonly price: number

    @ValidateNested()
    @Type(() => UpdateProductDetailsDTO)
    readonly productDetails: UpdateProductDetailsDTO
}