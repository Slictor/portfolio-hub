"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { label: "Klassen", href: "/klassen" },
  { label: "Intervju", href: "/intervju" },
  { label: "Jobb", href: "/jobb" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0e0e0e] border-b border-muted/20">
      <Link
        href="/"
        className="text-accent text-sm font-mono  tracking-widest uppercase"
      >
        G6 Portfolio Hub
      </Link>

      <nav className="flex items-center gap-8">
        {navlinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm tracking-wider transition-colors duration-200 ${
              pathname === href
                ? "text-muted"
                : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link
        href="/kontakt"
        className="text-xs font-mono border border-accent text-accent px-4 py-2 tracking-wide hover:bg-accent hover:text-black transition-colors duration-200"
      >
        Open to Work
      </Link>
    </header>
  );
}
