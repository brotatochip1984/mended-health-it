import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: Request) {
  const verification = await checkBotId();
  if (verification.isBot) {
    return NextResponse.json(
      { error: "Access denied" },
      { status: 403 },
    );
  }

  const body = await request.json();
  const { name, email, phone, company, inquiryType, subject, message } = body;

  if (!name || !email || !inquiryType || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone: phone || null,
    company: company || null,
    inquiry_type: inquiryType,
    subject: subject || null,
    message,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 },
    );
  }

  try {
    await sendContactNotification({
      name,
      email,
      phone,
      company,
      inquiryType,
      subject,
      message,
    });
  } catch (emailErr) {
    console.error("Email notification failed:", emailErr);
  }

  return NextResponse.json({ success: true });
}
