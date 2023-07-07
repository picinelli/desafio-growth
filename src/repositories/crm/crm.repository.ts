import { Injectable, Scope } from '@nestjs/common';
import { Crm } from '../../models/crm.model';
import { ICrmFactory } from '../../factory/crm/crm.factory.interface';
import { ICrmRepository } from './crm.repository.interface';

@Injectable({ scope: Scope.DEFAULT })
export class CrmRepository implements ICrmRepository {
  private crms: Crm[];

  constructor(private crmFactory: ICrmFactory) {
    this.crms = crmFactory.generateCrm();
  }

  findByOrganizationId(id: number): Crm {
    return this.crms.find((crm) => crm.organizationId === id);
  }
}
