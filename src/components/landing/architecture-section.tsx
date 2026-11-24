import { Code2, Cpu, Database, GitPullRequest, Layers, Server, ShieldCheck, Zap } from "lucide-react";

export function LandingArchitecture() {
  const stackItems = [
    {
      name: "Next.js 16 (App Router)",
      role: "Frontend & API Webhooks",
      detail: "Turbopack, Server Components, and zero-latency routing",
      icon: Server,
    },
    {
      name: "Inngest Event Engine",
      role: "Background Workflow Orchestration",
      detail: "Reliable async execution without Vercel gateway timeout limitations",
      icon: Zap,
    },
    {
      name: "Pinecone Vector DB",
      role: "Semantic Codebase Memory",
      detail: "Isolated namespace vectors for code chunks and PR diff context",
      icon: Database,
    },
    {
      name: "Neon PostgreSQL & Prisma",
      role: "Relational Persistence",
      detail: "Stores installations, sync status, and PR review tracking",
      icon: Layers,
    },
    {
      name: "Better Auth",
      role: "Authentication & Security",
      detail: "Session management and GitHub OAuth account linking",
      icon: ShieldCheck,
    },
    {
      name: "OpenRouter LLMs",
      role: "AI Reasoning & Review Generation",
      detail: "Multi-model reasoning configured with domain-specific prompts",
      icon: Cpu,
    },
  ];

  return (
    <section id="architecture" className="py-24 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
            <Code2 className="size-3" />
            System Architecture
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Battle-Tested Production Stack
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Designed for high availability, zero timeout failures, and enterprise-grade code isolation.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="rounded-xl border border-border/70 bg-card p-6 shadow-sm hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-primary">
                      {item.role}
                    </p>
                    <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* High Level Flow Visual */}
        <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
            <GitPullRequest className="size-4 text-primary" />
            End-to-End Review Execution Pipeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-lg bg-muted/60 border border-border/60 space-y-1">
              <span className="text-primary font-bold">1. WEBHOOK INGEST</span>
              <p className="text-muted-foreground font-sans text-xs">
                GitHub delivers <code className="text-foreground">pull_request</code> event; verified by HMAC SHA-256 secret.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/60 border border-border/60 space-y-1">
              <span className="text-primary font-bold">2. INNGEST DISPATCH</span>
              <p className="text-muted-foreground font-sans text-xs">
                Asynchronous event queued with automatic exponential backoff retry policies.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/60 border border-border/60 space-y-1">
              <span className="text-primary font-bold">3. VECTOR RETRIEVAL</span>
              <p className="text-muted-foreground font-sans text-xs">
                Pinecone queries PR diff vectors against indexed codebase memory namespaces.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/60 border border-border/60 space-y-1">
              <span className="text-primary font-bold">4. COMMENT POSTING</span>
              <p className="text-muted-foreground font-sans text-xs">
                OpenRouter generates structured markdown review comments posted via GitHub API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
