import { Resend } from "resend";

let cached: Resend | null = null;

function getResend(): Resend {
  if (cached) return cached;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }
  cached = new Resend(apiKey);
  return cached;
}

const INQUIRY_LABEL: Record<string, string> = {
  candidate: "Candidate",
  employer: "Employer",
  general: "General inquiry",
};

type ContactSubmission = {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  inquiryType: string;
  subject?: string | null;
  message: string;
  linkedinUrl?: string | null;
  attachment?: {
    filename: string;
    content: Buffer;
  } | null;
};

export async function sendContactNotification(s: ContactSubmission): Promise<void> {
  const resend = getResend();
  const inquiry = INQUIRY_LABEL[s.inquiryType] ?? s.inquiryType;

  const subject = `New ${inquiry} contact from ${s.name}`;
  const text = [
    `Name:     ${s.name}`,
    `Email:    ${s.email}`,
    `Phone:    ${s.phone || "—"}`,
    `Company:  ${s.company || "—"}`,
    `Inquiry:  ${inquiry}`,
    `Subject:  ${s.subject || "—"}`,
    `LinkedIn: ${s.linkedinUrl || "—"}`,
    `Resume:   ${s.attachment ? s.attachment.filename + " (attached)" : "—"}`,
    ``,
    `Message:`,
    s.message,
    ``,
    `—`,
    `Reply directly to this email to respond to ${s.name}.`,
  ].join("\n");

  await resend.emails.send({
    from: "Mended Health IT <contact@mendedhealthit.com>",
    to: "justincoop08@gmail.com",
    replyTo: s.email,
    subject,
    text,
    attachments: s.attachment
      ? [
          {
            filename: s.attachment.filename,
            content: s.attachment.content,
          },
        ]
      : undefined,
  });
}
