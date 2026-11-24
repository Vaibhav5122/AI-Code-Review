import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { GitHubIcon } from "@/features/auth/components/github-sign-in-form";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function LandingCtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/10 via-primary/5 to-background p-8 sm:p-14 text-center shadow-xl">
          {/* Ambient radial blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" />
              Start Reviewing Today
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Supercharge Your Pull Request Workflow
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg">
              Install the GitHub App in under two minutes. Index your repository with Pinecone vectors and experience lightning-fast peer code reviews on every pull request.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ size: "lg", variant: "default" }),
                  "h-12 px-8 text-sm font-semibold shadow-lg shadow-primary/25 gap-2 w-full sm:w-auto",
                )}
              >
                <GitHubIcon />
                Get Started with GitHub
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 px-6 text-sm font-medium border-border/80 w-full sm:w-auto",
                )}
              >
                Explore Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
