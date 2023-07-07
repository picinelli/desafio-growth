import { Injectable } from '@nestjs/common';
import { Cart } from '../../models/cart.model';
import { CartHasItem } from '../../models/cart-has-item.model';
import { Item } from '../../models/item.model';
import { ICartFactory } from './cart.factory.interface';

@Injectable()
export class CartFactory implements ICartFactory {
  private cartHasItemAmount = 0;

  generateCartsWithItem(): Cart[] {
    return [
      {
        id: 53,
        created: new Date(),
        updated: new Date(),
        customerId: 1,
        organizationId: 1,
        cartHasItem: [this.generateCartHasItem(53)],
      },
      {
        id: 54,
        created: new Date(),
        updated: new Date(),
        customerId: 1,
        organizationId: 2,
        cartHasItem: [this.generateCartHasItem(54)],
      },
    ];
  }

  generateCartHasItem(cartId: number): CartHasItem {
    this.cartHasItemAmount++;

    return {
      id: this.cartHasItemAmount,
      cartId: cartId,
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
