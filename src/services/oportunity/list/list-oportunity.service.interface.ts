import { Oportunity } from '../../../models/oportunity.model';

export abstract class IListOportunityService {
  abstract execute(organizationId: number): Oportunity[];
}
