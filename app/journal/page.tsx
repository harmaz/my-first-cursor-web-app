import type { Metadata } from "next";
import Link from "next/link";
import { formatEntryDate, getJournalEntries } from "@/content/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "A chronological record of building Agentic Development Lab and learning agentic software development.",
};

export default function JournalIndexPage() {
  const entries = getJournalEntries();

  return (
    <div className="flex flex-col gap-10 py-16 sm:py-24">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Journal
        </h1>
        <p className="max-w-2xl text-foreground/70">
          Dated notes from the work itself. Newer entries appear first.
        </p>
      </header>

      <ol className="flex flex-col gap-8">
        {entries.map((entry) => (
          <li key={entry.slug} className="border-t border-foreground/10 pt-8">
            <p className="text-sm text-foreground/60">
              {formatEntryDate(entry.date)}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight">
              <Link href={`/journal/${entry.slug}`} className="hover:underline">
                {entry.title}
              </Link>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-foreground/70">
              {entry.summary}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
