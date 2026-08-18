import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/guides", label: "Guides" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-foreground/10">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Agentic Development Lab
        </Link>
        <nav className="flex items-center gap-6 text-sm text-foreground/70">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
