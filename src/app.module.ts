import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { SaveOportunityService } from './services/save-oportunity.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { CartFactory } from './factory/cart.factory';
import { CartRepository } from './repositories/cart/cart.repository';
import { CustomerFactory } from './factory/customer.factory';
import { CustomerRepository } from './repositories/customer.repository';
import { OrganizationFactory } from './factory/organization.factory';
import { OrganizationRepository } from './repositories/organization.repository';
import { CrmFactory } from './factory/crm.factory';
import { CrmRepository } from './repositories/crm.repository';
import { OportunityRepository } from './repositories/oportunity.repository';
import { FindOportunityService } from './services/find-oportunity.service';
import { OportunityController } from './controllers/oportunity.controller';
import { CartController } from './controllers/cart.controller';
import { ICartRepository } from './repositories/cart/cart.repository.interface';
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
  controllers: [AppController, CartController, OportunityController],
  providers: [
    SaveOportunityService,
    CartFactory,
    { provide: ICartRepository, useClass: CartRepository },
    CartRepository,
    CustomerFactory,
    CustomerRepository,
    OrganizationFactory,
    OrganizationRepository,
    CrmFactory,
    CrmRepository,
    OportunityRepository,
    FindOportunityService,
  ],
})
export class AppModule {}
