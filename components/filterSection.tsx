type Props = {
  filters: string[];
  selected: string;
  onChange: (filter: string) => void;
};

export default function FilterSection({ filters, selected, onChange }: Props) {
  return (
    <div className="flex gap-3 mb-8  items-center justify-center">
      <span className="font-mono text-xl mr-2">Competens:</span>
      {filters.map((filter, index) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-4 py-2 border rounded transition hover:border-accent hover:cursor-pointer
        ${selected === filter ? "bg-accent text-black" : "text-foreground/70 border-muted/40"}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
