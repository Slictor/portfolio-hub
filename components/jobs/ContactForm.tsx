"use client";

import { useState } from "react";
import type { CompanyContact } from "@/types/jobs";

interface ContactFormProps {
  initialData?: CompanyContact;
  onSubmit: (
    data: Omit<CompanyContact, "id" | "createdAt" | "updatedAt">,
  ) => void;
  onCancel: () => void;
}

export default function ContactForm({
  initialData,
  onSubmit,
  onCancel,
}: ContactFormProps) {
  const [companyName, setCompanyName] = useState(
    initialData?.companyName ?? "",
  );
  const [contactPerson, setContactPerson] = useState(
    initialData?.contactPerson ?? "",
  );
  const [email, setEmail] = useState(initialData?.email ?? "");
  const [phone, setPhone] = useState(initialData?.phone ?? "");
  const [notes, setNotes] = useState(initialData?.notes ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      companyName,
      contactPerson,
      email,
      phone: phone || undefined,
      notes,
    });
  };

  const inputClass =
    "bg-[#171714] border border-[#2a2a26] text-foreground placeholder:text-muted font-sans text-sm px-4 py-3 rounded-sm w-full focus:outline-none focus:border-accent";

  const labelClass =
    "font-mono text-[10px] tracking-[0.2em] uppercase text-muted";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Company Name */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Företag</span>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Företagsnamn"
          className={inputClass}
          required
        />
      </label>

      {/* Contact Person */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Kontaktperson</span>
        <input
          type="text"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
          placeholder="Namn på kontaktperson"
          className={inputClass}
          required
        />
      </label>

      {/* Email */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>E-post</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@exempel.se"
          className={inputClass}
          required
        />
      </label>

      {/* Phone */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Telefon (valfritt)</span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="070-123 45 67"
          className={inputClass}
        />
      </label>

      {/* Notes */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>Anteckningar</span>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Anteckningar om kontakten..."
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </label>

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          className="font-mono text-sm tracking-wide px-6 py-3 bg-[#CAFF4D] text-background rounded-sm hover:bg-[#b8e644] transition-colors cursor-pointer"
        >
          {initialData ? "Uppdatera" : "Spara"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="font-mono text-[11px] tracking-wide px-4 py-1.5 bg-[#2a2a26] text-foreground hover:bg-accent hover:text-background transition-colors rounded-sm cursor-pointer"
        >
          Avbryt
        </button>
      </div>
    </form>
  );
}
