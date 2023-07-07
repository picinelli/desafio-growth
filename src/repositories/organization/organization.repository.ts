import { Injectable, Scope } from '@nestjs/common';
import { Organization } from '../../models/organization.model';
import { IOrganizationFactory } from '../../factory/organization/organization.factory.interface';
import { IOrganizationRepository } from './organization.repository.interface';

@Injectable({ scope: Scope.DEFAULT })
export class OrganizationRepository implements IOrganizationRepository {
  private organizations: Organization[];

  constructor(private organizationFactory: IOrganizationFactory) {
    this.organizations = organizationFactory.generateOrganization();
  }

  findById(id: number): Organization {
    return this.organizations.find((organization) => organization.id === id);
  }
}
