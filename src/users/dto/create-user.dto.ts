import { Type } from "class-transformer"
import { IsArray, IsEmail, IsNotEmpty, IsString, IsStrongPassword, ValidateNested } from "class-validator"
import { CreatePhotoDTO } from "src/photos/dto/create-photo.dto"

export class CreateUserDTO {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    @IsStrongPassword()
    readonly password: string

    @ValidateNested()
    @IsArray()
    @Type(type => CreatePhotoDTO)
    readonly photos: CreatePhotoDTO[]
}