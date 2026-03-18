"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { label: "Klassen", href: "/klassen" },
  { label: "Intervju", href: "/intervju" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0e0e0e]">
      <Link
        href="/"
        className="text-[#CAFF4D] text-sm font-mono font-bold tracking-widest uppercase"
      >
        KPH/2026
      </Link>

      <nav className="flex items-center gap-8">
        {navlinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm tracking-wide transition-colors duration-200 ${
              pathname === href ? "text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link
        href="/kontakt"
        className="text-sm border border-white text-white px-4 py-2 tracking-wide hover:bg-white hover:text-black transition-colors duration-200"
      >
        Open to Work
      </Link>
    </header>
  );
}
