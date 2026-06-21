import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { checkBotId } from "botid/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendContactNotification } from "@/lib/email";

const ATTACHMENT_BUCKET = "applications";
const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024; // 4 MB
const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function asString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  const verification = await checkBotId();
  if (verification.isBot) {
    return NextResponse.json(
      { error: "Access denied" },
      { status: 403 },
    );
  }

  const form = await request.formData();
  const name = asString(form.get("name")).trim();
  const email = asString(form.get("email")).trim();
  const phone = asString(form.get("phone")).trim();
  const company = asString(form.get("company")).trim();
  const inquiryType = asString(form.get("inquiryType")).trim() || "advisory";
  const subject = asString(form.get("subject")).trim();
  const linkedinUrl = asString(form.get("linkedinUrl")).trim();
  const role = asString(form.get("role")).trim();
  const aiInterest = asString(form.get("aiInterest")).trim();
  const currentEhr = asString(form.get("currentEhr")).trim();

  // The advisory contact form uses "painPoint" as the primary message. Fall back
  // to a legacy "message" field so the endpoint stays backward compatible.
  const message =
    asString(form.get("painPoint")).trim() || asString(form.get("message")).trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  // Fold the structured advisory fields into the stored message so nothing is
  // lost in the existing contact_submissions schema.
  const storedMessage = [
    aiInterest ? `AI interest area: ${aiInterest}` : null,
    currentEhr ? `Current EHR: ${currentEhr}` : null,
    role ? `Role: ${role}` : null,
  ]
    .filter((line): line is string => line !== null)
    .concat(["", message])
    .join("\n")
    .trim();

  const supabase = getSupabaseAdmin();

  // Optional resume attachment.
  let attachmentPath: string | null = null;
  let attachmentName: string | null = null;
  let attachmentBuffer: Buffer | null = null;

  const file = form.get("attachment");
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { error: "Attachment too large (max 4 MB)" },
        { status: 413 },
      );
    }
    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Unsupported attachment type (use PDF, DOC, or DOCX)" },
        { status: 415 },
      );
    }

    const ext = file.name.includes(".")
      ? file.name.slice(file.name.lastIndexOf(".") + 1).toLowerCase()
      : "bin";
    const path = `${randomUUID()}.${ext}`;
    attachmentBuffer = Buffer.from(await file.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from(ATTACHMENT_BUCKET)
      .upload(path, attachmentBuffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return NextResponse.json(
        { error: "Failed to upload attachment" },
        { status: 500 },
      );
    }

    attachmentPath = path;
    attachmentName = file.name;
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone: phone || null,
    company: company || null,
    inquiry_type: inquiryType,
    subject: subject || null,
    message: storedMessage,
    linkedin_url: linkedinUrl || null,
    attachment_path: attachmentPath,
    attachment_name: attachmentName,
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
      linkedinUrl,
      role,
      aiInterest,
      currentEhr,
      attachment:
        attachmentBuffer && attachmentName
          ? { filename: attachmentName, content: attachmentBuffer }
          : null,
    });
  } catch (emailErr) {
    console.error("Email notification failed:", emailErr);
  }

  return NextResponse.json({ success: true });
}
