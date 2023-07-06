import { Cart } from '../../models/cart.model';
import { CartHasItem } from '../../models/cart-has-item.model';
import { Item } from '../../models/item.model';

export abstract class ICartFactory {
  abstract generateCartsWithItem(): Cart[];

  abstract generateCartHasItem(): CartHasItem;

  abstract generateItem(): Item;
}
