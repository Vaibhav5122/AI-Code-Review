import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { GitHubIcon } from "@/features/auth/components/github-sign-in-form";
import { PrPreview } from "./pr-preview";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background Decorative Gradients & Radial Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[450px] w-[650px] rounded-full bg-gradient-to-tr from-primary/15 via-emerald-500/10 to-transparent blur-[120px] dark:from-primary/20 dark:via-teal-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground backdrop-blur-md shadow-sm hover:border-primary/50 transition-colors">
          <Sparkles className="size-3.5 text-primary animate-pulse" />
          <span>Next-Generation Automated Code Review Platform</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-primary font-semibold flex items-center gap-1">
            RAG Powered <ArrowRight className="size-3" />
          </span>
        </div>

        {/* Primary Heading */}
        <div className="mx-auto max-w-4xl space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Review Pull Requests at{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Warp Speed
            </span>{" "}
            with Full Codebase Context
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Eliminate code review bottlenecks. DiffMind reads your entire repository through vector embeddings in Pinecone, catches critical bugs and security leaks on GitHub webhooks, and writes precise, production-grade review comments in seconds.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }),
              "h-12 px-7 text-sm font-semibold shadow-lg shadow-primary/20 gap-2 w-full sm:w-auto",
            )}
          >
            <GitHubIcon />
            Install on GitHub
            <ArrowRight className="size-4" />
          </Link>

          <a
            href="#how-it-works"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 px-6 text-sm font-medium border-border/80 hover:bg-muted w-full sm:w-auto",
            )}
          >
            See How It Works
          </a>
        </div>

        {/* Trust Badges / Quick Metrics */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-500" />
            <span>Semantic Pinecone RAG</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-500" />
            <span>Zero-Timeout Inngest Workflows</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-500" />
            <span>Enterprise Multi-Model LLMs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-500" />
            <span>1-Click GitHub App Setup</span>
          </div>
        </div>

        {/* Live Code Review Interactive Preview Component */}
        <div className="pt-8">
          <PrPreview />
        </div>
      </div>
    </section>
  );
}
