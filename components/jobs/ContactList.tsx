"use client";

import type { CompanyContact } from "@/types/jobs";
import ContactCard from "./ContactCard";

interface ContactListProps {
  contacts: CompanyContact[];
  onEdit: (contact: CompanyContact) => void;
  onDelete: (id: string) => void;
}

export default function ContactList({
  contacts,
  onEdit,
  onDelete,
}: ContactListProps) {
  if (contacts.length === 0) {
    return (
      <p className="text-muted text-sm font-mono">
        Inga kontakter tillagda än.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
