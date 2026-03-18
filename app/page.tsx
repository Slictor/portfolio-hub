"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProfileModal from "@/components/ProfileModal";
import ProfileGrid from "@/components/ProfileGrid";
import ProfileCard from "@/components/ProfileCard";
import { StudentProfile } from "@/types/students";
import studentsData from "@/data/students.json";

const students = studentsData as StudentProfile[];

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);

  return (
    <>
      <Hero />
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <ProfileGrid>
          {students.map((student) => (
            <button
              key={student.id}
              onClick={() => setSelectedStudent(student)}
              className="text-left w-full"
            >
              <ProfileCard student={student} />
            </button>
          ))}
        </ProfileGrid>
      </section>
      <ProfileModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </>
  );
}