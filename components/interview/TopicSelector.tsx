"use client";

import { type InterviewTopic, TOPIC_LABELS } from "@/types/interview";

interface TopicSelectorProps {
  value: InterviewTopic;
  onChange: (topic: InterviewTopic) => void;
}

const topics: InterviewTopic[] = [
  "frontend",
  "backend",
  "fullstack",
  "dotnet",
  "react",
  "general",
];

export default function TopicSelector({ value, onChange }: TopicSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <button
          key={topic}
          type="button"
          onClick={() => onChange(topic)}
          className={`font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-sm border transition-colors cursor-pointer ${
            value === topic
              ? "bg-accent text-background border-accent"
              : "border-[#2a2a26] text-muted hover:text-foreground hover:border-muted"
          }`}
        >
          {TOPIC_LABELS[topic]}
        </button>
      ))}
    </div>
  );
}
