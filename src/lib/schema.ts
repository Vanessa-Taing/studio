import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).optional().or(z.literal('')),
});

export type ConsultationData = z.infer<typeof consultationSchema>;
