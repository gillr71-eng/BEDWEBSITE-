import { Cpu, Heart, Radio, Store, ShieldCheck, Layers } from "lucide-react"

const engines = [
  { id: "jo-bed", name: "JO·BED", role: "Job orchestration", icon: Cpu },
  { id: "bed", name: "BED Core", role: "Daily improvement loop", icon: Layers },
  { id: "pulseos", name: "PulseOS", role: "Real-time telemetry", icon: Radio },
  { id: "fs-pos", name: "FS·POS", role: "Point-of-sale engine", icon: Store },
  { id: "ipss", name: "IPSS", role: "Integration & security", icon: ShieldCheck },
  { id: "max-fusion", name: "MaxFusion", role: "Cross-engine synthesis", icon: Heart },
]

export function SystemMap() {
  return (
    <section id="system" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">01 — Architecture</p>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Six engines, one kernel.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Each engine is independent and observable, yet every event flows through a shared kernel — so state stays
            consistent across the entire operating system.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {/* Kernel banner */}
          <div className="bg-primary p-6 text-primary-foreground md:col-span-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary-foreground/10 font-mono text-sm">
                  ∑
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/60">
                    Shared kernel
                  </p>
                  <p className="text-sm font-semibold">Routing · Validation · Auth · Integration</p>
                </div>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-primary-foreground/70">
                event bus · &lt;40ms
              </span>
            </div>
          </div>

          {engines.map((engine) => {
            const Icon = engine.icon
            return (
              <div key={engine.id} className="group bg-surface p-6 transition-colors hover:bg-muted">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    online
                  </span>
                </div>
                <p className="mt-5 font-mono text-sm font-semibold tracking-tight">{engine.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{engine.role}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
