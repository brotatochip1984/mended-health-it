import schema from "@/data/readiness-assessment.json";

export interface AssessmentTier {
  name: string;
  min: number;
  max: number;
  description: string;
}

export interface AssessmentCategory {
  name: string;
  weight: number;
  questions: string[];
}

export interface AssessmentSchema {
  title: string;
  scoreRange: { min: number; max: number };
  tiers: AssessmentTier[];
  categories: AssessmentCategory[];
}

export const assessment = schema as AssessmentSchema;

/**
 * Responses are keyed by `"<categoryIndex>-<questionIndex>"` with a 1-5 value.
 * This keeps the shape stable for localStorage persistence and JSON export.
 */
export type ResponseMap = Record<string, number>;

export const RESPONSE_MIN = 1;
export const RESPONSE_MAX = 5;

export function responseKey(categoryIndex: number, questionIndex: number): string {
  return `${categoryIndex}-${questionIndex}`;
}

export function totalQuestionCount(): number {
  return assessment.categories.reduce((sum, c) => sum + c.questions.length, 0);
}
