import { Photo } from "src/photos/interfaces/photo.interface"

export class User {

    id?: string

    email: string

    password: string

    photos: Photo[]
}