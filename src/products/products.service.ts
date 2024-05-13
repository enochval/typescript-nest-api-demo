import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) {}

    async create(product: CreateProductDTO): Promise<Product>  {
        return await this.productRepository.save(product)
    }

    async all(): Promise<Product[]> {
        return await this.productRepository.find()
    }

    async findOne(id: string): Promise<Product> {
        const product = await this.productRepository.findOneBy({id})
        if (!product) {
            throw new NotFoundException("Could not find any product")
        }
        return product;
    }

    async delete(id: string): Promise<void> {
        const product = this.productRepository.findOneBy({id})
        if (!product) {
            throw new NotFoundException("Could not find any product")
        }
        await this.productRepository.delete(id)
    }

    async update(id: string, updatedRecord: UpdateProductDTO): Promise<Product> {
        const product = await this.productRepository.findOneBy({id})
        if (!product) {
            throw new NotFoundException('Could not find any product.')
        }

        await this.productRepository.merge(product, updatedRecord)
        return await this.productRepository.save(product)
    }
}
