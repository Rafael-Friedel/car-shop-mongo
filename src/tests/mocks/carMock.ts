import { ICar } from '../interfaces/ICar';

const carMock: ICar = {
  status: true,
  model: 'Fiat',
  year: 2022,
  color: 'Prata',
  buyValue: 25000,
  doorsQty: 4,
  seatsQty: 4,
};

const carMockWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  status: true,
  model: 'Fiat',
  year: 2022,
  color: 'Prata',
  buyValue: 25000,
  doorsQty: 4,
  seatsQty: 4,
};

export { carMock, carMockWithId };
