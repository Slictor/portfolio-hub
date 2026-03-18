export type InterviewLevel = "internship" | "junior" | "senior";

export type InterviewTopic =
  | "frontend"
  | "backend"
  | "fullstack"
  | "dotnet"
  | "react"
  | "general";

export interface InterviewConfig {
  level: InterviewLevel;
  topic: InterviewTopic;
}

export const LEVEL_LABELS: Record<InterviewLevel, string> = {
  internship: "Praktik",
  junior: "Junior",
  senior: "Senior",
};

export const TOPIC_LABELS: Record<InterviewTopic, string> = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Fullstack",
  dotnet: ".NET",
  react: "React",
  general: "Generell",
};
