"use server";

import { consultationSchema, type ConsultationData } from "@/lib/schema";

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
