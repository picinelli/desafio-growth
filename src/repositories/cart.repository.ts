import { Injectable, Logger } from '@nestjs/common';
import { CartFactory } from '../factory/cart.factory';
import { Cart } from '../models/Cart';

@Injectable()
export class CartRepository {
  private carts: Cart[];

  constructor(private cartFactory: CartFactory) {
    this.carts = cartFactory.generateCarts();
  }

  findById(id: number): Cart {
    return this.carts.find((cart) => cart.id === id);
  }
}
