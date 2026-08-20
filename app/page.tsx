import Link from "next/link";
import { formatEntryDate, getJournalEntries } from "@/content/journal";

export default function Home() {
  const [latestEntry] = getJournalEntries();

  return (
    <div className="flex flex-col gap-16 py-16 sm:py-24">
      <section className="flex flex-col gap-6">
        <p className="text-sm font-medium tracking-wide text-foreground/60 uppercase">
          Living documentation
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Agentic Development Lab
        </h1>
        <p className="max-w-xl text-lg leading-8 text-foreground/70">
          This site is the record of our journey into agentic software
          development, and the project we use to practice that process. We
          write down what we set up, what we tried, what broke, and what we
          learned, while the application itself keeps evolving.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/journal"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Read the journal
          </Link>
          <Link
            href="/guides"
            className="flex h-12 items-center justify-center rounded-full border border-foreground/15 px-6 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Browse guides
          </Link>
        </div>
      </section>

      <section className="grid gap-10 border-t border-foreground/10 pt-16 sm:grid-cols-2">
        <article>
          <h2 className="text-xl font-semibold tracking-tight">Journal</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/70">
            A chronological log of the work. Read this to see what happened, in
            the order it happened.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-semibold tracking-tight">Guides</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/70">
            Topical reference we fill in after we have actually done the work.
            The published guides cover setup, workflow, practice, and how the
            site itself changed.
          </p>
        </article>
      </section>

      {latestEntry ? (
        <section className="border-t border-foreground/10 pt-16">
          <h2 className="text-xl font-semibold tracking-tight">Latest entry</h2>
          <article className="mt-6">
            <p className="text-sm text-foreground/60">
              {formatEntryDate(latestEntry.date)}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">
              <Link href={`/journal/${latestEntry.slug}`} className="hover:underline">
                {latestEntry.title}
              </Link>
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-foreground/70">
              {latestEntry.summary}
            </p>
          </article>
        </section>
      ) : null}
    </div>
  );
}
