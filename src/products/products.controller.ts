import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Post()
    async create(@Body() product: CreateProductDTO): Promise<Product[]> {
        return this.productService.create(product);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.all()
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Product> {
        return this.productService.findOne(params.id);
    }

    @Delete(':id')
    async delete(@Param() params): Promise<Product[]> {
        return this.productService.delete(params.id)
    }
}
