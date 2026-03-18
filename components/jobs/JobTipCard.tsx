"use client";

import { CATEGORY_LABELS, type JobTip, STATUS_LABELS } from "@/types/jobs";

interface JobTipCardProps {
  job: JobTip;
  onEdit: (job: JobTip) => void;
  onDelete: (id: string) => void;
}

export default function JobTipCard({ job, onEdit, onDelete }: JobTipCardProps) {
  return (
    <div className="bg-[#171714] border border-[#2a2a26] rounded-sm p-5 relative group">
      {/* Edit / Delete buttons */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={() => onEdit(job)}
          className="font-mono text-[11px] tracking-wide px-4 py-1.5 bg-[#2a2a26] text-foreground hover:bg-accent hover:text-background transition-colors rounded-sm cursor-pointer"
        >
          Redigera
        </button>
        <button
          type="button"
          onClick={() => onDelete(job.id)}
          className="font-mono text-[11px] tracking-wide px-4 py-1.5 bg-[#2a2a26] text-foreground hover:bg-accent hover:text-background transition-colors rounded-sm cursor-pointer"
        >
          Radera
        </button>
      </div>

      {/* Company & Role */}
      <h3 className="font-serif text-xl text-foreground">{job.company}</h3>
      <p className="text-muted text-sm mt-1">{job.role}</p>

      {/* Badges */}
      <div className="flex gap-2 mt-3">
        <span className="font-mono text-[10px] tracking-wide uppercase border border-[#2a2a26] rounded-full px-3 py-0.5 text-muted">
          {CATEGORY_LABELS[job.category]}
        </span>
        <span className="font-mono text-[10px] tracking-wide uppercase border border-[#2a2a26] rounded-full px-3 py-0.5 text-muted">
          {STATUS_LABELS[job.status]}
        </span>
      </div>

      {/* Description */}
      {job.description && (
        <p className="text-muted text-sm mt-3 line-clamp-2">
          {job.description}
        </p>
      )}

      {/* Link */}
      {job.link && (
        <a
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-accent text-sm mt-3 hover:underline"
        >
          Visa annons &rarr;
        </a>
      )}

      {/* Meta */}
      <div className="flex gap-4 mt-4">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
          {job.postedBy}
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
          {new Date(job.createdAt).toLocaleDateString("sv-SE")}
        </span>
      </div>
    </div>
  );
}
