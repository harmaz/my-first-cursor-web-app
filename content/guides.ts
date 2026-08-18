export const guideGroups = [
  { id: "setup", title: "Setup" },
  { id: "workflow", title: "Workflow" },
  { id: "practice", title: "Practice" },
  { id: "product", title: "Product" },
] as const;

export type GuideGroupId = (typeof guideGroups)[number]["id"];

type GuideBase = {
  slug: string;
  title: string;
  summary: string;
  group: GuideGroupId;
};

export type PlannedGuide = GuideBase & {
  status: "planned";
};

export type PublishedGuide = GuideBase & {
  status: "published";
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export type Guide = PlannedGuide | PublishedGuide;

const guides: Guide[] = [
  {
    slug: "development-environment",
    title: "Development environment",
    summary: "How we set up the machine and tools used to build this site.",
    group: "setup",
    status: "planned",
  },
  {
    slug: "windows-ubuntu-vm",
    title: "Windows and Ubuntu VM",
    summary: "The host and virtual machine setup we actually use.",
    group: "setup",
    status: "planned",
  },
  {
    slug: "git-and-github",
    title: "Git and GitHub",
    summary: "Version control, remotes, and the checkpoint habit.",
    group: "setup",
    status: "planned",
  },
  {
    slug: "ssh-authentication",
    title: "SSH authentication",
    summary: "How we authenticate to GitHub and related services.",
    group: "setup",
    status: "planned",
  },
  {
    slug: "nodejs-npm-nvm",
    title: "Node.js, npm, and NVM",
    summary: "Runtime and package management for this Next.js app.",
    group: "setup",
    status: "planned",
  },
  {
    slug: "nextjs-react-typescript-tailwind",
    title: "Next.js, React, TypeScript, and Tailwind",
    summary: "The application stack and the conventions we follow in it.",
    group: "setup",
    status: "planned",
  },
  {
    slug: "cursor-and-cursor-agent",
    title: "Cursor and Cursor Agent",
    summary: "How we work with the editor and the agent in this repo.",
    group: "setup",
    status: "planned",
  },
  {
    slug: "agents-md-and-project-rules",
    title: "AGENTS.md and project rules",
    summary: "The project rules that constrain planning and implementation.",
    group: "setup",
    status: "planned",
  },
  {
    slug: "agentic-development-workflow",
    title: "Agentic development workflow",
    summary:
      "Planning, approval, implementation, verification, and Git checkpoint.",
    group: "workflow",
    status: "planned",
  },
  {
    slug: "exercises-and-experiments",
    title: "Development exercises and experiments",
    summary: "Practice work we take on to learn the process.",
    group: "practice",
    status: "planned",
  },
  {
    slug: "problems-and-solutions",
    title: "Problems and solutions",
    summary: "Issues we hit and how we resolved them.",
    group: "practice",
    status: "planned",
  },
  {
    slug: "lessons-learned",
    title: "Lessons learned",
    summary: "Durable takeaways from building this site.",
    group: "practice",
    status: "planned",
  },
  {
    slug: "product-evolution",
    title: "Evolution of the application",
    summary: "How the site itself changes as we learn.",
    group: "product",
    status: "planned",
  },
];

export function getGuides(): Guide[] {
  return guides;
}

export function getPublishedGuide(slug: string): PublishedGuide | undefined {
  const guide = guides.find((item) => item.slug === slug);
  if (guide?.status === "published") {
    return guide;
  }
  return undefined;
}

export function getPublishedGuides(): PublishedGuide[] {
  return guides.filter(
    (guide): guide is PublishedGuide => guide.status === "published",
  );
}
