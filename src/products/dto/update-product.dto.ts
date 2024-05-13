import { IsInt, IsNumberString, IsOptional, IsString } from "class-validator"

export class UpdateProductDTO {

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsInt()
    qty: number

    @IsOptional()
    @IsNumberString()
    price: number
}