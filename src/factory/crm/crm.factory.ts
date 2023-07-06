import { Injectable } from '@nestjs/common';
import { Crm } from '../../models/crm.model';
import { ICrmFactory } from './crm.factory.interface';

@Injectable()
export class CrmFactory implements ICrmFactory {
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
