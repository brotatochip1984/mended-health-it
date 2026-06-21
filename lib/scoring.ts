import {
  assessment,
  responseKey,
  RESPONSE_MAX,
  RESPONSE_MIN,
  type AssessmentTier,
  type ResponseMap,
} from "@/lib/assessment";

export interface CategoryResult {
  name: string;
  weight: number;
  /** Average raw response (1-5) across answered questions in the category. */
  rawAverage: number;
  /** Category maturity normalized to 0-100. */
  percent: number;
  /** Points this category contributes to the overall score (0-weight). */
  weightedPoints: number;
  answered: number;
  total: number;
}

export interface AssessmentResult {
  /** Overall readiness score, 0-100. */
  score: number;
  tier: AssessmentTier;
  categories: CategoryResult[];
  /** Lowest-maturity categories, weighted by importance, worst first. */
  topRisks: CategoryResult[];
  nextSteps: string[];
  suggestedPackage: string;
  answered: number;
  total: number;
  complete: boolean;
}

/** Normalize a 1-5 raw average to a 0-100 maturity percent. */
function toPercent(rawAverage: number): number {
  const span = RESPONSE_MAX - RESPONSE_MIN;
  return ((rawAverage - RESPONSE_MIN) / span) * 100;
}

export function resolveTier(score: number): AssessmentTier {
  const match = assessment.tiers.find((t) => score >= t.min && score <= t.max);
  // Fall back to the closest bounding tier so a value never returns undefined.
  return match ?? assessment.tiers[assessment.tiers.length - 1];
}

function suggestPackage(tier: AssessmentTier): string {
  switch (tier.name) {
    case "Not Ready":
      return "AI Readiness Snapshot, then an AI Governance Sprint to establish guardrails before any vendor spend.";
    case "Foundation Ready":
      return "AI Readiness Assessment to sequence low-risk administrative use cases and build a 90-day roadmap.";
    case "Pilot Ready":
      return "Vendor Selection Advisory to move from use case clarity to a credible, evidence-backed shortlist.";
    case "Scale Ready":
      return "Implementation Workforce Planning plus Vendor Selection Advisory to expand validated use cases safely.";
    case "Enterprise AI Mature":
      return "Ongoing Advisory Retainer to sustain governance, monitoring, and disciplined vendor decisions at scale.";
    default:
      return "AI Readiness Assessment to establish a baseline and prioritized roadmap.";
  }
}

function buildNextSteps(tier: AssessmentTier, topRisks: CategoryResult[]): string[] {
  const steps: string[] = [];

  switch (tier.name) {
    case "Not Ready":
      steps.push(
        "Stand up an AI governance owner and a basic review process before approving any tool.",
        "Publish a shadow-AI policy so staff know what is permitted today.",
      );
      break;
    case "Foundation Ready":
      steps.push(
        "Identify two or three high-burden, low-risk administrative workflows for a first pilot.",
        "Define success metrics and a benefit owner before evaluating vendors.",
      );
      break;
    case "Pilot Ready":
      steps.push(
        "Run structured pilots with human-in-the-loop validation and clear monitoring.",
        "Require evidence and references from vendors, not demos.",
      );
      break;
    case "Scale Ready":
      steps.push(
        "Expand validated use cases department by department with a staffing and change plan.",
        "Formalize post-deployment monitoring and escalation paths.",
      );
      break;
    case "Enterprise AI Mature":
      steps.push(
        "Benchmark performance across departments and retire underperforming tools.",
        "Mature workforce AI literacy into a formal, ongoing capability.",
      );
      break;
  }

  // Add targeted guidance for the weakest categories.
  for (const risk of topRisks) {
    steps.push(`Strengthen ${risk.name} (currently ${Math.round(risk.percent)}% mature).`);
  }

  return steps;
}

export function scoreAssessment(responses: ResponseMap): AssessmentResult {
  let total = 0;
  let answered = 0;

  const categories: CategoryResult[] = assessment.categories.map((category, ci) => {
    const values: number[] = [];
    category.questions.forEach((_, qi) => {
      const value = responses[responseKey(ci, qi)];
      if (typeof value === "number") values.push(value);
    });

    total += category.questions.length;
    answered += values.length;

    const rawAverage =
      values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
    const percent = values.length > 0 ? toPercent(rawAverage) : 0;
    const weightedPoints = (percent / 100) * category.weight;

    return {
      name: category.name,
      weight: category.weight,
      rawAverage,
      percent,
      weightedPoints,
      answered: values.length,
      total: category.questions.length,
    };
  });

  const score = Math.round(
    categories.reduce((sum, c) => sum + c.weightedPoints, 0),
  );
  const tier = resolveTier(score);

  // Risk = low maturity amplified by category weight. Surface the worst three
  // categories that have at least one answer.
  const topRisks = categories
    .filter((c) => c.answered > 0)
    .map((c) => ({ category: c, riskScore: (100 - c.percent) * c.weight }))
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 3)
    .map((entry) => entry.category);

  return {
    score,
    tier,
    categories,
    topRisks,
    nextSteps: buildNextSteps(tier, topRisks),
    suggestedPackage: suggestPackage(tier),
    answered,
    total,
    complete: answered === total,
  };
}
