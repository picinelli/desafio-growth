import { Injectable, Scope } from '@nestjs/common';
import { CartFactory } from '../../factory/cart.factory';
import { Cart } from '../../models/cart.model';
import { ICartRepository } from './cart.repository.interface';

@Injectable({ scope: Scope.DEFAULT })
export class CartRepository implements ICartRepository {
  private carts: Cart[];

  constructor(private cartFactory: CartFactory) {
    this.carts = cartFactory.generateCartsWithItem();
  }

  findById(id: number): Cart {
    return this.carts.find((cart) => cart.id === id);
  }
}
