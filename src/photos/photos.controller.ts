import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Put, UseFilters, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform/transform.interceptor';
import { PhotosService } from './photos.service';
import { Photo } from './interfaces/photo.interface';
import { UpdatePhotoDTO } from './dto/update-photo.dto';

@Controller('photos')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class PhotosController {

    constructor(private photoService: PhotosService){}

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id, @Body() photo: UpdatePhotoDTO): Promise<Photo> {
        return await this.photoService.update(id, photo)
    }

    @Delete(':id')
    async delete(@Param('id', new ParseUUIDPipe()) id): Promise<any> {
        return await this.photoService.delete(id)
    }

    @Get(':id')
    async getOne(@Param('id', new ParseUUIDPipe()) id): Promise<Photo> {
        return await this.photoService.getOne(id)
    }
}
