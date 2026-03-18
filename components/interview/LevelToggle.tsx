"use client";

import { type InterviewLevel, LEVEL_LABELS } from "@/types/interview";

interface LevelToggleProps {
  value: InterviewLevel;
  onChange: (level: InterviewLevel) => void;
}

const levels: InterviewLevel[] = ["internship", "junior", "senior"];

export default function LevelToggle({ value, onChange }: LevelToggleProps) {
  return (
    <div className="inline-flex gap-0 border border-[#2a2a26] rounded-sm overflow-hidden">
      {levels.map((level) => (
        <button
          key={level}
          type="button"
          onClick={() => onChange(level)}
          className={`font-mono text-[11px] tracking-wide px-4 py-2 transition-colors cursor-pointer ${
            value === level
              ? "bg-accent text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {LEVEL_LABELS[level]}
        </button>
      ))}
    </div>
  );
}
