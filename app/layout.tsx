import { Mona_Sans as FontSans } from "next/font/google"
import type React from "react"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Vibe Coding - The Future of Development",
  description:
    "Join the community where AI and human creativity merge. Build projects faster, learn together, and embrace the future of development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'