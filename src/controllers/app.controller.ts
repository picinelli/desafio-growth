import { Controller, Get } from '@nestjs/common';
import { SaveOportunityService } from '../services/save-oportunity.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: SaveOportunityService) {}

  @Get()
  getHello(): string {
    return 'Hello World';
  }
}
