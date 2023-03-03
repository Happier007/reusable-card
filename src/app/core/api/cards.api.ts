import {Observable, of} from 'rxjs';

import {AUTO_PARTS_MOCK} from '../../main/mock/auto-parts.mock';
import {CARS_MOCK} from '../../main/mock/cars.mock';
import {IAutoPart} from '../interfaces/auto-parts/auto-part.interfase';
import {ICar} from '../interfaces/car/car.interfase';

export class CardsApiService {
  cars(): Observable<ICar[]> {
    return of(CARS_MOCK);
  }

  autoParts(): Observable<IAutoPart[]> {
    return of(AUTO_PARTS_MOCK);
  }
}
