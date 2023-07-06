import { Customer } from '../../models/customer.model';

export abstract class ICustomerRepository {
  abstract findById(id: number): Customer;
}
