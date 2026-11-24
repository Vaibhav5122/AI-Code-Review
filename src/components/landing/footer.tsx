import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "@/features/auth/components/github-sign-in-form";

export function LandingFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30 text-xs sm:text-sm text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand Info */}
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <Image
                src="/logo2.svg"
                alt="DiffMind"
                width={18}
                height={18}
                className="text-foreground brightness-0 dark:invert"
              />
            </div>
            <div>
              <p className="font-semibold text-foreground">DiffMind</p>
              <p className="text-xs text-muted-foreground">
                Automated context-aware peer reviews powered by RAG &amp; Inngest.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#architecture" className="hover:text-foreground transition-colors">
              Architecture
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <Link href="/dashboard" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/sign-in" className="hover:text-foreground transition-colors">
              Sign In
            </Link>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              All Systems Operational
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DiffMind. Open Source under MIT License.</p>
          <p>
            Built with Next.js 16, Pinecone, Inngest, Neon, and Better Auth.
          </p>
        </div>
      </div>
    </footer>
  );
}
