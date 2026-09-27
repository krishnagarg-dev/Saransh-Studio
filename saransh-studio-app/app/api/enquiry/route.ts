import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  eventType: z.string().min(1, "Event type is required"),
  eventDate: z.string().min(1, "Event date is required"),
  location: z.string().optional(),
  message: z.string().optional(),
});
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = enquirySchema.parse(body);
    const enquiry = await db.enquiry.create({
      data: {
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email || null,
        eventType: validatedData.eventType,
        eventDate: validatedData.eventDate,
        location: validatedData.location || null,
        message: validatedData.message || null,
      },
    });
    return NextResponse.json({ success: true, enquiry });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: (error as any).errors || error.issues }, { status: 400 });
    }
    console.error("Error submitting enquiry:", error);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}