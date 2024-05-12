import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    products: Product[] = []

    create(product: Product): Product[]  {
        this.products.push(product)
        return this.products
    }

    all(): Product[] {
        return this.products
    }

    findOne(id: string): Product {
        return this.products.find(p => p.id === id)
    }

    delete(id: string): Product[] {
        this.products.splice(
            this.products.findIndex(p => p.id === id),
            1
        )

        return this.products
    }
}
