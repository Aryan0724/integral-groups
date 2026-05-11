// In-memory store for intelligence articles (replace with Supabase later)
export type ArticleType = "STRATEGIC_REPORT" | "SYSTEMS_ANALYSIS" | "ENGINEERING_ESSAY" | "FRAMEWORK";
export type ClearanceLevel = "PUBLIC" | "LEVEL_1" | "LEVEL_2";
export type ArticleStatus = "draft" | "published" | "archived";

export interface Article {
  id: string;
  title: string;
  type: ArticleType;
  clearance: ClearanceLevel;
  status: ArticleStatus;
  content: string;
  date: string;
  ref: string;
}

// Seed data matching what's shown on homepage
export const articlesStore: Article[] = [
  {
    id: "INT-01",
    title: "Future of Autonomous Systems",
    type: "STRATEGIC_REPORT",
    clearance: "LEVEL_1",
    status: "published",
    content: "An analysis of emerging autonomous systems across industrial, defense, and infrastructure sectors...",
    date: "2026.05.10",
    ref: "0x9901",
  },
  {
    id: "INT-02",
    title: "Engineering Intelligent Infrastructure",
    type: "SYSTEMS_ANALYSIS",
    clearance: "LEVEL_2",
    status: "published",
    content: "A deep systems analysis of what it means to build infrastructure that evolves with demand...",
    date: "2026.04.22",
    ref: "0x9902",
  },
  {
    id: "INT-03",
    title: "AI Systems and Human Coordination",
    type: "ENGINEERING_ESSAY",
    clearance: "LEVEL_1",
    status: "published",
    content: "The relationship between AI automation and human decision-making in high-stakes environments...",
    date: "2026.03.15",
    ref: "0x9903",
  },
  {
    id: "INT-04",
    title: "The Rise of Execution Ecosystems",
    type: "FRAMEWORK",
    clearance: "PUBLIC",
    status: "published",
    content: "A framework for understanding how modern organizations function as modular execution ecosystems...",
    date: "2026.02.08",
    ref: "0x9904",
  },
];
