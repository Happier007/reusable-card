import {ICarInfo} from './car-info.interfase';

export interface ICar {
  id: number,
  type: string,
  icon: string,
  carNumber: string,
  mileage: string,
  model: string,
  yearOfCar?: string,
  manufacturerCode?: string,
  carInfoAccess?: boolean,
  carInfo?: ICarInfo,
  actions: string[]
  detailInfo?: string,
}
