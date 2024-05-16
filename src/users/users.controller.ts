import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UseFilters, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { UpdateUserDTO } from './dto/update-user.dto';
import { TransformInterceptor } from 'src/common/interceptors/transform/transform.interceptor';

@Controller('users')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class UsersController {
    
    constructor(private userService: UsersService) {}

    @Post()
    async create(@Body() user: CreateUserDTO): Promise<User> {
        return await this.userService.create(user)
    }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.userService.getAll()
    }


    @Get(":id")
    async getOne(@Param("id", new ParseUUIDPipe()) id): Promise<User> {
        return await this.userService.getOne(id)
    }

    @Put(':id')
    async update(@Param("id", new ParseUUIDPipe()) id, @Body() user: UpdateUserDTO): Promise<User> {
        return await this.userService.update(id, user)
    }

    @Delete(':id')
    async delete (@Param("id", new ParseUUIDPipe()) id): Promise<User> {
        return await this.userService.delete(id)
    }
}