import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async create(user: CreateUserDTO): Promise<User> {
        return await this.userRepository.save(user)
    }

    async getAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ['photos' ]})
    }

    async getOne(id: string): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['photos']
        })

        if (!user) {
            throw new NotFoundException("Could not find any user.")
        }

        return user
    }

    async update(id: string, userDTO: UpdateUserDTO): Promise<User> {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) {
            throw new NotFoundException("Could not find any user.")
        }

        await this.userRepository.merge(user, userDTO)
        return await this.userRepository.save(user);
    }

    async delete(id: string): Promise<any> {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['photos']
        })

        if (!user) {
            throw new NotFoundException("Could not find any user.")
        }

        await this.userRepository.delete(id)

        return { msg: `User with ID ${user.id} plus user's photos is deleted.`}
    }
}
