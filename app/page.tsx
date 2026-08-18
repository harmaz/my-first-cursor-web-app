export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <header className="border-b border-foreground/10">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Cursor Web App
          </a>
          <nav className="flex items-center gap-6 text-sm text-foreground/70">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#about" className="hover:text-foreground">
              About
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
        <section className="flex flex-col gap-6 py-20 sm:py-28">
          <p className="text-sm font-medium tracking-wide text-foreground/60 uppercase">
            In development
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            A simple, professional foundation for what comes next.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-foreground/70">
            This is a personal Next.js app being built toward a commercial
            product. The starter template is gone. What remains is a clear
            place to start.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#features"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              See what&apos;s included
            </a>
            <a
              href="#about"
              className="flex h-12 items-center justify-center rounded-full border border-foreground/15 px-6 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Learn more
            </a>
          </div>
        </section>

        <section id="features" className="scroll-mt-8 border-t border-foreground/10 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
          <p className="mt-3 max-w-2xl text-foreground/70">
            A small set of building blocks, kept simple on purpose.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <article>
              <h3 className="font-semibold">Fast to iterate</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                Built with Next.js App Router, TypeScript, and Tailwind so
                changes stay small and easy to reverse.
              </p>
            </article>
            <article>
              <h3 className="font-semibold">Production-minded</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                Server-first by default, with room to grow into auth,
                payments, and data when those pieces are needed.
              </p>
            </article>
            <article>
              <h3 className="font-semibold">Clear structure</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                No extra libraries or layouts yet. The page is the product
                surface, and it can expand without a rewrite.
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="scroll-mt-8 border-t border-foreground/10 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 max-w-2xl leading-8 text-foreground/70">
            Cursor Web App is a personal project with commercial intent. The
            goal is to replace throwaway starter content with a professional
            first impression, then add product features one careful step at
            a time.
          </p>
        </section>
      </main>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-6 py-6 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cursor Web App</p>
          <p>Early development. More to come.</p>
        </div>
      </footer>
    </div>
  );
}
