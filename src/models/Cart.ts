import { CartHasItem } from './CartHasItem';

export interface Cart {
  id: number;
  customerId: number;
  organizationId: number;
  created: Date;
  updated: Date;
  cartHasItem: CartHasItem[];
}
