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
    title: "How We Practice Agentic Software Development",
    summary:
      "This is the working loop we use in Agentic Development Lab when an AI coding agent helps with a change: define the problem, inspect the project, plan before coding, implement in bounded increments, verify independently, and checkpoint in Git when we choose to. Cursor is our current primary agent, but the steps apply to other agents too.",
    group: "workflow",
    status: "published",
    sections: [
      {
        heading: "1. Define the intent or problem",
        paragraphs: [
          "Before asking an agent to write code, we state what we want and why. That can be a feature, a fix, a documentation update, or a direction change. The goal is a clear outcome, not a vague request like make this better.",
          "This matters because agents expand scope easily. A precise intent keeps increments small and reversible. When we replaced the Next.js starter page, the intent was narrow: a simple professional landing page, no new dependencies, no dark-mode CSS changes. When we pivoted to a documentation site, we named that as a direction change before any routes were added.",
        ],
      },
      {
        heading: "2. Inspect the project and project instructions",
        paragraphs: [
          "We read the existing codebase and any project instructions before planning or implementing. In this repo that includes AGENTS.md, which is one example of a broader principle: every project has constraints, conventions, and things you must not change without approval.",
          "Agents do not automatically know your stack version, folder layout, or house rules. Inspecting first grounds the work in reality. Here that has meant checking the App Router structure, reading relevant Next.js docs under node_modules when APIs differ from older versions, and noting what files already exist before proposing new ones.",
        ],
      },
      {
        heading: "3. Ask the agent for a plan",
        paragraphs: [
          "For non-trivial work, we ask the agent to propose a plan before it edits files. The plan should name which files would change, what would change in each, whether new dependencies are needed, and how to verify the result.",
          "Planning separates design from execution. It gives us a reviewable artifact and catches scope problems early. Both the landing-page replacement and the documentation-site pivot started as planning-only requests. The agent described the approach; we decided whether to proceed.",
        ],
      },
      {
        heading: "4. Review and approve the plan",
        paragraphs: [
          "We read the plan critically and approve, revise, or reject it before implementation begins. Approval can include explicit constraints: no new packages, no commits, single-file change only, do not touch certain files.",
          "This is the human gate in agentic development. The agent is fast at generating code, but we remain responsible for direction. Approving a bounded plan prevents surprise refactors and keeps each increment aligned with what we actually want to learn or ship.",
        ],
      },
      {
        heading: "5. Give a clearly bounded implementation task",
        paragraphs: [
          "After approval, we give an implementation instruction that restates the scope boundary. Implement only this increment. Do not commit. Do not modify files outside the list. This is the moment the agent is allowed to change the tree.",
          "Bounded tasks reduce blast radius. When we built the first documentation increment, the task was explicit: add routes and content modules, one journal entry, planned guides only, no Markdown, no AGENTS.md edits. When we published this guide, the boundary was even tighter: change content/guides.ts only.",
        ],
      },
      {
        heading: "6. Inspect the actual files changed",
        paragraphs: [
          "When implementation finishes, we look at the diff and open the changed files. The code and content on disk are the source of truth, not the agent's summary of what it did.",
          "Agents can omit files, touch files they were told to leave alone, or describe changes inaccurately. Reading the actual edits catches that. We check that only approved files changed, that patterns match the rest of the project, and that nothing sensitive or unrelated slipped in.",
        ],
      },
      {
        heading: "7. Review the agent's claims rather than blindly trusting them",
        paragraphs: [
          "Agents produce confident summaries: lint passed, build succeeded, nothing was committed, the feature is complete. We treat those as hypotheses to verify, not facts.",
          "This step matters because verification reports can be wrong. A build may have failed on the first attempt and succeeded only after a retry with different network access. A summary may say work was not committed when it actually was. The habit is simple: read the claims, then check the evidence yourself.",
        ],
      },
      {
        heading: "8. Correct inaccurate AI-generated documentation when necessary",
        paragraphs: [
          "When documentation, journal entries, or guides do not match reality, we fix them. Agent output is draft material until a human confirms it against the project state.",
          "This is not a special case for one mistake. It follows directly from independent verification: any written record can drift from facts if nobody checks it. We corrected a journal entry when its description of Git checkpoints did not match the actual history. The principle applies everywhere agent-generated text appears, including guides, comments, and commit messages the agent drafts for us.",
        ],
      },
      {
        heading: "9. Independently run lint, build, and tests where appropriate",
        paragraphs: [
          "We run verification commands ourselves rather than relying on the agent's report. In this project today that means npm run lint and npm run build. When a test suite exists, we run those tests too.",
          "These are our current practices, not universal laws. Another stack might use different commands. The underlying principle is unchanged: automated checks catch errors early and confirm the project still builds cleanly. We have seen builds fail for environmental reasons, such as font fetching, and pass on retry. Running the commands ourselves tells us which case we are in.",
        ],
      },
      {
        heading: "10. Review Git diff and staging area",
        paragraphs: [
          "Before any checkpoint, we review what Git sees: unstaged changes, staged changes, and untracked files. git status and git diff show whether the tree matches our intent.",
          "This prevents committing the wrong files, missing files we meant to include, or accidentally staging secrets or generated artifacts. AGENTS.md in this repo reminds us not to commit .env files or .next output. The diff review is where we enforce that in practice.",
        ],
      },
      {
        heading: "11. Create a deliberate Git checkpoint",
        paragraphs: [
          "When we decide the increment is ready to save, we commit with a message that describes why the change exists. Commits are deliberate checkpoints, not something that must happen after every tiny edit.",
          "We might implement and verify several planning cycles before choosing to commit. The landing-page increment was committed as Create initial landing page once we were satisfied with it. Other increments can remain uncommitted until we explicitly choose to checkpoint them.",
        ],
      },
      {
        heading: "12. Push to GitHub",
        paragraphs: [
          "When we want the checkpoint on the remote, we push to GitHub. Push is a separate decision from commit, though we often do both together when an increment is ready to share or back up.",
          "Pushing makes the work visible on origin and protects against local-only loss. It also lets us confirm that what we think is saved locally is what the remote will receive.",
        ],
      },
      {
        heading: "13. Verify that the working tree and remote are synchronized",
        paragraphs: [
          "After pushing, we confirm local and remote state match our expectations: the branch points at the intended commit, the working tree is clean or intentionally dirty, and origin has what we pushed.",
          "For the landing-page checkpoint we verified that local main and origin/main both pointed at the same commit. That kind of check closes the loop. Without it, we might assume a push succeeded when it did not, or continue working on top of state we thought was already saved remotely.",
          "Together, these thirteen steps form a reusable loop. The journal records when we applied it and what happened. This guide explains the loop itself so we can apply it again on the next increment, with whichever agent and verification commands the project uses at that time.",
        ],
      },
    ],
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
