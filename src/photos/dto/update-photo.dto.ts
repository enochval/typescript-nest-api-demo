import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class UpdatePhotoDTO {

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    url: string
}