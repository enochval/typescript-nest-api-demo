import { IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class UpdateUserDTO {

    @IsOptional()
    @IsEmail()
    @IsString()
    readonly email: string

    @IsStrongPassword()
    @IsString()
    @IsOptional()
    readonly password: string
}