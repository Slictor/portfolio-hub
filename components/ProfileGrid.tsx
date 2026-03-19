import { ReactNode } from "react";

interface ProfileGridProps {
  children: ReactNode;
  className?: string;
}

export default function ProfileGrid({ children, className }: ProfileGridProps) {
  return (
    <div
      className={`grid gap-4 w-full items-start ${className ?? ""}`}
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))" }}
    >
      {children}
    </div>
  );
}
