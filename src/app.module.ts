import { Module } from '@nestjs/common';
import { SaveOportunityService } from './services/oportunity/save/save-oportunity.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { CartFactory } from './factory/cart/cart.factory';
import { CartRepository } from './repositories/cart/cart.repository';
import { CustomerFactory } from './factory/customer/customer.factory';
import { CustomerRepository } from './repositories/customer/customer.repository';
import { OrganizationFactory } from './factory/organization/organization.factory';
import { OrganizationRepository } from './repositories/organization/organization.repository';
import { CrmFactory } from './factory/crm/crm.factory';
import { CrmRepository } from './repositories/crm/crm.repository';
import { OportunityRepository } from './repositories/oportunity/oportunity.repository';
import { ListOportunityService } from './services/oportunity/list/list-oportunity.service';
import { OportunityController } from './controllers/oportunity.controller';
import { CartController } from './controllers/kafka/cart.controller';
import { ICartRepository } from './repositories/cart/cart.repository.interface';
import { ICrmRepository } from './repositories/crm/crm.repository.interface';
import { ICustomerRepository } from './repositories/customer/customer.repository.interface';
import { IOportunityRepository } from './repositories/oportunity/oportunity.repository.interface';
import { IOrganizationRepository } from './repositories/organization/organization.repository.interface';
import { ICartFactory } from './factory/cart/cart.factory.interface';
import { ICrmFactory } from './factory/crm/crm.factory.interface';
import { ICustomerFactory } from './factory/customer/customer.factory.interface';
import { IOrganizationFactory } from './factory/organization/organization.factory.interface';
import { IListOportunityService } from './services/oportunity/list/list-oportunity.service.interface';
import { ISaveOportunityService } from './services/oportunity/save/save-oportunity.service.interface';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'CART_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [config.kafka.address],
          },
          consumer: {
            groupId: 'cart-abandoned',
          },
        },
      },
    ]),
  ],
  controllers: [CartController, OportunityController],
  providers: [
    { provide: ICartRepository, useClass: CartRepository },
    { provide: ICrmRepository, useClass: CrmRepository },
    { provide: ICustomerRepository, useClass: CustomerRepository },
    { provide: IOportunityRepository, useClass: OportunityRepository },
    { provide: IOrganizationRepository, useClass: OrganizationRepository },
    { provide: ICartFactory, useClass: CartFactory },
    { provide: ICrmFactory, useClass: CrmFactory },
    { provide: ICustomerFactory, useClass: CustomerFactory },
    { provide: IOrganizationFactory, useClass: OrganizationFactory },
    { provide: IListOportunityService, useClass: ListOportunityService },
    { provide: ISaveOportunityService, useClass: SaveOportunityService },
  ],
})
export class AppModule {}
