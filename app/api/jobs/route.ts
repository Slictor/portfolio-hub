import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { NextResponse } from "next/server";
import type { JobTip } from "@/types/jobs";

const DATA_PATH = join(process.cwd(), "data", "jobs.json");

function readJobs(): JobTip[] {
  const raw = readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeJobs(jobs: JobTip[]): void {
  writeFileSync(DATA_PATH, JSON.stringify(jobs, null, 2), "utf-8");
}

export async function GET() {
  const jobs = readJobs();
  return NextResponse.json({ jobs });
}

export async function POST(request: Request) {
  const body = await request.json();
  const now = new Date().toISOString();

  const job: JobTip = {
    id: crypto.randomUUID(),
    company: body.company,
    role: body.role,
    link: body.link,
    description: body.description,
    category: body.category,
    status: body.status,
    postedBy: body.postedBy,
    createdAt: now,
    updatedAt: now,
  };

  const jobs = readJobs();
  jobs.push(job);
  writeJobs(jobs);

  return NextResponse.json({ job }, { status: 201 });
}
