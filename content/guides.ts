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
    summary:
      "A short map of the machine and tools used to build this site. Each topic has its own Setup guide. This page does not retell them.",
    group: "setup",
    status: "published",
    sections: [
      {
        heading: "1. What development environment means here",
        paragraphs: [
          "Development environment is the set of host, guest, runtime, app stack, editor, rules, and version control we use to build Agentic Development Lab. It is a map, not a duplicate of every Setup page.",
          "We keep this guide short on purpose. If a fact belongs to Windows and Ubuntu VM, SSH authentication, or Git and GitHub, it lives on that page. Follow the titles below rather than expecting a full tutorial here.",
        ],
      },
      {
        heading: "2. Host and guest: Windows and Ubuntu VM",
        paragraphs: [
          "Windows is the host. Project work happens in Ubuntu. Windows and Ubuntu VM explains that role split and what we refuse to invent about hypervisors and installers.",
        ],
      },
      {
        heading: "3. Runtime and app stack",
        paragraphs: [
          "Node.js, npm, and NVM covers the runtime, npm, and the lockfile. Next.js, React, TypeScript, and Tailwind covers the application stack and the conventions we follow in it.",
        ],
      },
      {
        heading: "4. Editor, agent, and project rules",
        paragraphs: [
          "Cursor and Cursor Agent names Cursor as the current primary agent inside the approved loop. AGENTS.md and project rules explains the instruction file and how it differs from the journal and the guides.",
        ],
      },
      {
        heading: "5. Git, GitHub, and SSH",
        paragraphs: [
          "Git and GitHub is the checkpoint practice: inspect, stage, commit, push, and verify. SSH authentication records that origin is an SSH GitHub remote. Read those two pages instead of a shortened retelling here.",
        ],
      },
      {
        heading: "6. How to use this map",
        paragraphs: [
          "Start here to see the shape of the environment. Open the named Setup guide when you need the verified facts and the omissions for that tool. How We Practice Agentic Software Development is the working loop that uses this environment.",
          "Planned overlapping slugs were not added. If a topic is missing from this map, it is because we have not published a Setup guide for it, not because this overview should grow into a catch-all.",
        ],
      },
    ],
  },
  {
    slug: "windows-ubuntu-vm",
    title: "Windows and Ubuntu VM",
    summary:
      "We do this project's work in an Ubuntu environment, with Windows as the named host. This page records that split and what we can actually verify, not a virtual-machine install tutorial.",
    group: "setup",
    status: "published",
    sections: [
      {
        heading: "1. Why this page is a role description, not a hypervisor tutorial",
        paragraphs: [
          "The development environment for Agentic Development Lab is a split: Windows is the host, and the project work happens in Ubuntu. That is the role each side plays. It is not a recipe for building a virtual machine from scratch.",
          "We write it this way because the split is real and it shapes how we work, but most of the hardware and installer detail is not recorded in this repository. A generic VM tutorial would invent those details. This guide stays at the level we can stand behind.",
        ],
      },
      {
        heading: "2. What we can verify about the environment we work in",
        paragraphs: [
          "The planned topic has been on the site map since the documentation-shell increment: Windows and Ubuntu VM. Git commits in this repository are authored as Ambes Ubuntu. The machine where we edit this project reports Linux.",
          "Those facts confirm an Ubuntu work environment. They do not tell us the Windows version, the virtualization product, or how the guest was installed. We treat the author name and the Linux environment as evidence of where the work happens, not as a full host-and-guest specification.",
        ],
      },
      {
        heading: "3. How this fits the rest of Setup",
        paragraphs: [
          "Node.js, npm, NVM, Git, SSH, Cursor, and the Next.js app all run in this Ubuntu work environment. The other Setup guides describe those tools. Development environment is the short map that points at them.",
          "When we say we often run Git ourselves on a local machine, this is the machine we mean: the Ubuntu environment where the repo lives. Windows remains the host around that environment.",
        ],
      },
      {
        heading: "4. What this page does not document",
        paragraphs: [
          "We do not name a hypervisor, disk size, CPU or RAM, Ubuntu release, or Windows edition. We also do not include install commands, screenshots, or steps for creating the virtual machine.",
          "Those omissions are deliberate. The page would become a generic tutorial if we filled the gaps from common practice instead of from this project. If we later record a verified host or guest fact, it belongs here. Until then, the role split is the whole claim.",
        ],
      },
    ],
  },
  {
    slug: "git-and-github",
    title: "Git and GitHub",
    summary:
      "Git is our safety and checkpoint system in Agentic Development Lab: named, reviewable states we choose to keep, not a save button. We inspect status and diffs, stage only what belongs to the increment, commit with intent, push to GitHub as a separate decision, and verify that local and origin match. This is how we use Git here, not a tutorial for every workflow.",
    group: "setup",
    status: "published",
    sections: [
      {
        heading: "1. Why Git is our safety and checkpoint system, not just a save button",
        paragraphs: [
          "A Git checkpoint is a named, reviewable, recoverable state tied to an increment. We create one when we decide the work is ready to keep, not after every tiny edit. We might plan, implement, and verify several times before we choose to commit.",
          "That matters because a save button only preserves the latest files. A checkpoint lets us compare, roll back, and recover a known-good state. Git sits at the end of our agent loop for that reason. How We Practice Agentic Software Development explains where inspection, staging, commit, push, and verification fit in that loop. This guide does not retell those steps. It explains the Git practice itself.",
        ],
      },
      {
        heading: "2. Inspect git status before and after an increment",
        paragraphs: [
          "Before we start an increment, we look at git status so we know the baseline: which branch we are on, whether it tracks a remote, and whether the tree is already dirty. After implementation, we look again. In this project today we often use git status -sb, which shows the branch, tracking, and staged, unstaged, and untracked files in a short form. We work on main, which tracks origin/main.",
          "These are our current commands, not universal laws. The underlying habit is to catch surprise changes and confirm the tree matches the approved increment. Agents can omit files, touch files they were told to leave alone, or leave untracked paths behind. Status is how we notice before anything is staged.",
        ],
      },
      {
        heading: "3. Read the actual diff, including untracked files",
        paragraphs: [
          "After status, we read the actual changes. git diff shows unstaged work. git diff --staged shows what is already in the index. Untracked files do not appear in those diffs, so we also review the untracked paths from status rather than assuming they are unimportant.",
          "The diff on disk is the source of truth, not the agent's summary of what it did. A summary can miss files, describe edits inaccurately, or skip untracked content. Reading the diff is the same independent-verification habit we use for lint and build reports.",
        ],
      },
      {
        heading: "4. Stage only the files that belong to the approved increment",
        paragraphs: [
          "We stage deliberately, usually with git add on specific paths, so the next commit contains only the approved increment. We do not treat git add . as the default unless the whole working tree is in scope. A documentation increment that only changes content/guides.ts should stage that file, not leftover experiments sitting nearby.",
          "Staging is the last chance to keep a checkpoint aligned with the plan. Mixing unrelated files, generated output, or leftover edits into the same commit makes history harder to review and harder to undo. The approved boundary is the staging rule, not the entire dirty tree.",
        ],
      },
      {
        heading: "5. Create a deliberate commit with a message that explains why",
        paragraphs: [
          "When we decide the increment is ready, we commit with a message that explains why the change exists. Two examples from this repository are 4278c9a, Create initial landing page, and e1fc733, Create Agentic Development Lab documentation shell. Those messages name the intent, not a file list.",
          "A why-focused message makes the checkpoint useful later, when we need to understand what we meant to keep. Commits stay optional until we choose to create one. AGENTS.md in this repo tells agents not to commit unless we explicitly ask, which keeps that decision with us.",
        ],
      },
      {
        heading: "6. Push to the remote as a separate decision from commit",
        paragraphs: [
          "A commit is a local checkpoint. A push puts that checkpoint on GitHub. We treat them as separate decisions, even though we often do both together when an increment is ready to share or back up. In this repository the remote is named origin, and main tracks origin/main.",
          "Pushing protects against local-only loss and makes the work visible on origin. Keeping push separate from commit means we can checkpoint locally before we are ready for the remote, and we do not treat a local commit as already backed up. AGENTS.md also tells agents not to push unless we explicitly ask.",
        ],
      },
      {
        heading: "7. Verify that local and origin point at the intended checkpoint",
        paragraphs: [
          "After pushing, we confirm local and remote state match our expectations. In this project today that often means git status -sb and git branch -vv: the branch should track origin, and both should point at the intended commit. For the landing-page checkpoint we verified that local main and origin/main both pointed at 4278c9a.",
          "Without this check we might assume a push succeeded when it did not, or continue working on top of state we thought was already saved remotely. The verification closes the loop. These commands are our current practice, not the only valid way to confirm a remote checkpoint.",
        ],
      },
      {
        heading: "8. What we do not commit",
        paragraphs: [
          "We do not commit secrets, credentials, API keys, or .env files. We also do not commit generated artifacts such as .next output or node_modules. AGENTS.md in this repo is the rule set for that list. We also leave out files that are simply outside the approved increment.",
          "Secrets in Git history are hard to unwind. Generated output bloats the repo and is not the source of truth. Unrelated files blur the checkpoint. The status and diff review in the earlier sections is where we enforce these rules in practice, rather than relying on memory at commit time.",
        ],
      },
      {
        heading: "9. Local machine versus agent environments",
        paragraphs: [
          "On a local machine we often run Git ourselves. In some agent environments the agent may commit or push when the environment instructions require it.",
          "The same principle holds either way: a checkpoint is a decision, not an autosave. Who types the command can change. Whether the increment is ready to keep does not.",
        ],
      },
    ],
  },
  {
    slug: "ssh-authentication",
    title: "SSH authentication",
    summary:
      "GitHub access for this repository uses an SSH remote named origin. This page records that fact and what it is for. Git and GitHub covers inspect, stage, commit, push, and verify.",
    group: "setup",
    status: "published",
    sections: [
      {
        heading: "1. What SSH is for in this project",
        paragraphs: [
          "We use SSH so Git can talk to GitHub as origin. Fetch and push go through that remote. Authentication is the means; the checkpoint practice is separate.",
          "That split matters. A working SSH remote lets us back up a commit we already chose to keep. It does not decide whether the increment is ready. AGENTS.md still tells agents not to push unless we explicitly ask.",
        ],
      },
      {
        heading: "2. What we can verify about the remote",
        paragraphs: [
          "In this repository origin is an SSH URL on GitHub, and main tracks origin/main. We have used that remote to push checkpoints such as the landing page, the documentation shell, and the Git guide.",
          "We do not paste the clone URL here. The URL can change, and copying it into a guide is not what this page is for. The verified fact is the transport: SSH to GitHub, remote name origin.",
        ],
      },
      {
        heading: "3. Where Git practice lives instead",
        paragraphs: [
          "Inspecting status, reading the diff, staging, committing with intent, pushing, and verifying that local and origin match are all in Git and GitHub. How We Practice Agentic Software Development places those steps at the end of the agent loop.",
          "This page does not retell those sections. If you need the checkpoint habit, read those guides. If you need to know how this repo authenticates to GitHub, the answer is SSH on origin.",
        ],
      },
      {
        heading: "4. What this page does not document",
        paragraphs: [
          "We do not document key algorithms, ssh-keygen steps, ssh-agent usage, or how to create a GitHub account and add a key. We also do not describe Cursor Cloud UI or compare SSH with HTTPS as a general tutorial.",
          "Those topics are real elsewhere. They are not recorded as verified practice in this repository. Inventing a key setup walkthrough would pad the page without making our actual remote clearer.",
        ],
      },
    ],
  },
  {
    slug: "nodejs-npm-nvm",
    title: "Node.js, npm, and NVM",
    summary:
      "This app runs on Node.js, installs packages with npm and package-lock.json, and uses NVM on the machine where we work. Versions on this page are what we observed while writing it, not a locked engines field.",
    group: "setup",
    status: "published",
    sections: [
      {
        heading: "1. What each tool is for in this repo",
        paragraphs: [
          "Node.js is the runtime. npm is how we install dependencies and run scripts. NVM is present on the machine where we work and is how Node is managed there. AGENTS.md requires npm and keeping package-lock.json in sync.",
          "We do not treat those roles as interchangeable. Switching package managers would be a project-rules change. NVM is the version manager we use; it is not a second package manager.",
        ],
      },
      {
        heading: "2. What package.json and the lockfile actually pin",
        paragraphs: [
          "package.json names the app scripts we run: npm run dev, npm run build, npm run start, and npm run lint. Dependencies include Next.js 16.3.1, React 19.2.8, and React DOM 19.2.8. Dev dependencies include TypeScript, ESLint, eslint-config-next 16.3.1, and Tailwind CSS v4 via @tailwindcss/postcss.",
          "package-lock.json is committed and uses lockfileVersion 3. There is no engines field in package.json, so this repository does not lock a Node version for installers. The lockfile pins packages, not the Node binary.",
        ],
      },
      {
        heading: "3. Current runtime observed on this machine",
        paragraphs: [
          "While writing this page we observed Node v24.19.0 and npm 11.17.0. NVM is available in this environment. Those numbers are current practice on this machine, not a requirement encoded in the repo.",
          "If the runtime changes later, the next edit to this guide should observe again rather than copy these versions forward as if they were pinned. Until package.json grows an engines field, treat them as a snapshot.",
        ],
      },
      {
        heading: "4. What this page does not document",
        paragraphs: [
          "We do not document NVM version, nvm install recipes, nvm use aliases, or commands for installing Node from scratch. We also do not compare npm with yarn, pnpm, or bun as a tutorial. The create-next-app README still mentions those other runners; that leftover is not our practice.",
          "Install walkthroughs would be generic. Our verified practice is npm, the lockfile, the scripts in package.json, and the runtime we observed while writing.",
        ],
      },
    ],
  },
  {
    slug: "nextjs-react-typescript-tailwind",
    title: "Next.js, React, TypeScript, and Tailwind",
    summary:
      "The application stack we actually use: Next.js App Router, React 19, TypeScript in strict mode, and Tailwind CSS v4. Conventions come from AGENTS.md and from the files already in this repo, not from a framework tutorial.",
    group: "setup",
    status: "published",
    sections: [
      {
        heading: "1. What the stack is in this repo",
        paragraphs: [
          "package.json pins Next.js 16.3.1, React 19.2.8, and React DOM 19.2.8. TypeScript is a dev dependency with strict mode on in tsconfig.json. Tailwind CSS v4 is wired through @tailwindcss/postcss and postcss.config.mjs. ESLint uses eslint-config-next 16.3.1.",
          "The journal records that we bootstrapped with create-next-app: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, and npm. That is still the stack. We have not added a UI kit, state library, or CMS.",
        ],
      },
      {
        heading: "2. App Router and Server Components as we use them",
        paragraphs: [
          "Routes live under app/. Home, Journal, and Guides are Server Components. Guide and journal bodies are typed objects in content/guides.ts and content/journal.ts. We add the use client directive only when browser APIs, local state, or event handlers require it. This site has not needed that yet.",
          "AGENTS.md prefers Server Components for that reason. The documentation pages do not need client-side interactivity to render published sections. Keeping them on the server matches the existing pattern and keeps the increment small.",
        ],
      },
      {
        heading: "3. TypeScript and lint as current checks",
        paragraphs: [
          "TypeScript stays strict. We do not add any, @ts-ignore, or @ts-expect-error unless there is no better type and the reason is documented at the site. After edits we leave the change lint-clean rather than weakening eslint.config.mjs.",
          "Our current verification commands are npm run lint and npm run build. There is no test suite yet. AGENTS.md says to add tests when we add non-trivial logic, and to ask before introducing a test runner.",
        ],
      },
      {
        heading: "4. Tailwind v4 and why we leave globals.css alone",
        paragraphs: [
          "Styling uses existing Tailwind utilities and the background and foreground tokens in app/globals.css. We did not add dark: utility classes when we replaced the starter page, and we have not taken on dark-mode CSS work since.",
          "Leaving globals.css unchanged unless a task truly needs it is a scope rule, not a claim that the file is perfect. The theme tokens already define light and dark colors. Product copy uses those tokens so we do not fork the stylesheet in a documentation increment.",
        ],
      },
      {
        heading: "5. Next.js docs in node_modules, because this version differs from older training data",
        paragraphs: [
          "AGENTS.md opens with a generated block: this is not the Next.js an older model may remember. Before using Next.js APIs we read the relevant guide under node_modules/next/dist/docs/ and follow current App Router conventions.",
          "That habit showed up when we built routes and metadata. generateStaticParams on the guide and journal slug pages publishes whatever content modules mark as published. We do not invent older Pages Router patterns or extra route trees.",
        ],
      },
      {
        heading: "6. What we have refused to add so far",
        paragraphs: [
          "We have not added Markdown or MDX, a CMS, a database, authentication, search, tags, nested /guides/setup routes, or public indexing. Documentation stays in TypeScript modules. This batch publishes the remaining planned Setup, Practice, and Product guides.",
          "Those refusals keep the site reversible and keep each increment reviewable. The stack is enough to record the work. Expanding it would be a different product decision, and AGENTS.md says to ask before that kind of change.",
        ],
      },
    ],
  },
  {
    slug: "cursor-and-cursor-agent",
    title: "Cursor and Cursor Agent",
    summary:
      "Cursor is our current primary coding agent. We use it inside this repo's planning, approval, and bounded-implementation loop. This page names that role. How We Practice Agentic Software Development is the loop.",
    group: "setup",
    status: "published",
    sections: [
      {
        heading: "1. What Cursor is in this project",
        paragraphs: [
          "Cursor is the editor and agent we actually use to plan and implement changes in this repository. How We Practice Agentic Software Development states that Cursor is our current primary agent, and that the steps apply to other agents too.",
          "The agent is fast at proposing plans and editing files. We remain responsible for intent, approval, and verification. Naming Cursor here records current practice. It does not make the workflow Cursor-only.",
        ],
      },
      {
        heading: "2. Agent work is still bounded by AGENTS.md and our approval",
        paragraphs: [
          "Before the agent edits files, we inspect AGENTS.md and the existing codebase, ask for a plan, and approve a bounded task. Implementation starts only after that gate. Landing page, documentation shell, workflow guide, Git guide, and journal correction all followed that shape.",
          "AGENTS.md tells the agent not to commit or push unless we explicitly ask, not to add dependencies without confirmation, and not to expand scope. Cursor does not override those rules. The instruction file and our approval are the constraints.",
        ],
      },
      {
        heading: "3. Local machine versus other agent environments",
        paragraphs: [
          "On a local machine we often run Git ourselves. In some agent environments the agent may commit or push when the environment instructions require it. Git and GitHub already states that split.",
          "Who types the command can change. Whether an increment is ready to keep does not. This page does not describe other products' UIs. It only records that Cursor is what we use here, inside the same checkpoint principle.",
        ],
      },
      {
        heading: "4. What this page does not document",
        paragraphs: [
          "We do not document Cursor Cloud UI, model names, settings, keybindings, or a tour of Autocomplete versus Agent versus Chat. Those would be product manuals, not verified practice in this repo.",
          "CLAUDE.md in this project is a pointer to AGENTS.md. We are not editing it in this increment. Project rules live in AGENTS.md. The working loop lives in the workflow guide.",
        ],
      },
    ],
  },
  {
    slug: "agents-md-and-project-rules",
    title: "AGENTS.md and project rules",
    summary:
      "AGENTS.md is the instruction file agents must read before planning or implementing. It is not the journal and not a guide. This page explains that distinction and the rules we actually rely on.",
    group: "setup",
    status: "published",
    sections: [
      {
        heading: "1. What AGENTS.md is for",
        paragraphs: [
          "AGENTS.md tells an agent how to work in this repository: stack, conventions, security, Git behavior, and what to ask before changing. How We Practice Agentic Software Development already says to inspect project instructions before planning. This file is that instruction set.",
          "We keep it in the repo so every increment starts from the same constraints. The agent does not get a private copy of the rules. If a rule is not in AGENTS.md or in the approved task, it is not an instruction.",
        ],
      },
      {
        heading: "2. Keep the generated Next.js block; put project rules below it",
        paragraphs: [
          "The top of AGENTS.md is a generated Next.js block. It warns that this version has breaking changes and that we should read guides under node_modules/next/dist/docs/ before writing code. next dev may rewrite that block. Removing it from a diff only recreates the uncommitted change.",
          "Project rules go below that block. We do not delete the generated section. CLAUDE.md in this repo is a one-line pointer, @AGENTS.md, and we do not duplicate the rules there.",
        ],
      },
      {
        heading: "3. Purpose of this repo, as the file now states",
        paragraphs: [
          "The first project-rules sentence now names Agentic Development Lab as living documentation of our agentic development practice and the project we use to practice that process. It no longer describes a generic app that may become a commercial product.",
          "The rest of the rule sections stay: code quality, security, testing, dependency management, Git, maintainability, and ask-before-changing. Changing AGENTS.md itself is on that ask-before list. This increment updates only the purpose sentence because that update was approved.",
        ],
      },
      {
        heading: "4. Rules we have actually used",
        paragraphs: [
          "We prefer small, reversible changes and existing patterns. We keep TypeScript strict and prefer Server Components. We do not commit secrets, .env files, .next output, or node_modules. Agents must not commit, push, amend, or rebase unless we explicitly ask.",
          "We also stop and ask before adding dependencies, introducing auth, payments, a database, or analytics, and before changing ESLint, TypeScript, Next.js, or deployment config. Those rules showed up as real boundaries on the landing page, the documentation shell, and every published guide so far.",
        ],
      },
      {
        heading: "5. Journal versus guides versus AGENTS.md",
        paragraphs: [
          "The journal is a chronological record of what happened and when. Guides are topical reference we fill in after we have done the work. AGENTS.md is standing instruction for agents, not a narrative and not a lesson.",
          "Mixing those three produces drift. A journal entry that copies a guide becomes a second workflow page. A guide that pastes AGENTS.md becomes a stale dump. An instruction file that tells the project story will rot when the next increment lands. Keep each in its place.",
        ],
      },
      {
        heading: "6. What this page does not retell",
        paragraphs: [
          "This page does not retell the thirteen steps in How We Practice Agentic Software Development. It does not retell the nine sections in Git and GitHub. Those guides already exist.",
          "It also does not paste the entire AGENTS.md file. The source of truth for the wording of a rule is AGENTS.md itself. Read that file when you need the full list.",
        ],
      },
    ],
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
    summary:
      "The planning-only and bounded-increment exercises we have actually run on this site. This is not a list of hypothetical katas.",
    group: "practice",
    status: "published",
    sections: [
      {
        heading: "1. What counts as an exercise here",
        paragraphs: [
          "An exercise in this lab is a real increment we ran with a planning gate, an approval, a file boundary, and independent verification. We do not invent drills we have not done.",
          "Two shapes repeat: planning-only requests that change no files, and bounded implementation that may touch only the approved paths. Git remains a separate decision.",
        ],
      },
      {
        heading: "2. Landing page: plan, then a bounded replace",
        paragraphs: [
          "The first product exercise replaced the create-next-app starter with a static Server Component landing page. The plan named the files, forbade new dependencies, and left globals.css unchanged. After approval we changed app/page.tsx and metadata in app/layout.tsx. The working name then was Cursor Web App.",
          "Verification was npm run lint and npm run build. We then checkpointed 4278c9a, Create initial landing page, and verified that local main and origin/main matched.",
        ],
      },
      {
        heading: "3. Docs-site turn: plan, then a documentation shell",
        paragraphs: [
          "We changed direction with a planning-only request, then implemented a living documentation site: shared navigation, content modules, Journal and Guides routes, one real journal entry, and planned guide slugs without empty pages. No Markdown, CMS, database, or authentication.",
          "That increment became e1fc733, Create Agentic Development Lab documentation shell. Guides started as planned topics rather than empty pages.",
        ],
      },
      {
        heading: "4. First published guides: workflow, then Git, each as a single-file publish after a plan",
        paragraphs: [
          "How We Practice Agentic Software Development was planned, approved, and published by promoting the existing agentic-development-workflow slug in content/guides.ts. Commit b3be9b0 contains that publish: the title change and thirteen sections. The commit message is Polish guides and journal experience; the diff is content/guides.ts only.",
          "Git and GitHub followed the same exercise with a tighter boundary: one file, nine sections, no journal or AGENTS.md edits in that increment. We checkpointed it as 4b19432, Publish Git and GitHub setup guide.",
        ],
      },
      {
        heading: "5. Accuracy work: journal versus Git, and the Git-guide wording review",
        paragraphs: [
          "We ran bounded text corrections when the journal disagreed with Git, including the landing-page checkpoint and later fdc11b4. Those were accuracy exercises, not new features.",
          "The Git-guide review asked for nine spacing fixes. Re-reading content/guides.ts before checkpointing showed the spaced phrases already present. There was no separate spacing-fix commit. Checking the file was the exercise.",
        ],
      },
      {
        heading: "6. This batch as another planning-only gate before a larger content increment",
        paragraphs: [
          "The remaining Setup, Practice, and Product guides were planned as one batch before any of these files changed. The plan listed slugs, omissions, AGENTS.md's purpose sentence, and the journal entry. Implementation starts only after that approval.",
          "That is the same exercise as the earlier guides, scaled to more pages, still without a platform rewrite. The journal entry for this batch records what we published and what we omitted.",
        ],
      },
    ],
  },
  {
    slug: "problems-and-solutions",
    title: "Problems and solutions",
    summary:
      "Issues we actually hit in this repository and how we handled them. This page records three incidents only: a Geist font fetch failure, journal text that did not match Git, and concatenated words found during Git-guide review.",
    group: "practice",
    status: "published",
    sections: [
      {
        heading: "1. Why we only record verified incidents",
        paragraphs: [
          "A problems page that invents extra war stories becomes fiction. We only list incidents that already appear in this project's journal, guides, or review history.",
          "The three below are enough to show the habit: verify independently, correct the written record when it drifts, and re-read the actual file instead of trusting a review list blindly.",
        ],
      },
      {
        heading: "2. Geist font fetch failed the first production build",
        paragraphs: [
          "When we replaced the starter page, npm run lint passed and npm run build did not, on the first try. next/font could not fetch Geist from Google Fonts in a restricted network environment.",
          "Retrying the build with network access succeeded, and the home route prerendered as static HTML. The lesson is not a font-configuration tutorial. It is that a failed build can be environmental, and that we run the command ourselves rather than trusting a first report.",
        ],
      },
      {
        heading: "3. Journal text that did not match Git",
        paragraphs: [
          "Agent-generated journal text drifted from history more than once. After the landing page, the journal claimed nothing from that increment was committed, when commit 4278c9a, Create initial landing page, already existed on origin/main. We corrected the entry to name that checkpoint.",
          "Later the first journal entry still described the documentation-shell increment as uncommitted after e1fc733 existed. Commit fdc11b4, Correct journal Git history and record Git guide increment, fixed that paragraph and added a second entry for the Git guide. How We Practice Agentic Software Development treats this as a standing step: correct inaccurate AI-generated documentation when necessary.",
        ],
      },
      {
        heading: "4. Concatenated words found during Git-guide review",
        paragraphs: [
          "After the Git and GitHub guide was implemented, review asked to fix nine smashed phrases in content/guides.ts, including Inthis project, theapproved increment, told toleave alone, repositoryare 4278c9a, whenwe need, untilwe choose, gitbranch -vv, weenforce these, and committime.",
          "We re-read the file before checkpointing. The spaced forms were already in the file. There was no separate spacing-fix commit. The incident is the review finding and the independent re-read, not a silent rewrite of the guide.",
        ],
      },
      {
        heading: "5. The shared habit behind these three",
        paragraphs: [
          "Each incident is a verification failure or a verification success: the build needed a retry we could see, the journal needed Git as the source of truth, and the smashed-word list needed the file on disk.",
          "We do not add other incidents here. If a later increment produces a new verified problem, it can earn a section. Until then, these three are the set.",
        ],
      },
    ],
  },
  {
    slug: "lessons-learned",
    title: "Lessons learned",
    summary:
      "Durable takeaways from work already done in this repository. This is not a retelling of the thirteen-step workflow or the Git guide.",
    group: "practice",
    status: "published",
    sections: [
      {
        heading: "1. Plan before the agent edits files",
        paragraphs: [
          "Non-trivial work in this project starts as a planning-only request. The landing page, the docs-site turn, the workflow guide, the Git guide, the journal correction, and this remaining-guides batch all had a written plan before implementation.",
          "Planning is the cheapest review. It catches extra dependencies, extra files, and tutorial-shaped documentation while the tree is still clean.",
        ],
      },
      {
        heading: "2. Keep increments small, approved, and reversible",
        paragraphs: [
          "We ship bounded tasks: replace the starter page without new packages, add a documentation shell without Markdown, publish one guide in one file, correct journal wording in one file. Approval names the files that may change.",
          "Small increments are easier to inspect and easier to undo. AGENTS.md's preference for reversible changes is a lesson we have practiced, not only a rule we have written.",
        ],
      },
      {
        heading: "3. Treat agent summaries as hypotheses",
        paragraphs: [
          "Agents report that lint passed, the build succeeded, or only the approved files changed. We treat those claims as things to check. The Geist font failure is the concrete example: the first build did not succeed, and a retry with network access did.",
          "The same habit applies to Git. Status and diff on disk are the source of truth, not a paragraph that says nothing was committed.",
        ],
      },
      {
        heading: "4. Correct the written record when it drifts from Git or the tree",
        paragraphs: [
          "Documentation that disagrees with history is a bug. We have already had to fix journal text that denied a landing-page checkpoint and journal text that left the documentation shell uncommitted after e1fc733.",
          "Guides can drift the same way if we invent setup details we have not verified. Omitting hypervisor, SSH key, and nvm install facts is part of this lesson, not a lack of completeness.",
        ],
      },
      {
        heading: "5. Write only what we have actually done",
        paragraphs: [
          "This site documents practice in this repository. When a topic is real but thin, we say what role it plays and what we omit. We do not fill Windows, SSH, or NVM pages with generic tutorials.",
          "That constraint keeps the lab honest. A longer page that is not ours is worse than a short page that is.",
        ],
      },
      {
        heading: "6. Checkpoints are decisions",
        paragraphs: [
          "Git is a named, reviewable state we choose to keep, not a save button. AGENTS.md forbids agents from committing or pushing unless we ask. We may plan, implement, and verify several times before we checkpoint.",
          "The Git guide is the practice. The lesson here is the decision: an increment can be finished as code and still wait for an explicit checkpoint.",
        ],
      },
    ],
  },
  {
    slug: "product-evolution",
    title: "Evolution of the application",
    summary:
      "How this site changed: create-next-app starter, then a landing page, then Agentic Development Lab as a docs site, then published workflow and Git guides, then a journal correction, then this remaining-guides batch.",
    group: "product",
    status: "published",
    sections: [
      {
        heading: "1. Starter app and project rules",
        paragraphs: [
          "The repository began as f66b3e8, Initial Next.js project setup: a default create-next-app App Router app. Commit 0e1a5d3, Add project rules for agentic development, added AGENTS.md constraints on top of that starter.",
          "At that point the product was still the starter screen. The rules already preferred Server Components, TypeScript strict, small reversible changes, and no extra dependencies without a reason.",
        ],
      },
      {
        heading: "2. Landing page (Cursor Web App)",
        paragraphs: [
          "We replaced the starter with a static landing page and updated layout metadata. The working name was Cursor Web App. We did not add packages and we did not change globals.css.",
          "That increment is 4278c9a, Create initial landing page. We pushed it to origin/main and verified that local main and origin/main both pointed at 4278c9a.",
        ],
      },
      {
        heading: "3. Direction change to a docs lab",
        paragraphs: [
          "The site stopped being a generic product shell. It became Agentic Development Lab: living documentation of agentic software development, and the project we use to practice that process. Shared navigation covers Home, Journal, and Guides.",
          "Commit e1fc733, Create Agentic Development Lab documentation shell, added the content modules, routes, one journal entry, and a list of planned guide slugs. There was still no Markdown, CMS, database, or authentication.",
        ],
      },
      {
        heading: "4. First published workflow guide",
        paragraphs: [
          "Commit b3be9b0, Polish guides and journal experience, published How We Practice Agentic Software Development. git show on that commit shows only content/guides.ts: the existing agentic-development-workflow slug moved from planned to published, the title changed, and thirteen sections were added.",
          "The commit message mentions journal experience. The diff does not change journal files. We attribute b3be9b0 as the workflow-guide publish, not as a journal rewrite.",
        ],
      },
      {
        heading: "5. First published Setup guide (Git and GitHub)",
        paragraphs: [
          "Commit 4b19432, Publish Git and GitHub setup guide, promoted git-and-github in content/guides.ts only. That was the first Setup guide on the site.",
          "The workflow guide already placed Git at the end of the agent loop. The Git guide is the checkpoint practice itself. We did not merge those two pages.",
        ],
      },
      {
        heading: "6. Journal brought back in line with Git",
        paragraphs: [
          "The first journal entry had to be corrected so the landing-page checkpoint matched 4278c9a. Later it still described the documentation shell as uncommitted after e1fc733 existed.",
          "Commit fdc11b4, Correct journal Git history and record Git guide increment, fixed that paragraph and added the Git-guide journal entry. That checkpoint is the baseline that existed before this remaining-guides batch.",
        ],
      },
      {
        heading: "7. This remaining-guides batch, as a change to the site map",
        paragraphs: [
          "This increment publishes the remaining planned Setup, Practice, and Product guides, updates the AGENTS.md purpose sentence, and adds a journal entry for the batch. The homepage Guides blurb no longer says most topics are still planned.",
          "The site is still the same app: TypeScript content modules, Server Components, no Markdown platform. What changed is that the map is filled in from verified practice, with omissions where the repo does not support a tutorial.",
        ],
      },
    ],
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
