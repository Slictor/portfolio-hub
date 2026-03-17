"use client";

import { useEffect } from "react";

export interface StudentProfile {
  initials: string;
  avatarBg: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  tags: string[];
  linkedIn?: string;
  portfolio?: string;
}

interface ProfileModalProps {
  student: StudentProfile | null;
  onClose: () => void;
}

export default function ProfileModal({ student, onClose }: ProfileModalProps) {
  useEffect(() => {
    if (!student) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [student, onClose]);

  if (!student) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Profil: ${student.name}`}
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm w-full cursor-default"
        onClick={onClose}
        aria-label="Stäng modal"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl border border-[#2a2a26] bg-[#171714] rounded-sm overflow-hidden"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
          aria-label="Stäng"
        >
          ✕
        </button>

        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="flex items-center gap-5 mb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-xl text-background shrink-0"
              style={{ background: student.avatarBg }}
            >
              {student.initials}
            </div>
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">{student.name}</h2>
              <p className="text-sm text-muted tracking-wide">{student.role}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#2a2a26] mb-8" />

          {/* Bio */}
          <div className="mb-8">
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">Om mig</h3>
            <p className="text-foreground/80 leading-relaxed">{student.longBio}</p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">Teknologier</h3>
            <div className="flex flex-wrap gap-2">
              {student.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-3 py-1 border border-[#2a2a26] text-muted rounded-sm tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-6 border-t border-[#2a2a26]">
            {student.linkedIn && (
              <a
                href={student.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] px-4 py-2 border border-[#2a2a26] text-muted hover:text-foreground hover:border-muted transition-colors rounded-sm tracking-wide"
              >
                LinkedIn ↗
              </a>
            )}
            {student.portfolio && (
              <a
                href={student.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] px-4 py-2 bg-accent text-background border border-accent rounded-sm tracking-wide"
              >
                Portfolio →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
