"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message is too long"),
  website: z.string().optional(), // Honeypot field
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Extract form data
    const rawFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string, // Honeypot field
    };

    // Check honeypot field (anti-spam measure)
    if (rawFormData.website) {
      return {
        success: false,
        message: "Spam detected. Please try again.",
        errors: {},
      };
    }

    // Validate form data
    const validatedFields = contactFormSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please correct the errors below.",
        errors: {
          name: errors.name?.[0],
          email: errors.email?.[0],
          phone: errors.phone?.[0],
          message: errors.message?.[0],
        },
      };
    }

    // Simulate form processing (replace with actual email sending logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically:
    // 1. Send an email notification
    // 2. Save to database
    // 3. Send confirmation email to user
    // 4. Integrate with CRM system

    console.log("Contact form submission:", validatedFields.data);

    return {
      success: true,
      message:
        "Thank you for your message! We'll get back to you within 24 hours.",
      errors: {},
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      errors: {},
    };
  }
}
