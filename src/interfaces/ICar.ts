import { z } from 'zod';

const CarZodSchema = z.object({
  doorsQty: z.number().positive().int().gte(2)
    .lte(4),
  seatsQty: z.number().positive().int().gte(2)
    .lte(7),
});

type ICar = z.infer<typeof CarZodSchema>;

export default ICar;
export { CarZodSchema };
