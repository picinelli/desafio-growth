import { Cart } from './cart.model';
import { Item } from './item.model';

export interface CartHasItem {
  id: number;
  quantity: number;
  itemId: number;
  item?: Item;
  cartId: number;
  cart?: Cart;
}
