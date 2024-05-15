import { Photo } from "src/photos/interfaces/photo"

export class User {

    id?: string

    email: string

    password: string

    photos: Photo[]
}