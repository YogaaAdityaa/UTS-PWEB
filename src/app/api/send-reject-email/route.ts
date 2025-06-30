import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name } = await req.json();
  // Simulate sending email (replace with real email service integration)
  console.log(`Send rejection email to ${email} for ${name}`);
  // In production, integrate with an email API like SendGrid, Mailgun, etc.
  return NextResponse.json({ success: true });
}