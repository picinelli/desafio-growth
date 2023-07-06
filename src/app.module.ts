import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CartController } from './controllers/cart.controller.ts';
import { ConfigModule } from '@nestjs/config';
import { CartFactory } from './factory/cart.factory';
import { CartRepository } from './repositories/cart.repository';
// import { CartAbandonedService } from './services/cart-abandoned.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'CART_ABANDONED_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'cart-abandoned',
          },
        },
      },
    ]),
  ],
  controllers: [AppController, CartController],
  providers: [AppService, CartFactory, CartRepository],
})
export class AppModule {}
