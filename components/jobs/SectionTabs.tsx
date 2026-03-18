"use client";

interface SectionTabsProps {
  active: "jobs" | "contacts";
  onChange: (tab: "jobs" | "contacts") => void;
}

const tabs: { key: "jobs" | "contacts"; label: string }[] = [
  { key: "jobs", label: "Jobbtips" },
  { key: "contacts", label: "Kontakter" },
];

export default function SectionTabs({ active, onChange }: SectionTabsProps) {
  return (
    <div className="inline-flex gap-0 border border-[#2a2a26] rounded-sm overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          className={`font-mono text-[11px] tracking-wide px-4 py-2 transition-colors cursor-pointer ${
            active === tab.key
              ? "bg-accent text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
