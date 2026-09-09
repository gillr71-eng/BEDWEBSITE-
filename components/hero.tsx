import { ArrowRight, Activity } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            v3 · all engines operational
          </span>
        </div>

        <h1 className="mt-8 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          One operating system for everything your organization runs.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          BED unifies your engines, workflows, and dashboards into a single coordinated system — so every team
          operates from the same source of truth and gets measurably better every day.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#access"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#system"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
          >
            <Activity className="h-4 w-4 text-accent" />
            View the system map
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
          {[
            { k: "Engines", v: "6" },
            { k: "Dashboards", v: "4" },
            { k: "Uptime", v: "99.99%" },
            { k: "Sync latency", v: "<40ms" },
          ].map((stat) => (
            <div key={stat.k} className="bg-surface px-5 py-4">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.k}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold tracking-tight">{stat.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
