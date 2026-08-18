import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedGuide, getPublishedGuides } from "@/content/guides";

export function generateStaticParams() {
  return getPublishedGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPublishedGuide(slug);

  if (!guide) {
    return { title: "Not found" };
  }

  return {
    title: guide.title,
    description: guide.summary,
  };
}

export default async function GuidePage({
  params,
}: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getPublishedGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-8 py-16 sm:py-24">
      <header className="flex flex-col gap-3">
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {guide.title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-foreground/70">
          {guide.summary}
        </p>
      </header>

      {guide.sections.map((section) => (
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
          href="/guides"
          className="text-sm font-medium text-foreground/70 hover:text-foreground"
        >
          Back to guides
        </Link>
      </p>
    </article>
  );
}
