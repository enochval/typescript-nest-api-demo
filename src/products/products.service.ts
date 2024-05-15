import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) {}

    async create(productDTO: CreateProductDTO): Promise<Product>  {
        return await this.productRepository.save(productDTO)
    }

    async all(): Promise<Product[]> {
        return await this.productRepository.find({ relations: ['productDetails'] })
    }

    async findOne(id: string): Promise<Product> {
        const product = await this.productRepository.findOne({ 
            where: { id }, relations: ['productDetails'] 
        })
        if (!product) {
            throw new NotFoundException("Could not find any product")
        }
        return product;
    }

    async delete(id: string): Promise<any> {
        const product = await this.productRepository.findOne({
            where: { id }, relations: ['productDetails']
        })
        if (!product) {
            throw new NotFoundException("Could not find any product")
        }

        await this.productRepository.delete(id)

        return { msg: `Product with ID ${id} and product details ID ${product.productDetails.id} is deleted.`}
    }

    async update(id: string, updatedRecord: UpdateProductDTO): Promise<Product> {
        const findProduct = await this.productRepository.findOne({
            where: { id }, relations: ['productDetails']
        })
        if (!findProduct) {
            throw new NotFoundException('Could not find any product.')
        }

        await this.productRepository.merge(findProduct, updatedRecord)
        return await this.productRepository.save(findProduct)
    }
}
