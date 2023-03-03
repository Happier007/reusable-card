import {ICar} from '../../core/interfaces/car/car.interfase';

export const CARS_MOCK: ICar[] = [
  {
    id: 1,
    type: 'Грузовик',
    icon: 'tech-1',
    carNumber: 'Р100ТТ 799',
    mileage: '2000 км',
    model: 'Scania TT280',
    yearOfCar: '2018',
    manufacturerCode: '№ 890',
    carInfoAccess: true,
    carInfo: {
      units: 2,
      sample: 6,
    },
    actions: [
      'download',
      'delete',
      'edit',
    ],
  },
  {
    id: 2,
    type: 'Грузовик',
    icon: 'tech-2',
    carNumber: 'Р100ТТ 799',
    mileage: '2000 км',
    model: 'Scania TT280',
    yearOfCar: '2018',
    manufacturerCode: '№ 890',
    carInfoAccess: true,
    carInfo: {
      units: 2,
    },
    actions: [
      'delete',
      'edit',
    ],
  },
  {
    id: 3,
    type: 'Грузовик',
    icon: 'tech-3',
    carNumber: 'Р100ТТ 799',
    mileage: '2000 км',
    model: 'Scania TT280',
    actions: [],
  },
  {
    id: 4,
    type: 'Грузовик',
    icon: 'tech-4',
    carNumber: 'Р100ТТ 799',
    mileage: '2000 км',
    model: 'Scania TT280',
    yearOfCar: '2018',
    manufacturerCode: '№ 890',
    carInfoAccess: true,
    carInfo: {
      units: 2,
      sample: 3,
    },
    actions: [
      'delete',
      'edit',
    ],
    detailInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
      ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
      ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
      ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
      ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]
