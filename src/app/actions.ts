"use server";

import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).optional().or(z.literal('')),
});

export type ConsultationData = z.infer<typeof consultationSchema>;

export async function submitConsultationRequest(data: ConsultationData) {
  const parsed = consultationSchema.safeParse(data);

  if (!parsed.success) {
    return { 
      success: false, 
      message: "Invalid form data. Please check your inputs.", 
      errors: parsed.error.flatten().fieldErrors 
    };
  }

  // In a real-world application, you would save this data to a database (e.g., Firestore)
  // and update your analytics to track form submissions.
  console.log("New consultation request received:", parsed.data);
  // This console log simulates the 'Simple analytics to track the number of form submissions' feature.

  return { success: true, message: "Your request has been submitted successfully! We'll be in touch shortly." };
}
