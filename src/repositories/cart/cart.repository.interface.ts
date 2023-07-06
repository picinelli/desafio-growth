import { Cart } from '../../models/cart.model';

export abstract class ICartRepository {
  abstract findById(id: number): Cart;
}
