import { Injectable, Scope } from '@nestjs/common';
import { Cart } from '../../models/cart.model';
import { ICartRepository } from './cart.repository.interface';
import { ICartFactory } from '../../factory/cart/cart.factory.interface';

@Injectable({ scope: Scope.DEFAULT })
export class CartRepository implements ICartRepository {
  private carts: Cart[];

  constructor(private cartFactory: ICartFactory) {
    this.carts = cartFactory.generateCartsWithItem();
  }

  findById(id: number): Cart {
    return this.carts.find((cart) => cart.id === id);
  }
}
