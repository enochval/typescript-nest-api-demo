import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateProductDetailsDTO {
    @IsOptional()
    @IsString()
    readonly dimension: string

    @IsNotEmpty()
    @IsString()
    readonly partNumber: string

    @IsOptional()
    @IsInt()
    readonly weight: number

    @IsOptional()
    @IsString()
    readonly manufacturer: string

    @IsOptional()
    @IsString()
    readonly origin: string
}