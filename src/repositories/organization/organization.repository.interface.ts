import { Organization } from '../../models/organization.model';

export abstract class IOrganizationRepository {
  abstract findById(id: number): Organization;
}
