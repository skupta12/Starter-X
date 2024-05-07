import { z } from "zod";
  
export const schema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
    phone: z.string().optional(),
    services: z.string().optional(),
    text: z.string().optional()
  });