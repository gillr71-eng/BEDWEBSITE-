import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "BED — Better Every Day | The Unified Operating System",
  description:
    "BED connects every engine and dashboard your organization runs — enterprise, life, pulse, and point-of-sale — into one coordinated operating system. Ship better every day.",
  keywords: ["operating system", "platform", "dashboards", "workflow", "enterprise", "BED", "Better Every Day"],
  openGraph: {
    title: "BED — Better Every Day",
    description: "One operating system for every engine and dashboard your organization runs.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0e1b3a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
