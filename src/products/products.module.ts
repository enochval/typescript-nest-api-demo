import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
