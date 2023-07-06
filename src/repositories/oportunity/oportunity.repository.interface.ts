import { Oportunity } from '../../models/oportunity.model';

export abstract class IOportunityRepository {
  abstract listByCrmId(crmId: number);

  abstract findById(id: number): Oportunity;

  abstract save(oportunity: Oportunity): Oportunity;
}
