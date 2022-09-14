import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import { ICar } from '../../../interfaces/ICar';
import CarModel from '../../../models/Car.model';
import CarService from '../../../services/Car.service';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  beforeEach(() => sinon.restore());

  describe('Create Car', () => {
    it('Success', async () => {
      sinon.stub(carModel, 'create').resolves(carMockWithId);
      const carCreated = await carService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      let error;
      try {
        await carService.create({} as ICar);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
      sinon.stub(carModel, 'readOne').resolves(carMockWithId);
      const carFound = await carService.readOne(carMockWithId._id);

      expect(carFound).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      sinon.stub(carModel, 'readOne').resolves(null);
      let error;
      try {
        await carService.readOne(carMockWithId._id);
      } catch (err: any) {
        error = err;
      }

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });

  describe('Read Car', () => {
    it('Sucess', async () => {
      sinon.stub(carModel, 'read').resolves([carMockWithId]);
      const allCars = await carService.read();
      expect(allCars).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('Delete Car', () => {
    it('Success', async () => {
      sinon.stub(carModel, 'delete').resolves(carMockWithId);
      const carDeleted = await carService.delete(carMockWithId._id);
      expect(carDeleted).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      sinon.stub(carModel, 'delete').resolves(null);
      let error;
      try {
        await carService.delete(carMockWithId._id);
      } catch (err: any) {
        error = err;
      }
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });

  describe('Updated Car', () => {
    it('Sucess', async () => {
      sinon.stub(carModel, 'update').resolves(carMockWithId);
      const updatedCar = await carService.update(carMockWithId._id, carMock);
      expect(updatedCar).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      sinon.stub(carModel, 'update').resolves(null);
      let erro;
      try {
        await carService.update(carMockWithId._id, carMock);
      } catch (error: any) {
        erro = error;
      }
      expect(erro.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });

    it('Body incomplet', async () => {
      let error;
      try {
        await carService.update(carMockWithId._id, {} as ICar);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });
});
