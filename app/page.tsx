import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-white" />
            <span className="font-bold text-lg text-white">Vibe Coding</span>
          </Link>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="text-white hover:bg-white/10 hover:text-white border-white/20"
              asChild
            >
              <Link href="https://lu.ma/4sr4gh4g">Apply to Join</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Gradient circle background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[40rem] left-1/2 -z-10 h-[80rem] w-[80rem] -translate-x-1/2 [background:radial-gradient(circle,rgba(255,215,0,0.1),rgba(255,0,128,0.08),rgba(0,102,255,0.05))]" />
          </div>

          <div className="container flex flex-col items-center gap-4 py-32 text-center md:py-48">
            <h1 className="font-heading max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FF0080] to-[#0066FF] bg-clip-text text-transparent">
                Vibe Coding
              </span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Join the community where AI and human creativity merge. Build projects faster, learn together, and shape
              the future of development.
            </p>
            <Button
              size="lg"
              className="mt-6 bg-gradient-to-r from-[#FFD700] via-[#FF0080] to-[#0066FF] text-white hover:opacity-90"
              asChild
            >
              <Link href="https://lu.ma/4sr4gh4g">
                Apply to Join <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="container space-y-8 py-24 sm:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">Community Features</h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              Embrace the vibe coding revolution with these powerful features
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-b from-secondary/50 to-secondary/10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-[#FF0080]/5 to-[#0066FF]/5" />
              <CardHeader>
                <CardTitle>AI-First Discussions</CardTitle>
                <CardDescription>
                  Engage in conversations about leveraging AI in your development workflow.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative overflow-hidden border-0 bg-gradient-to-b from-secondary/50 to-secondary/10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-[#FF0080]/5 to-[#0066FF]/5" />
              <CardHeader>
                <CardTitle>Collaborative Learning</CardTitle>
                <CardDescription>Learn from peers and share your experiences with AI-assisted coding.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative overflow-hidden border-0 bg-gradient-to-b from-secondary/50 to-secondary/10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-[#FF0080]/5 to-[#0066FF]/5" />
              <CardHeader>
                <CardTitle>Project Showcases</CardTitle>
                <CardDescription>Share and explore projects built with AI assistance and get feedback.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="container py-24 sm:py-32">
          <div className="relative mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 rounded-3xl bg-secondary/50 px-4 py-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-[#FF0080]/5 to-[#0066FF]/5 rounded-3xl" />
            <h2 className="relative font-heading text-3xl font-bold sm:text-4xl">Ready to Join?</h2>
            <p className="relative max-w-[85%] text-muted-foreground sm:text-lg">
              Apply now to become part of the vibe coding revolution.
            </p>
            <Button
              size="lg"
              className="relative mt-4 bg-gradient-to-r from-[#FFD700] via-[#FF0080] to-[#0066FF] text-white hover:opacity-90"
              asChild
            >
              <Link href="https://lu.ma/4sr4gh4g">
                Apply to Join <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">Built by the Vibe Coding community.</p>
        </div>
      </footer>
    </div>
  )
}

