import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import routerCar from './routes/Car.route';

const app = express();
app.use(express.json());
app.use(routerCar);
app.use(errorHandler);

export default app;
