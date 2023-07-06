import { HttpException, Injectable } from '@nestjs/common';
import { Crm } from '../../../models/crm.model';
import { Oportunity } from '../../../models/oportunity.model';
import { IListOportunityService } from './list-oportunity.service.interface';
import { IOportunityRepository } from '../../../repositories/oportunity/oportunity.repository.interface';
import { ICrmRepository } from '../../../repositories/crm/crm.repository.interface';

@Injectable()
export class ListOportunityService implements IListOportunityService {
  constructor(
    private crmRepository: ICrmRepository,
    private oportunityRepository: IOportunityRepository,
  ) {}
  execute(organizationId: number): Oportunity[] {
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
