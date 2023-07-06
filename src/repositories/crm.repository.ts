import { Injectable, Scope } from '@nestjs/common';
import { Crm } from '../models/crm.model';
import { CrmFactory } from '../factory/crm.factory';

@Injectable({ scope: Scope.DEFAULT })
export class CrmRepository {
  private crms: Crm[];

  constructor(private crmFactory: CrmFactory) {
    this.crms = crmFactory.generateCrm();
  }

  findByOrganizationId(id: number): Crm {
    return this.crms.find((crm) => crm.organizationId === id);
  }
}
