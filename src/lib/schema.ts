import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Please provide some details about your project." }),
});

export type ConsultationData = z.infer<typeof consultationSchema>;
