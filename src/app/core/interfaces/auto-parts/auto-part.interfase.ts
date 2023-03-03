import {IAutoPartProperty} from './auto-part-property.interfase';
import {IPartsInfo} from './parts-info.interfase';

export interface IAutoPart {
  id: number,
  icon: string,
  type: string,
  mileage: string,
  modelCar: string,
  code: string,
  properties?: IAutoPartProperty[],
  partsInfoAccess?: boolean,
  partsInfo?: IPartsInfo,
  actions: string[],
  detailInfo?: string
}
