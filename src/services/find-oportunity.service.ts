import { HttpException, Injectable } from '@nestjs/common';
import { CrmRepository } from '../repositories/crm.repository';
import { OportunityRepository } from '../repositories/oportunity.repository';
import { Crm } from '../models/crm.model';
import { Oportunity } from '../models/oportunity.model';

@Injectable()
export class FindOportunityService {
  constructor(
    private crmRepository: CrmRepository,
    private oportunityRepository: OportunityRepository,
  ) {}
  listOportunitiesByOrganizationId(organizationId: number): Oportunity[] {
    const crm = this.crmRepository.findByOrganizationId(organizationId);

    this.isCrmExistent(crm);

    const oportunities = this.oportunityRepository.listByCrmId(crm.id);

    return oportunities;
  }

  private isCrmExistent(crm: Crm) {
    if (!crm) {
      throw new HttpException('Não foi encontrado um CRM registrado', 404);
    }
  }
}
