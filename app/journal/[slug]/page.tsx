import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatEntryDate,
  getJournalEntries,
  getJournalEntry,
} from "@/content/journal";

export function generateStaticParams() {
  return getJournalEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);

  if (!entry) {
    return { title: "Not found" };
  }

  return {
    title: entry.title,
    description: entry.summary,
  };
}

export default async function JournalEntryPage({
  params,
}: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-8 py-16 sm:py-24">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-foreground/60">
          {formatEntryDate(entry.date)}
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {entry.title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-foreground/70">
          {entry.summary}
        </p>
      </header>

      <div className="flex max-w-2xl flex-col gap-5 text-foreground/80">
        {entry.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-8">
            {paragraph}
          </p>
        ))}
      </div>

      {entry.sections.map((section) => (
        <section key={section.heading} className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-tight">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-8 text-foreground/80">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <p>
        <Link
          href="/journal"
          className="text-sm font-medium text-foreground/70 hover:text-foreground"
        >
          Back to journal
        </Link>
      </p>
    </article>
  );
}
