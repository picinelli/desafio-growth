import { Crm } from '../../models/crm.model';

export abstract class ICrmFactory {
  abstract generateCrm(): Crm[];
}
