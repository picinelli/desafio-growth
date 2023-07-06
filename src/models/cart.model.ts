import { CartHasItem } from './cart-has-item.model';

export interface Cart {
  id: number;
  customerId: number;
  organizationId: number;
  created: Date;
  updated: Date;
  cartHasItem: CartHasItem[];
}
