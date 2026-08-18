

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

# Project rules

This is a personal Next.js App Router app (TypeScript, React 19, Tailwind CSS v4, npm) that may become a commercial product. Prefer small, reversible changes. Match existing patterns. Do not expand scope.

## Code quality

- Keep TypeScript `strict` on. Do not add `any`, `@ts-ignore`, or `@ts-expect-error` unless there is no better type and the reason is documented at the site.

- Prefer Server Components. Add `"use client"` only when browser APIs, local state, or event handlers require it.

- Reuse existing files, components, and naming. Do not introduce a new folder layout, state library, UI kit, or CSS approach unless asked.

- Keep functions and components small and named for intent. Avoid drive-by refactors, commented-out code, and comments that only restate the code.

- After edits, leave the change lint-clean. Do not weaken `eslint.config.mjs` to hide new issues.

## Security

- Treat this repo as production-bound. Never commit secrets, credentials, API keys, or `.env*` files. Never log secrets or put them in client code.

- Validate and authorize on the server. Do not trust client input, query params, headers, or cookies for access control.

- Do not add `dangerouslySetInnerHTML`, `eval`, or equivalent unless asked, and then only with a documented sanitization path.

- Default to least privilege for env vars, cookies, and third-party services. Do not enable public indexing, analytics, or user tracking unless asked.

## Testing

- There is no test suite yet. When adding non-trivial logic (auth, payments, data writes, API routes), add tests in the same change or ask before shipping without them.

- Ask before introducing a test runner, E2E tool, or coverage setup. Once present, do not merge behavior changes that leave related tests failing or skipped without saying so.

## Dependency management

- Use npm and keep `package-lock.json` in sync. Do not switch package managers or delete the lockfile.

- Ask before adding, removing, or upgrading a dependency, especially major versions. Justify new packages; do not add a dependency for a few lines of straightforward code.

- Prefer maintained, well-known libraries. Do not add unused packages or pin ranges that bypass the lockfile.

## Git

- Do not commit, push, amend, rebase, or change git config unless explicitly asked.

- Do not use destructive git `push --force`, `reset --hard`, branch deletion) unless explicitly asked.

- Never commit `.env*`, keys, credentials, or generated artifacts `.next/`, `node_modules/`). Keep the generated Next.js `AGENTS.md` block intact; add project rules below it, do not delete it.

## Maintainability

- Change only what the task needs. Do not rewrite `app/layout.tsx`, Tailwind, or Next.js config as part of an unrelated task.

- Before using Next.js APIs, read the relevant guide under `node_modules/next/dist/docs/` and follow current App Router conventions.

- Put shared UI in colocated components, server secrets and data access on the server, and public env in `NEXT_PUBLIC_*` only when it is safe to expose.

- If a change would be hard to undo (schema, auth, payments, public API), propose the approach first.

## Ask before changing

Stop and ask for confirmation before:

- Adding, removing, or upgrading dependencies, or switching package managers

- Introducing auth, payments, email, analytics, file storage, or a database

- Creating, deleting, or renaming many files, or changing project structure

- Changing `AGENTS.md`, `CLAUDE.md`, ESLint, TypeScript, Next.js, or deployment config

- Adding user-facing legal, privacy, or commercial billing behavior

- Installing global tools, running destructive commands, or deploying

