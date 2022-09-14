import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle.controller';
import MotorcycleModel from '../models/Motorcycle.model';
import MotorcycleService from '../services/Motorcycle.service';

const route = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

route.post('/', (req, res) => motorcycleController.create(req, res));
route.get('/:id', (req, res) => motorcycleController.readOne(req, res));
route.get('/', (req, res) => motorcycleController.read(req, res));
route.delete('/:id', (req, res) => motorcycleController.delete(req, res));
route.put('/:id', (req, res) => motorcycleController.update(req, res));

export default route;