import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section id="access" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Bring every engine into one system.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            Request access to BED and see how a single operating system turns daily activity into compounding
            progress.
          </p>

          <form className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">
              Work email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              className="h-12 flex-1 rounded-sm border border-border bg-surface px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            No credit card · onboarding in days, not quarters
          </p>
        </div>
      </div>
    </section>
  )
}
