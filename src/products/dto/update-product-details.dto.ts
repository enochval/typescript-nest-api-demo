import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateProductDetailsDTO {
    @IsOptional()
    @IsString()
    readonly dimension: string

    @IsOptional()
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