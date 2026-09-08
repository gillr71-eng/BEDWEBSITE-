import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SystemMap } from "@/components/system-map"
import { Dashboards } from "@/components/dashboards"
import { Principles } from "@/components/principles"
import { Metrics } from "@/components/metrics"
import { CallToAction } from "@/components/call-to-action"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <Hero />
        <SystemMap />
        <Dashboards />
        <Principles />
        <Metrics />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  )
}
