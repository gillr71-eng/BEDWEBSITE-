import Link from "next/link"

const nav = [
  { label: "System", href: "#system" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Method", href: "#method" },
  { label: "Metrics", href: "#metrics" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground font-mono text-sm font-bold">
            B
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">BED</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Better Every Day
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#access"
            className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Sign in
          </a>
          <a
            href="#access"
            className="inline-flex items-center rounded-sm bg-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request access
          </a>
        </div>
      </div>
    </header>
  )
}
