const dashboards = [
  {
    tag: "Enterprise",
    title: "Enterprise",
    desc: "Org-wide command center for operations, finance, and compliance — with role-scoped views and audit trails.",
    points: ["Live operational KPIs", "Approval & workflow queues", "SOC-ready audit logs"],
  },
  {
    tag: "Life-OS",
    title: "Life OS",
    desc: "A personal operating layer that turns goals into daily systems and keeps momentum with gentle nudges.",
    points: ["Habit & goal tracking", "Daily improvement loop", "Focus and review rituals"],
  },
  {
    tag: "PulseOS",
    title: "Pulse OS",
    desc: "Real-time telemetry across every engine — streaming metrics, anomalies, and alerts in one console.",
    points: ["Streaming metrics", "Anomaly detection", "Routed alerting"],
  },
  {
    tag: "FS-POS",
    title: "FS · POS",
    desc: "A point-of-sale surface wired directly into inventory, payments, and the enterprise ledger.",
    points: ["Fast checkout", "Live inventory sync", "Unified ledger"],
  },
]

export function Dashboards() {
  return (
    <section id="dashboards" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">02 — Surfaces</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Four dashboards, purpose-built on the same data.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {dashboards.map((d, i) => (
            <article
              key={d.title}
              className="flex flex-col rounded-sm border border-border bg-surface p-7 transition-shadow hover:shadow-[0_1px_0_0_var(--border),0_12px_32px_-16px_rgba(14,27,58,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {d.tag}
                </span>
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{d.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
                {d.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm">
                    <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                    <span className="text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
