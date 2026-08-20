export type JournalSection = {
  heading: string;
  paragraphs: string[];
};

export type JournalEntry = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  paragraphs: string[];
  sections: JournalSection[];
};

const entries: JournalEntry[] = [
  {
    slug: "from-starter-to-agentic-lab",
    date: "2026-08-18",
    title: "From create-next-app to Agentic Development Lab",
    summary:
      "We bootstrapped a Next.js app, replaced the starter screen with a landing page, then turned the project into living documentation of our agentic development process.",
    paragraphs: [
      "This project began as a default create-next-app application: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, and npm. The first screen was the usual starter template. AGENTS.md told us to read the current Next.js docs before writing code, prefer Server Components, keep TypeScript strict, and avoid extra dependencies unless we had a reason.",
      "The first real product decision was small and reversible: replace that starter page with a simple professional landing page, without adding packages, without a CMS, and without changing dark-mode CSS. We planned the change first, then implemented it only after approval.",
    ],
    sections: [
      {
        heading: "Replacing the starter page",
        paragraphs: [
          "We rewrote app/page.tsx as a static Server Component with a header, hero, features, about section, and footer. The working name at that point was Cursor Web App. Metadata in app/layout.tsx was updated to match. We did not touch globals.css, and we did not add dark: utility classes. Color came from the existing background and foreground tokens, so the theme already defined in CSS kept working.",
          "Verification was npm run lint, which passed, and npm run build. The first production build failed because next/font could not fetch Geist from Google Fonts in a restricted network environment. Retrying the build with network access succeeded, and the home route prerendered as static HTML. We then made a Git checkpoint: commit 4278c9a, Create initial landing page, and pushed it to origin/main. Afterward we confirmed that local main and origin/main both pointed at 4278c9a.",
        ],
      },
      {
        heading: "Changing direction",
        paragraphs: [
          "After the landing page was in place, we changed the purpose of the site. It is no longer a generic product shell. It is a living documentation website for our journey into agentic software development, and it is also the project we use to practice that process.",
          "The first documentation increment kept the stack unchanged: no Markdown, no new libraries, no database, and no authentication. The site name is Agentic Development Lab. Shared navigation now covers Home, Journal, and Guides. Guides started as a list of planned topics rather than empty pages. This journal entry is the first genuine record of that turn. We checkpointed it as e1fc733, Create Agentic Development Lab documentation shell, and pushed it to origin/main. A later checkpoint, b3be9b0, Polish guides and journal experience, followed.",
        ],
      },
      {
        heading: "What we are practicing",
        paragraphs: [
          "The working loop is already visible in this history: inspect the project and the current Next.js docs, propose a small plan, wait for approval, implement only that increment, verify with lint and build, then stop. Git remains a separate checkpoint. That loop is the thing this site is meant to document as we continue.",
        ],
      },
    ],
  },
  {
    slug: "publishing-git-and-github-guide",
    date: "2026-08-20",
    title: "Publishing the Git and GitHub setup guide",
    summary:
      "We published the first Setup guide, Git and GitHub, as a single-file change to content/guides.ts, then checkpointed it as 4b19432 and verified that local main and origin/main matched.",
    paragraphs: [
      "This increment published Git and GitHub, the first Setup guide on the site. The guide is the reusable practice. This journal entry is the record of how we published it.",
      "How We Practice Agentic Software Development already covers where Git sits in the agent loop. We did not retell those steps here, and we did not copy the Git guide's sections into the journal.",
    ],
    sections: [
      {
        heading: "Plan and approval",
        paragraphs: [
          "We asked for a plan before any files changed. The proposal was to publish the existing planned git-and-github entry rather than add a second guide, keep the title Git and GitHub, and write nine numbered sections in content/guides.ts only.",
          "We reviewed that plan and approved a bounded implementation: one file, no journal or route changes, no AGENTS.md edits, and no commit until we asked. That approval is the human gate. Implementation started only after the increment was explicit.",
        ],
      },
      {
        heading: "Implementation and file review",
        paragraphs: [
          "After approval, the implementation promoted git-and-github from planned to published in content/guides.ts. No other file was in scope.",
          "When implementation finished, we read content/guides.ts itself rather than trusting the summary of what changed. We re-read the file before checkpointing and treated wording as part of that file review.",
        ],
      },
      {
        heading: "Verify and checkpoint",
        paragraphs: [
          "We ran npm run lint and npm run build ourselves. Lint passed. The production build succeeded and generated /guides/git-and-github as a static route.",
          "We staged only content/guides.ts, then created commit 4b19432, Publish Git and GitHub setup guide, and pushed it. Afterward we confirmed that local main and origin/main both pointed at 4b19432.",
        ],
      },
    ],
  },
];

export function getJournalEntries(): JournalEntry[] {
  return [...entries].sort((a, b) => b.date.localeCompare(a.date));
}

export function getJournalEntry(slug: string): JournalEntry | undefined {
  return entries.find((entry) => entry.slug === slug);
}

export function formatEntryDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
