"use client";

import { useState } from "react";
import {
  CATEGORY_LABELS,
  type JobCategory,
  type JobStatus,
  type JobTip,
  STATUS_LABELS,
} from "@/types/jobs";

interface JobTipFormProps {
  initialData?: JobTip;
  onSubmit: (data: Omit<JobTip, "id" | "createdAt" | "updatedAt">) => void;
  onCancel: () => void;
}

const categories: JobCategory[] = [
  "frontend",
  "backend",
  "fullstack",
  "design",
  "devops",
  "other",
];

const statuses: JobStatus[] = ["active", "applied", "interview", "closed"];

export default function JobTipForm({
  initialData,
  onSubmit,
  onCancel,
}: JobTipFormProps) {
  const [company, setCompany] = useState(initialData?.company ?? "");
  const [role, setRole] = useState(initialData?.role ?? "");
  const [link, setLink] = useState(initialData?.link ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );
  const [category, setCategory] = useState<JobCategory>(
    initialData?.category ?? "frontend",
  );
  const [status, setStatus] = useState<JobStatus>(
    initialData?.status ?? "active",
  );
  const [postedBy, setPostedBy] = useState(initialData?.postedBy ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ company, role, link, description, category, status, postedBy });
  };

  const inputClass =
    "bg-[#171714] border border-[#2a2a26] text-foreground placeholder:text-muted font-sans text-sm px-4 py-3 rounded-sm w-full focus:outline-none focus:border-accent";

  const labelClass =
    "font-mono text-[10px] tracking-[0.2em] uppercase text-muted";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Company */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Företag</span>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Företagsnamn"
          className={inputClass}
          required
        />
      </label>

      {/* Role */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Roll</span>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Rolltitel"
          className={inputClass}
          required
        />
      </label>

      {/* Link */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Länk</span>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://..."
          className={inputClass}
        />
      </label>

      {/* Description */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Beskrivning</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Kort beskrivning av tjänsten..."
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </label>

      {/* Category toggle */}
      <div className="flex flex-col gap-1.5">
        <span className={labelClass}>Kategori</span>
        <div className="inline-flex gap-0 border border-[#2a2a26] rounded-sm overflow-hidden flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`font-mono text-[11px] tracking-wide px-4 py-2 transition-colors cursor-pointer ${
                category === cat
                  ? "bg-accent text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Status toggle */}
      <div className="flex flex-col gap-1.5">
        <span className={labelClass}>Status</span>
        <div className="inline-flex gap-0 border border-[#2a2a26] rounded-sm overflow-hidden flex-wrap">
          {statuses.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(s)}
              className={`font-mono text-[11px] tracking-wide px-4 py-2 transition-colors cursor-pointer ${
                status === s
                  ? "bg-accent text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {STATUS_LABELS[s]}
            </button>
          ))}
        </div>
      </div>

      {/* Posted By */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Postad av</span>
        <input
          type="text"
          value={postedBy}
          onChange={(e) => setPostedBy(e.target.value)}
          placeholder="Ditt namn"
          className={inputClass}
          required
        />
      </label>

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          className="font-mono text-sm tracking-wide px-6 py-3 bg-[#CAFF4D] text-background rounded-sm hover:bg-[#b8e644] transition-colors cursor-pointer"
        >
          {initialData ? "Uppdatera" : "Spara"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="font-mono text-[11px] tracking-wide px-4 py-1.5 bg-[#2a2a26] text-foreground hover:bg-accent hover:text-background transition-colors rounded-sm cursor-pointer"
        >
          Avbryt
        </button>
      </div>
    </form>
  );
}
