import type { Metadata } from "next";
import Link from "next/link";
import { getGuides, getPublishedGuide, guideGroups } from "@/content/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Planned and published topical guides for Agentic Development Lab.",
};

export default function GuidesIndexPage() {
  const guides = getGuides();

  return (
    <div className="flex flex-col gap-12 py-16 sm:py-24">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Guides
        </h1>
        <p className="max-w-2xl text-foreground/70">
          Topical reference, filled in after we have done the work. Planned
          topics are listed here so the map is visible, but they are not empty
          pages.
        </p>
      </header>

      {guideGroups.map((group) => {
        const groupGuides = guides.filter((guide) => guide.group === group.id);

        return (
          <section key={group.id} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {group.title}
            </h2>
            <ul className="flex flex-col gap-4">
              {groupGuides.map((guide) => {
                const published = getPublishedGuide(guide.slug);

                return (
                  <li
                    key={guide.slug}
                    className="border-t border-foreground/10 pt-4"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      {published ? (
                        <h3 className="font-semibold tracking-tight">
                          <Link
                            href={`/guides/${guide.slug}`}
                            className="hover:underline"
                          >
                            {guide.title}
                          </Link>
                        </h3>
                      ) : (
                        <h3 className="font-semibold tracking-tight">
                          {guide.title}
                        </h3>
                      )}
                      <span className="text-xs tracking-wide text-foreground/50 uppercase">
                        {guide.status}
                      </span>
                    </div>
                    <p className="mt-1 max-w-2xl text-sm leading-7 text-foreground/70">
                      {guide.summary}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
