import { z } from 'zod';
import IVehicle from './IVehicle.interface';

const CarZodSchema = z.object({
  doorsQty: z.number().positive().int().gte(2)
    .lte(4),
  seatsQty: z.number().positive().int().gte(2)
    .lte(7),
});

type ICar = IVehicle & z.infer<typeof CarZodSchema>;

export default ICar;
export { CarZodSchema };
