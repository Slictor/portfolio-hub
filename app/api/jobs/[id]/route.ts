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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const jobs = readJobs();
  const index = jobs.findIndex((job) => job.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  const updatedJob: JobTip = {
    ...jobs[index],
    ...body,
    id: jobs[index].id,
    createdAt: jobs[index].createdAt,
    updatedAt: new Date().toISOString(),
  };

  jobs[index] = updatedJob;
  writeJobs(jobs);

  return NextResponse.json({ job: updatedJob });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const jobs = readJobs();
  const index = jobs.findIndex((job) => job.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  const filtered = jobs.filter((job) => job.id !== id);
  writeJobs(filtered);

  return NextResponse.json({ success: true });
}
