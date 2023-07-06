import { Injectable, Logger } from '@nestjs/common';
import { CartRepository } from '../repositories/cart.repository';
import { Cart } from '../models/Cart';

@Injectable()
export class AppService {
  constructor(private cartRepository: CartRepository) {}
  sendAbandonedCartToCRM(id: number): Cart {
    const cart = this.cartRepository.findById(id);
    //TODO: a entidade cart na verdade deve ter as props do banco (com orgId por ex.)
    //TODO: a as informações que eu coloquei agora, na verdade vem da mensagem

    if (cart) {
      Logger.log('WOW, você é bom mesmo, o carrinho foi Loggado!');
    }

    return cart;
  }
}
