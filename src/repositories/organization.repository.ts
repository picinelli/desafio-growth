import { Injectable, Scope } from '@nestjs/common';
import { Organization } from '../models/organization.model';
import { OrganizationFactory } from '../factory/organization.factory';

@Injectable({ scope: Scope.DEFAULT })
export class OrganizationRepository {
  private organizations: Organization[];

  constructor(private organizationFactory: OrganizationFactory) {
    this.organizations = organizationFactory.generateOrganization();
  }

  findById(id: number): Organization {
    return this.organizations.find((organization) => organization.id === id);
  }
}
