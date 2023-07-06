import { Crm } from '../../models/crm.model';

export abstract class ICrmRepository {
  abstract findByOrganizationId(id: number): Crm;
}
