import { Injectable } from '@nestjs/common';
import { Organization } from '../models/organization.model';

@Injectable()
export class OrganizationFactory {
  generateOrganization(): Organization[] {
    return [
      {
        id: 1,
        name: 'Projeto A',
        created: new Date(),
        updated: new Date(),
      },
    ];
  }
}
