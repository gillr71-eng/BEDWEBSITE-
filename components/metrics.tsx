const metrics = [
  { v: "1.4M", k: "Events routed / day", d: "Across all six engines through the shared kernel." },
  { v: "37%", k: "Faster decisions", d: "Median time-to-action after unifying dashboards." },
  { v: "0", k: "Data silos", d: "One source of truth for every surface and team." },
]

export function Metrics() {
  return (
    <section id="metrics" className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">04 — Impact</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          What one coordinated system does.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.k} className="bg-primary p-8">
              <p className="font-mono text-5xl font-semibold tracking-tight">{m.v}</p>
              <p className="mt-4 text-sm font-medium">{m.k}</p>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-primary-foreground/60">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
