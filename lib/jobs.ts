import type { Job } from "@/components/JobCard";

export const jobs: Job[] = [
  {
    id: "epic-analyst",
    title: "Epic Systems Analyst",
    location: "Phoenix, AZ (Hybrid)",
    type: "Contract-to-Hire",
    description:
      "Support Epic EHR implementation and optimization for a large health system. Requires Epic certification and 3+ years of clinical workflow experience.",
  },
  {
    id: "security-engineer",
    title: "Healthcare Cybersecurity Engineer",
    location: "Remote",
    type: "Full-Time",
    description:
      "Design and maintain security infrastructure for a multi-hospital network. HIPAA compliance, SIEM tools, and incident response experience required.",
  },
  {
    id: "data-engineer",
    title: "Health Data Engineer",
    location: "Scottsdale, AZ",
    type: "Contract",
    description:
      "Build ETL pipelines and data warehousing solutions for clinical and claims data. Experience with HL7/FHIR, SQL, and cloud platforms preferred.",
  },
  {
    id: "pm-clinical",
    title: "Clinical IT Project Manager",
    location: "Phoenix, AZ",
    type: "Full-Time",
    description:
      "Lead cross-functional teams through EHR migrations and clinical system rollouts. PMP or CAPM certification and healthcare experience required.",
  },
  {
    id: "helpdesk-lead",
    title: "Healthcare IT Help Desk Lead",
    location: "Tucson, AZ",
    type: "Contract-to-Hire",
    description:
      "Manage a team of support technicians serving clinical end-users. Experience with clinical applications, ticketing systems, and ITIL frameworks.",
  },
];
