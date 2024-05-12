import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(ProductsController)
    // consumer.apply(LoggerMiddleware).forRoutes({ path: 'products', method: RequestMethod.GET })
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'products', method: RequestMethod.GET })
      .forRoutes(ProductsController)
  }
}
