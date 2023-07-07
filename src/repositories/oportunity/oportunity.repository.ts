import { Injectable, Scope } from '@nestjs/common';
import { Oportunity } from '../../models/oportunity.model';
import { IOportunityRepository } from './oportunity.repository.interface';

@Injectable({ scope: Scope.DEFAULT })
export class OportunityRepository implements IOportunityRepository {
  private oportunities: Oportunity[] = [];

  listByCrmId(crmId: number) {
    return this.oportunities.filter((oportunity) => oportunity.crmId === crmId);
  }

  findById(id: number): Oportunity {
    return this.oportunities.find((oportunity) => oportunity.id === id);
  }

  save(oportunity: Oportunity): Oportunity {
    oportunity.id = this.oportunities.length + 1;

    this.oportunities.push(oportunity);

    return oportunity;
  }
}
