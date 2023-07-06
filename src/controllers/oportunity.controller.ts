import { Controller, Get, Param } from '@nestjs/common';
import { FindOportunityService } from '../services/find-oportunity.service';
import { Oportunity } from '../models/oportunity.model';

@Controller('/oportunity')
export class OportunityController {
  constructor(private readonly findOportunityService: FindOportunityService) {}

  @Get('/organization/:organizationId')
  findByOrganizationId(
    @Param('organizationId') organizationId: any,
  ): Oportunity[] {
    organizationId = Number(organizationId);
    return this.findOportunityService.listOportunitiesByOrganizationId(
      organizationId,
    );
  }
}
