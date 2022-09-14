import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarModel from '../../../models/Car.model';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Model', () => {
  const carModel = new CarModel();
  const validId = '62cf1fc6498565d94eba52cd';
  const invalidId = 'id Inválido';

  beforeEach(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('searching a car', () => {
    it('successfully found', async () => {
      const carFound = await carModel.readOne(validId);
      expect(carFound).to.be.deep.equal(carMockWithId);
    });

    it('_id is not valid', async () => {
      try {
        await carModel.readOne(invalidId);
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('searching a list of car', () => {
    it('sucessfully found', async () => {
      sinon.stub(Model, 'find').resolves([carMockWithId]);
      const carList = await carModel.read();
      expect(carList).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('deleting a car', () => {
    it('sucessfully deletion', async () => {
      sinon.stub(Model, 'findByIdAndDelete').resolves('removido');
      const deleted = await carModel.delete(validId);
      expect(deleted).to.be.equal('removido');
    });

    it('id not valid', async () => {
      try {
        await carModel.delete(invalidId);
      } catch (error: any) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    });
  });

  describe('uodated a car', () => {
    it('sucess', async () => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
      const updated = await carModel.update(validId, carMock);
      expect(updated).to.be.deep.equal(carMockWithId);
    });

    it('id not valid', async () => {
      try {
        await carModel.update(invalidId, carMock);
      } catch (error: any) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    });
  });
});
