"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProfileModal from "@/components/ProfileModal";
import ProfileGrid from "@/components/ProfileGrid";
import ProfileCard from "@/components/ProfileCard";
import { StudentProfile } from "@/types/students";
import studentsData from "@/data/students.json";
import FilterSection from "@/components/filterSection";

const students = studentsData as StudentProfile[];

const studentCount = students.length;
const techCount = new Set(students.flatMap((s) => s.competenceTags ?? [])).size;

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

const filters = ["All", "Frontend", "Backend", "Fullstack", "UX/Design"];

const filteredData =
  selectedFilter === "All"
    ? students
    : students.filter((student) =>
        student.competenceTags?.includes(selectedFilter)
      );

  return (
    <>
      <Hero studentCount={studentCount} techCount={techCount} />
         <section className="px-6 py-16 max-w-7xl mx-auto">
        <FilterSection
          filters={filters}
          selected={selectedFilter}
          onChange={setSelectedFilter}
        />
  
        <ProfileGrid>
          {filteredData.map((student) => (
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