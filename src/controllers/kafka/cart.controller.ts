import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ISaveOportunityService } from '../../services/oportunity/save/save-oportunity.service.interface';

@Controller()
export class CartController {
  constructor(private readonly saveOportunityService: ISaveOportunityService) {}

  @MessagePattern('cart-abandoned')
  async sendMessage(
    @Payload() payload: SendAbandonedCartMessage,
  ): Promise<void> {
    this.saveOportunityService.execute(payload.id);
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
