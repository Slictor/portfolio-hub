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

export async function GET() {
  const contacts = readContacts();
  return NextResponse.json({ contacts });
}

export async function POST(request: Request) {
  const body = await request.json();
  const now = new Date().toISOString();

  const contact: CompanyContact = {
    id: crypto.randomUUID(),
    companyName: body.companyName,
    contactPerson: body.contactPerson,
    email: body.email,
    phone: body.phone,
    notes: body.notes,
    createdAt: now,
    updatedAt: now,
  };

  const contacts = readContacts();
  contacts.push(contact);
  writeContacts(contacts);

  return NextResponse.json({ contact }, { status: 201 });
}
