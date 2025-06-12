import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Jagrut Automation and Robotics - Solar Panel Cleaning Solutions",
  description: "Innovative solar panel cleaning robots engineered for maximum efficiency and sustainability.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/jagrut_logo.png" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className="pt-16">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
