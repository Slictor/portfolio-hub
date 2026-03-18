import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { NextResponse } from "next/server";
import type { CompanyContact } from "@/types/jobs";

const DATA_PATH = join(process.cwd(), "data", "contacts.json");

function readContacts(): CompanyContact[] {
  const raw = readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeContacts(contacts: CompanyContact[]): void {
  writeFileSync(DATA_PATH, JSON.stringify(contacts, null, 2), "utf-8");
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const contacts = readContacts();
  const index = contacts.findIndex((contact) => contact.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Contact not found" }, { status: 404 });
  }

  const updatedContact: CompanyContact = {
    ...contacts[index],
    ...body,
    id: contacts[index].id,
    createdAt: contacts[index].createdAt,
    updatedAt: new Date().toISOString(),
  };

  contacts[index] = updatedContact;
  writeContacts(contacts);

  return NextResponse.json({ contact: updatedContact });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const contacts = readContacts();
  const index = contacts.findIndex((contact) => contact.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Contact not found" }, { status: 404 });
  }

  const filtered = contacts.filter((contact) => contact.id !== id);
  writeContacts(filtered);

  return NextResponse.json({ success: true });
}
