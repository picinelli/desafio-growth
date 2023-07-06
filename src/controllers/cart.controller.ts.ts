import { Controller, Inject } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import Config from '../config/Config';
import { AppService } from '../services/app.service';

@Controller('/cart')
export class CartController {
  constructor(private readonly appService: AppService) {}
  // constructor(
  // @Inject('CART_ABANDONED_SERVICE')
  // private readonly cartAbandoned: CartAbandonedService,
  // ) {}

  @MessagePattern('cart-abandoned')
  async sendMessage(
    @Payload() payload: SendAbandonedCartMessage,
  ): Promise<void> {
    const { topic, message } = payload;
    console.log(payload);
    const id = 53;

    // return;
    this.appService.sendAbandonedCartToCRM(id);
  }
}

interface SendAbandonedCartMessage {
  id: number;
  items: [
    {
      id: number;
      name: string;
      quantity: number;
    },
  ];
  customer: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
}
