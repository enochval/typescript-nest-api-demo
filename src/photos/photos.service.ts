import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from './entities/photo.entity';
import { Repository } from 'typeorm';
import { UpdatePhotoDTO } from './dto/update-photo.dto';
import { Photo } from './interfaces/photo.interface';

@Injectable()
export class PhotosService {
    
    constructor(
        @InjectRepository(PhotoEntity)
        private readonly photoRepository: Repository<PhotoEntity>
    ) {}

    async update(id: string, photoDTO: UpdatePhotoDTO): Promise<Photo> {
        const photo = await this.photoRepository.findOneBy({ id })
        if (!photo) {
            throw new NotFoundException("Could not find any photo.")
        }

        await this.photoRepository.merge(photo, photoDTO)
        return await this.photoRepository.save(photo)
    }

    async getOne(id: string): Promise<Photo> {
        const photo = await this.photoRepository.findOneBy({ id })
        if (!photo) {
            throw new NotFoundException("Could not find any photo.")
        }

        return photo
    }

    async delete(id: string): Promise<any> {
        const photo = await this.photoRepository.findOneBy({ id })
        if (!photo) {
            throw new NotFoundException("Could not find any photo.")
        }

        await this.photoRepository.delete(id)

        return { msg: "Photo with ID " + photo.id + " is deleted." }
    }
}
