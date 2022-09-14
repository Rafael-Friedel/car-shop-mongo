import { expect } from 'chai';
import { NextFunction, Request, Response } from 'express';
import * as sinon from 'sinon';
import CarController from '../../../controllers/Car.controller';
import CarModel from '../../../models/Car.model';
import CarService from '../../../services/Car.service';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Car', () => {
    it('Success', async () => {
      req.body = carMock;
      sinon.stub(carService, 'create').resolves(carMock);
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
      sinon.stub(carService, 'readOne').resolves(carMock);
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Read Car', () => {
    it('Sucess', async () => {
      sinon.stub(carService, 'read').resolves([carMockWithId]);
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMockWithId])).to.be
        .true;
    });
  });

  describe('Delete Car', () => {
    it('Success', async () => {
      req.params = { id: carMockWithId._id };
      sinon.stub(carService, 'delete').resolves(carMockWithId);
      await carController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be
        .true;
    });
  });

  describe('Update Car', () => {
    it('Sucess', async () => {
      req.params = { id: carMockWithId._id };
      sinon.stub(carService, 'update').resolves(carMockWithId);
      await carController.update(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be
        .true;
    });
  });
});
