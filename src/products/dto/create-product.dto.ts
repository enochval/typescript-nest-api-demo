import { IsInt, IsNotEmpty, IsNumber, IsNumberString, IsString, IsUUID } from "class-validator"

export class CreateProductDTO {
    @IsUUID()
    @IsNotEmpty()
    readonly id: string

    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsInt()
    readonly qty: number

    @IsNotEmpty()
    @IsNumberString()
    readonly price: number
}