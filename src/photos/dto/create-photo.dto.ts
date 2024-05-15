import { IsNotEmpty, IsUrl } from "class-validator";

export class CreatePhotoDTO {

    @IsUrl()
    @IsNotEmpty()
    readonly url: string
}