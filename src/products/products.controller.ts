import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Post, 
    Put, 
    UseFilters, 
    UseInterceptors 
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform/transform.interceptor';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Post()
    async create(@Body() product: CreateProductDTO): Promise<Product> {
        return await this.productService.create(product);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return await this.productService.all()
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Product> {
        return await this.productService.findOne(id)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return await this.productService.delete(id)
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateRecord: UpdateProductDTO): Promise<Product> {
        return this.productService.update(id, updateRecord)
    }
}
