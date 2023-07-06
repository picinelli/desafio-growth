import { Organization } from '../../models/organization.model';

export abstract class IOrganizationFactory {
  abstract generateOrganization(): Organization[];
}
