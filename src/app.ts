import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import routerCar from './routes/Car.route';
import routerMotorcycle from './routes/Motorcycle.route';

const app = express();
app.use(express.json());
app.use('/cars', routerCar);
app.use('/motorcycles', routerMotorcycle);
app.use(errorHandler);

export default app;
