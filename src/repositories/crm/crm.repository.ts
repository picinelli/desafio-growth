import { Injectable, Scope } from '@nestjs/common';
import { Crm } from '../../models/crm.model';
import { ICrmFactory } from '../../factory/crm/crm.factory.interface';

@Injectable({ scope: Scope.DEFAULT })
export class CrmRepository {
  private crms: Crm[];

  constructor(private crmFactory: ICrmFactory) {
    this.crms = crmFactory.generateCrm();
  }

  findByOrganizationId(id: number): Crm {
    return this.crms.find((crm) => crm.organizationId === id);
  }
}
