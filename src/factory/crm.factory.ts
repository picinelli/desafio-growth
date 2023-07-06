import { Injectable } from '@nestjs/common';
import { Organization } from '../models/organization.model';
import { Crm } from '../models/crm.model';

@Injectable()
export class CrmFactory {
  generateCrm(): Crm[] {
    return [
      {
        id: 1,
        name: 'Projeto A',
        organizationId: 1,
        created: new Date(),
        updated: new Date(),
      },
    ];
  }
}
