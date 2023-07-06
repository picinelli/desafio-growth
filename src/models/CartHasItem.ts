import { Cart } from './Cart';
import { Item } from './Item';

export interface CartHasItem {
  id: number;
  quantity: number;
  itemId: number;
  item?: Item;
  cartId: number;
  cart?: Cart;
}
