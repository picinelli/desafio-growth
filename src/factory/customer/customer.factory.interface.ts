import { Customer } from '../../models/customer.model';

export abstract class ICustomerFactory {
  abstract generateCustomer(): Customer[];
}
