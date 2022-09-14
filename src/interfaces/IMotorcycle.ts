import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorCycleZodSchema = VehicleZodSchema.merge(
  z.object({
    category: z.enum(['Street', 'Custom', 'Trail']),
    engineCapacity: z.number().positive().int().lte(2500),
  }),
);

export type IMotorcycle = z.infer<typeof MotorCycleZodSchema>;

export { MotorCycleZodSchema };
