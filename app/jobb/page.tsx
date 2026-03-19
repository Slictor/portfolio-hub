"use client";

import { useCallback, useEffect, useState } from "react";
import ContactForm from "@/components/jobs/ContactForm";
import ContactList from "@/components/jobs/ContactList";
import JobHero from "@/components/jobs/JobHero";
import JobTipForm from "@/components/jobs/JobTipForm";
import JobTipsList from "@/components/jobs/JobTipsList";
import SectionTabs from "@/components/jobs/SectionTabs";
import type { CompanyContact, JobTip } from "@/types/jobs";

export default function JobbPage() {
  const [activeTab, setActiveTab] = useState<"jobs" | "contacts">("jobs");
  const [jobs, setJobs] = useState<JobTip[]>([]);
  const [contacts, setContacts] = useState<CompanyContact[]>([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobTip | null>(null);
  const [editingContact, setEditingContact] = useState<CompanyContact | null>(
    null,
  );

  const fetchJobs = useCallback(async () => {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    setJobs(data.jobs);
  }, []);

  const fetchContacts = useCallback(async () => {
    const res = await fetch("/api/contacts");
    const data = await res.json();
    setContacts(data.contacts);
  }, []);

  useEffect(() => {
    fetchJobs();
    fetchContacts();
  }, [fetchJobs, fetchContacts]);

  const handleCreateJob = async (
    data: Omit<JobTip, "id" | "createdAt" | "updatedAt">,
  ) => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setShowJobForm(false);
    fetchJobs();
  };

  const handleUpdateJob = async (
    data: Omit<JobTip, "id" | "createdAt" | "updatedAt">,
  ) => {
    if (!editingJob) return;
    await fetch(`/api/jobs/${editingJob.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setEditingJob(null);
    setShowJobForm(false);
    fetchJobs();
  };

  const handleDeleteJob = async (id: string) => {
    if (!window.confirm("Vill du verkligen ta bort detta jobbtips?")) return;
    await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    fetchJobs();
  };

  const handleCreateContact = async (
    data: Omit<CompanyContact, "id" | "createdAt" | "updatedAt">,
  ) => {
    await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setShowContactForm(false);
    fetchContacts();
  };

  const handleUpdateContact = async (
    data: Omit<CompanyContact, "id" | "createdAt" | "updatedAt">,
  ) => {
    if (!editingContact) return;
    await fetch(`/api/contacts/${editingContact.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setEditingContact(null);
    setShowContactForm(false);
    fetchContacts();
  };

  const handleDeleteContact = async (id: string) => {
    if (!window.confirm("Vill du verkligen ta bort denna kontakt?")) return;
    await fetch(`/api/contacts/${id}`, { method: "DELETE" });
    fetchContacts();
  };

  const openEditJob = (job: JobTip) => {
    setEditingJob(job);
    setShowJobForm(true);
  };

  const openEditContact = (contact: CompanyContact) => {
    setEditingContact(contact);
    setShowContactForm(true);
  };

  const cancelJobForm = () => {
    setShowJobForm(false);
    setEditingJob(null);
  };

  const cancelContactForm = () => {
    setShowContactForm(false);
    setEditingContact(null);
  };

  const appliedCount = jobs.filter((j) => j.status === "applied").length;

  return (
    <main className="min-h-screen bg-background">
      <JobHero
        jobCount={jobs.length}
        contactCount={contacts.length}
        appliedCount={appliedCount}
      />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        {/* Tabs + Action button */}
        <div className="flex items-center justify-between mb-8">
          <SectionTabs active={activeTab} onChange={setActiveTab} />

          {activeTab === "jobs" && !showJobForm && (
            <button
              type="button"
              onClick={() => {
                setEditingJob(null);
                setShowJobForm(true);
              }}
              className="font-mono text-sm tracking-wide px-6 py-3 bg-accent text-background rounded-sm hover:bg-accent/80 transition-colors cursor-pointer"
            >
              Lägg till jobbtips →
            </button>
          )}

          {activeTab === "contacts" && !showContactForm && (
            <button
              type="button"
              onClick={() => {
                setEditingContact(null);
                setShowContactForm(true);
              }}
              className="font-mono text-sm tracking-wide px-6 py-3 bg-accent text-background rounded-sm hover:bg-accent/80 transition-colors cursor-pointer"
            >
              Lägg till kontakt →
            </button>
          )}
        </div>

        {/* Job tips section */}
        {activeTab === "jobs" && (
          <>
            {showJobForm && (
              <div className="mb-8 bg-[#171714] border border-[#2a2a26] rounded-sm p-6">
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
                  {editingJob ? "Redigera jobbtips" : "Nytt jobbtips"}
                </h3>
                <JobTipForm
                  initialData={editingJob ?? undefined}
                  onSubmit={editingJob ? handleUpdateJob : handleCreateJob}
                  onCancel={cancelJobForm}
                />
              </div>
            )}
            <JobTipsList
              jobs={jobs}
              onEdit={openEditJob}
              onDelete={handleDeleteJob}
            />
          </>
        )}

        {/* Contacts section */}
        {activeTab === "contacts" && (
          <>
            {showContactForm && (
              <div className="mb-8 bg-[#171714] border border-[#2a2a26] rounded-sm p-6">
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
                  {editingContact ? "Redigera kontakt" : "Ny kontakt"}
                </h3>
                <ContactForm
                  initialData={editingContact ?? undefined}
                  onSubmit={
                    editingContact ? handleUpdateContact : handleCreateContact
                  }
                  onCancel={cancelContactForm}
                />
              </div>
            )}
            <ContactList
              contacts={contacts}
              onEdit={openEditContact}
              onDelete={handleDeleteContact}
            />
          </>
        )}
      </div>
    </main>
  );
}
