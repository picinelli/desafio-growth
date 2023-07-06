import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SaveOportunityService } from '../services/save-oportunity.service';

@Controller('/cart')
export class CartController {
  constructor(private readonly saveOportunityService: SaveOportunityService) {}

  @MessagePattern('cart-abandoned')
  async sendMessage(
    @Payload() payload: SendAbandonedCartMessage,
  ): Promise<void> {
    this.saveOportunityService.sendAbandonedCartToCRM(payload.id);
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
