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
  advisory: "AI readiness call",
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
  role?: string | null;
  aiInterest?: string | null;
  currentEhr?: string | null;
  attachment?: {
    filename: string;
    content: Buffer;
  } | null;
};

export async function sendContactNotification(s: ContactSubmission): Promise<void> {
  const resend = getResend();
  const inquiry = INQUIRY_LABEL[s.inquiryType] ?? s.inquiryType;

  const subject = `New ${inquiry} from ${s.name}`;
  const text = [
    `Name:         ${s.name}`,
    `Email:        ${s.email}`,
    `Organization: ${s.company || "n/a"}`,
    `Role:         ${s.role || "n/a"}`,
    `AI interest:  ${s.aiInterest || "n/a"}`,
    `Current EHR:  ${s.currentEhr || "n/a"}`,
    `Inquiry:      ${inquiry}`,
    `Subject:      ${s.subject || "n/a"}`,
    `Phone:        ${s.phone || "n/a"}`,
    `LinkedIn:     ${s.linkedinUrl || "n/a"}`,
    `Resume:       ${s.attachment ? s.attachment.filename + " (attached)" : "n/a"}`,
    ``,
    `Message:`,
    s.message,
    ``,
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
