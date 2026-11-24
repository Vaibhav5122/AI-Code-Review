import { ArrowRight, Bot, Cpu, Database, GitBranch, GitPullRequest, Sparkles, Terminal } from "lucide-react";

export function LandingWorkflow() {
  const steps = [
    {
      step: "01",
      title: "Connect Repositories in 1-Click",
      description:
        "Authenticate through GitHub and install the verified DiffMind GitHub App on your personal or organization repos. Webhooks are configured automatically.",
      icon: GitPullRequest,
      badge: "Instant Setup",
      codeSnippet: "POST /api/github/webhooks -> status 200",
    },
    {
      step: "02",
      title: "Semantic Codebase Indexing with Pinecone",
      description:
        "Your repository's codebase is intelligently parsed, chunked, and embedded into a dedicated Pinecone vector namespace. This gives the AI full structural memory of your types, utilities, and architecture.",
      icon: Database,
      badge: "RAG Engine",
      codeSnippet: "Pinecone.upsert(records, { namespace })",
    },
    {
      step: "03",
      title: "Real-time Autonomous PR Reviews",
      description:
        "When developers open or update a PR, Inngest orchestrates background analysis across PR diff vectors and repository vectors. High-precision reviews and inline code fixes are posted directly to GitHub.",
      icon: Bot,
      badge: "Inngest Orchestration",
      codeSnippet: "inngest.send('github/pr.received')",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
            <Sparkles className="size-3" />
            Seamless Workflow
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How DiffMind Works Under the Hood
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            From webhook arrival to inline comments: a zero-downtime pipeline built for modern engineering teams.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all hover:border-primary/50"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">
                      STEP {item.step}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.badge}
                    </span>
                  </div>

                  <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="flex items-center gap-2 rounded-lg bg-zinc-950 px-3 py-2 text-[11px] font-mono text-zinc-400">
                    <Terminal className="size-3 text-emerald-400" />
                    <span className="truncate">{item.codeSnippet}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
