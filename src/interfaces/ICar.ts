import { z } from 'zod';
import { IVehicle } from './IVehicle';

const CarZodSchema = z.object({
  doorsQty: z.number().positive().int().gte(2)
    .lte(4),
  seatsQty: z.number().positive().int().gte(2)
    .lte(7),
});

export type ICar = IVehicle & z.infer<typeof CarZodSchema>;

export { CarZodSchema };