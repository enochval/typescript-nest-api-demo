import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpException, 
    HttpStatus, 
    Param, 
    Post, 
    UseFilters, 
    UseInterceptors 
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform/transform.interceptor';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
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
        const product = this.productService.findOne(para

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
