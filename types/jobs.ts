export type JobStatus = "active" | "applied" | "interview" | "closed";

export type JobCategory =
  | "frontend"
  | "backend"
  | "fullstack"
  | "design"
  | "devops"
  | "other";

export interface JobTip {
  id: string;
  company: string;
  role: string;
  link: string;
  description: string;
  category: JobCategory;
  status: JobStatus;
  postedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyContact {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone?: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export const STATUS_LABELS: Record<JobStatus, string> = {
  active: "Aktiv",
  applied: "Ansökt",
  interview: "Intervju",
  closed: "Stängd",
};

export const CATEGORY_LABELS: Record<JobCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Fullstack",
  design: "Design",
  devops: "DevOps",
  other: "Övrigt",
};
