import { Injectable, Scope } from '@nestjs/common';
import { CustomerFactory } from '../factory/customer.factory';
import { Customer } from '../models/customer.model';

@Injectable({ scope: Scope.DEFAULT })
export class CustomerRepository {
  private customers: Customer[];

  constructor(private customerFactory: CustomerFactory) {
    this.customers = customerFactory.generateCustomer();
  }

  findById(id: number): Customer {
    return this.customers.find((customer) => customer.id === id);
  }
}
