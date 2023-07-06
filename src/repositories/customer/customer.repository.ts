import { Injectable, Scope } from '@nestjs/common';
import { Customer } from '../../models/customer.model';
import { ICustomerFactory } from '../../factory/customer/customer.factory.interface';

@Injectable({ scope: Scope.DEFAULT })
export class CustomerRepository {
  private customers: Customer[];

  constructor(private customerFactory: ICustomerFactory) {
    this.customers = customerFactory.generateCustomer();
  }

  findById(id: number): Customer {
    return this.customers.find((customer) => customer.id === id);
  }
}
