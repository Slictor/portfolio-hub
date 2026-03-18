"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProfileModal, { StudentProfile } from "@/components/ProfileModal";

const demoStudent: StudentProfile = {
  initials: "MK",
  avatarBg: "#c8f04a",
  name: "Manu K.",
  role: "Frontend Developer",
  bio: "Bygger Art Oracle med Next.js och Grok AI.",
  longBio:
    "Bygger Art Oracle med Next.js och Grok AI. Passionerad om modern React-arkitektur med fokus på prestanda och användarupplevelse. Utforskar ständigt nya sätt att kombinera AI med frontend.",
  tags: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Git"],
  linkedIn: "https://linkedin.com",
  portfolio: "https://example.com",
};

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Hero />
      <ProfileModal
        student={showModal ? demoStudent : null}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
