"use client";

import type { CompanyContact } from "@/types/jobs";

interface ContactCardProps {
  contact: CompanyContact;
  onEdit: (contact: CompanyContact) => void;
  onDelete: (id: string) => void;
}

export default function ContactCard({
  contact,
  onEdit,
  onDelete,
}: ContactCardProps) {
  return (
    <div className="bg-[#171714] border border-[#2a2a26] rounded-sm p-5 relative group">
      {/* Edit / Delete buttons */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={() => onEdit(contact)}
          className="font-mono text-[11px] tracking-wide px-4 py-1.5 bg-[#2a2a26] text-foreground hover:bg-accent hover:text-background transition-colors rounded-sm cursor-pointer"
        >
          Redigera
        </button>
        <button
          type="button"
          onClick={() => onDelete(contact.id)}
          className="font-mono text-[11px] tracking-wide px-4 py-1.5 bg-[#2a2a26] text-foreground hover:bg-accent hover:text-background transition-colors rounded-sm cursor-pointer"
        >
          Radera
        </button>
      </div>

      {/* Company & Contact Person */}
      <h3 className="font-serif text-xl text-foreground">
        {contact.companyName}
      </h3>
      <p className="text-muted text-sm mt-1">{contact.contactPerson}</p>

      {/* Email */}
      <a
        href={`mailto:${contact.email}`}
        className="inline-block text-accent text-sm mt-3 hover:underline"
      >
        {contact.email}
      </a>

      {/* Phone */}
      {contact.phone && (
        <p className="text-muted text-sm mt-1">{contact.phone}</p>
      )}

      {/* Notes */}
      {contact.notes && (
        <p className="text-muted text-sm mt-3 line-clamp-2">{contact.notes}</p>
      )}

      {/* Meta */}
      <div className="mt-4">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
          {new Date(contact.createdAt).toLocaleDateString("sv-SE")}
        </span>
      </div>
    </div>
  );
}
