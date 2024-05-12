import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UseFilters } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Controller('products')
@UseFilters(HttpExceptionFilter)
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
        const product = this.productService.findOne(params.id);

        if (!product) {
            throw new HttpException("Product not found", HttpStatus.BAD_REQUEST);
        }

        return product;
    }

    @Delete(':id')
    async delete(@Param() params): Promise<Product[]> {
        return this.productService.delete(params.id)
    }
}
