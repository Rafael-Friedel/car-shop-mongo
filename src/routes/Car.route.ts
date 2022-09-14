import { Router } from 'express';
import CarController from '../controllers/Car.controller';
import CarModel from '../models/Car.model';
import CarService from '../services/Car.service';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post('/frame', (req, res) => carController.create(req, res));
route.get('/frame/:id', (req, res) => carController.readOne(req, res));
route.get('/frame', (req, res) => carController.read(req, res));
route.delete('/frame/:id', (req, res) => carController.delete(req, res));
route.put('/car/:id', (req, res) => carController.update(req, res));

export default route;
