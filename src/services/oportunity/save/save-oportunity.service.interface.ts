import { Cart } from '../../../models/cart.model';

export abstract class ISaveOportunityService {
  abstract execute(id: number): Cart | void;
}
