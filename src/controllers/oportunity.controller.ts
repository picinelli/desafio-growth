import { Controller, Get, Param } from '@nestjs/common';
import { Oportunity } from '../models/oportunity.model';
import { IListOportunityService } from '../services/oportunity/list/list-oportunity.service.interface';

@Controller('/oportunity')
export class OportunityController {
  constructor(private readonly findOportunityService: IListOportunityService) {}

  @Get('/organization/:organizationId')
  findByOrganizationId(
    @Param('organizationId') organizationId: any,
  ): Oportunity[] {
    organizationId = Number(organizationId);

    return this.findOportunityService.execute(organizationId);
  }
}
