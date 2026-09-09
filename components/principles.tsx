const steps = [
  {
    n: "01",
    title: "Measure",
    body: "Every engine emits structured telemetry to the kernel. Nothing runs unobserved — you always know the current state.",
  },
  {
    n: "02",
    title: "Improve",
    body: "The daily loop surfaces one meaningful change per surface, sized to ship today rather than someday.",
  },
  {
    n: "03",
    title: "Compound",
    body: "Small, consistent gains sync across every dashboard. Better every day becomes better by orders of magnitude.",
  },
]

export function Principles() {
  return (
    <section id="method" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">03 — Method</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              The whole system is designed around one idea: get{" "}
              <span className="text-primary">better every day.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              BED is not another dashboard to check. It is a closed feedback loop that turns raw activity into
              deliberate, compounding improvement — automatically, across every team.
            </p>
          </div>

          <ol className="flex flex-col">
            {steps.map((step, i) => (
              <li
                key={step.n}
                className={`flex gap-6 py-6 ${i !== steps.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="font-mono text-sm font-semibold text-accent">{step.n}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
