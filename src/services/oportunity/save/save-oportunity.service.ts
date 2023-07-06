import { Injectable, Logger } from '@nestjs/common';
import { Cart } from '../../../models/cart.model';
import { OrganizationRepository } from '../../../repositories/organization/organization.repository';
import { CrmRepository } from '../../../repositories/crm/crm.repository';
import { CustomerRepository } from '../../../repositories/customer/customer.repository';
import { OportunityRepository } from '../../../repositories/oportunity/oportunity.repository';
import { Oportunity } from '../../../models/oportunity.model';
import { CartHasItem } from '../../../models/cart-has-item.model';
import { Customer } from '../../../models/customer.model';
import { ICartRepository } from '../../../repositories/cart/cart.repository.interface';
import { ISaveOportunityService } from './save-oportunity.service.interface';
import { IOrganizationRepository } from '../../../repositories/organization/organization.repository.interface';
import { ICrmRepository } from '../../../repositories/crm/crm.repository.interface';
import { ICustomerRepository } from '../../../repositories/customer/customer.repository.interface';
import { IOportunityRepository } from '../../../repositories/oportunity/oportunity.repository.interface';

@Injectable()
export class SaveOportunityService implements ISaveOportunityService {
  constructor(
    private cartRepository: ICartRepository,
    private organizationRepository: IOrganizationRepository,
    private crmRepository: ICrmRepository,
    private customerRepository: ICustomerRepository,
    private oportunityRepository: IOportunityRepository,
  ) {}
  execute(id: number): Cart | void {
    const cart = this.cartRepository.findById(id);

    if (!cart) {
      return Logger.error('O carrinho informado não existe');
    }

    const organization = this.organizationRepository.findById(
      cart.organizationId,
    );

    if (!organization) {
      return Logger.error('A organização do carrinho informado não existe');
    }

    const crm = this.crmRepository.findByOrganizationId(organization.id);

    if (!crm) {
      return Logger.error('O CRM do carrinho informado não existe');
    }

    const customer = this.customerRepository.findById(cart.customerId);

    if (!customer) {
      return Logger.error('O consumidor do carrinho informado não existe');
    }

    const oportunity = this.buildOportunityObject(customer, cart, crm.id);

    const oportunityDB = this.oportunityRepository.save(oportunity);

    Logger.log(
      'Oportunidade salva: ',
      this.oportunityRepository.findById(oportunityDB.id),
    );

    return cart;
  }

  private buildOportunityObject(customer: Customer, cart: Cart, crmId: number) {
    const oportunity = new Oportunity();
    oportunity.crmId = crmId;
    oportunity.created = new Date();
    oportunity.updated = new Date();
    oportunity.customerEmail = customer.email;
    oportunity.customerName = `${customer.firstName} ${customer.lastName}`;
    oportunity.customerPhone = customer.phone;
    oportunity.observation = this.buildObservation(cart.cartHasItem);

    return oportunity;
  }

  private buildObservation(cartHasItems: CartHasItem[]) {
    let observation = '';

    cartHasItems.forEach((cartHasItem) => {
      observation =
        observation + `${cartHasItem.quantity}x ${cartHasItem.item.name} | `;
    });

    return observation;
  }
}
