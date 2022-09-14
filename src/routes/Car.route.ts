import { Router } from 'express';
import CarController from '../controllers/Car.controller';
import CarModel from '../models/Car.model';
import CarService from '../services/Car.service';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post('/', (req, res) => carController.create(req, res));
route.get('/:id', (req, res) => carController.readOne(req, res));
route.get('/', (req, res) => carController.read(req, res));
route.delete('/:id', (req, res) => carController.delete(req, res));
route.put('/:id', (req, res) => carController.update(req, res));

export default route;
