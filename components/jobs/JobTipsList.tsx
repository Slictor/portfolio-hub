"use client";

import type { JobTip } from "@/types/jobs";
import JobTipCard from "./JobTipCard";

interface JobTipsListProps {
  jobs: JobTip[];
  onEdit: (job: JobTip) => void;
  onDelete: (id: string) => void;
}

export default function JobTipsList({
  jobs,
  onEdit,
  onDelete,
}: JobTipsListProps) {
  if (jobs.length === 0) {
    return (
      <p className="text-muted text-sm font-mono">Inga jobbtips tillagda än.</p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <JobTipCard
          key={job.id}
          job={job}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
