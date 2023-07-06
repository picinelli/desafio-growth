import { Injectable } from '@nestjs/common';
import { Customer } from '../../models/customer.model';
import { ICustomerFactory } from './customer.factory.interface';

@Injectable()
export class CustomerFactory implements ICustomerFactory {
  generateCustomer(): Customer[] {
    return [
      {
        id: 1,
        email: 'email@email.com',
        firstName: 'Joao',
        lastName: 'da Silva',
        phone: '27999998888',
        created: new Date(),
        updated: new Date(),
      },
    ];
  }
}
