import { z } from "zod";
  
export const schema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
    phone: z.string().optional(),
    services: z.string().optional(),
    text: z.string().optional()
  });

  export const errorMessages = {
    email: "Please enter a valid email address.",
    name: "Please enter a name with at least 2 characters.",
    phone: "Please enter a valid phone number.",
    // services: "Please enter a services with at least 3 character",
  };