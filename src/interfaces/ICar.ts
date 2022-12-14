import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const CarZodSchema = VehicleZodSchema.merge(
  z.object({
    doorsQty: z.number().gte(2).lte(4),
    seatsQty: z.number().gte(2).lte(7),
  }),
);

export type ICar = z.infer<typeof CarZodSchema>;
