import { z } from 'zod';
import { IVehicle } from './IVehicle';

const MotorCycleZodSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().positive().int().lte(2500),
});

export type IMotorCycle = IVehicle & z.infer<typeof MotorCycleZodSchema>;

export { MotorCycleZodSchema };
