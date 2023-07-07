import { Injectable } from '@nestjs/common';
import { Organization } from '../../models/organization.model';
import { IOrganizationFactory } from './organization.factory.interface';

@Injectable()
export class OrganizationFactory implements IOrganizationFactory {
  generateOrganization(): Organization[] {
    return [
      {
        id: 1,
        name: 'Projeto A',
        created: new Date(),
        updated: new Date(),
      },
      {
        id: 2,
        name: 'Projeto B',
        created: new Date(),
        updated: new Date(),
      },
    ];
  }
}
