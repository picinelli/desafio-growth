import { Injectable } from '@nestjs/common';
import { Cart } from '../models/cart.model';
import { CartHasItem } from '../models/cart-has-item.model';
import { Item } from '../models/item.model';

@Injectable()
export class CartFactory {
  generateCartsWithItem(): Cart[] {
    return [
      {
        id: 53,
        created: new Date(),
        updated: new Date(),
        customerId: 1,
        organizationId: 1,
        cartHasItem: [this.generateCartHasItem()],
      },
    ];
  }

  generateCartHasItem(): CartHasItem {
    return {
      id: 1,
      cartId: 53,
      itemId: 10,
      quantity: 5,
      item: this.generateItem(),
    };
  }

  generateItem(): Item {
    return {
      id: 10,
      created: new Date(),
      updated: new Date(),
      name: 'Produto com nome bem pensado',
      price: 10,
    };
  }
}
