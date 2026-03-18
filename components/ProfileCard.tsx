import { StudentProfile } from "@/types/students";
import Link from "next/link";

interface ProfileCardProps {
  student: StudentProfile;
}

export default function ProfileCard({ student }: ProfileCardProps) {
  return (
    <div className="flex flex-col gap-4 border border-white/20 text-neutral-400 p-12 hover:bg-white/10 h-[420px]">
      <div className="flex items-center justify-between">
        <div
          className="border border-white/20 rounded-full w-[50px] h-[50px] flex items-center justify-center text-sm font-mono text-neutral-900"
          style={{ background: student.avatarBg }}
        >
          {student.initials}
        </div>
        <span className="text-sm font-mono">{student.id}</span>
      </div>

      <div>
        <h3 className="text-2xl text-white">{student.name}</h3>
        <span className="text-sm tracking-wide">{student.role}</span>
      </div>

      <p className="line-clamp-4 overflow-hidden flex-1">{student.bio}</p>

      <div className="flex flex-wrap gap-2">
        {student.competenceTags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-neutral-400 border border-white/20 py-1 px-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t border-neutral-800 flex gap-2 pt-6 font-mono text-xs tracking-wide">
        {student.linkedIn && (
          <Link
            href={student.linkedIn}
            className="border border-neutral-700 text-neutral-400 rounded-sm text-center content-center px-4 py-2 hover:text-neutral-200 hover:border-neutral-400"
          >
            LinkedIn ↗
          </Link>
        )}
        {student.portfolio && (
          <Link
            href={student.portfolio}
            className="border border-neutral-700 text-neutral-950 rounded-sm text-center content-center px-4 py-2 bg-lime-300/70"
          >
            Portfolio →
          </Link>
        )}
      </div>
    </div>
  );
}