import {
  Cpu,
  Database,
  GitPullRequest,
  Layers,
  Lock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
  BarChart3,
  Bot,
  Code2,
} from "lucide-react";

export function LandingFeatures() {
  const features = [
    {
      title: "Context-Aware Codebase RAG",
      description:
        "Standard AI tools only see the 20 lines in a diff. DiffMind indexes your full repository into Pinecone vectors, giving the model deep awareness of existing utilities, models, and design patterns.",
      icon: Database,
      tag: "Pinecone Vector DB",
    },
    {
      title: "Zero-Timeout Serverless Workflows",
      description:
        "Orchestrated with Inngest to bypass Vercel serverless function timeouts. Background jobs reliably handle chunking, embedding, LLM reasoning, and GitHub comment dispatch with automated retries.",
      icon: Zap,
      tag: "Inngest Orchestration",
    },
    {
      title: "Autonomous Security & Vulnerability Auditing",
      description:
        "Proactively catches leaked API tokens, missing authorization checks, SQL injection vectors, SSRF traps, and unhandled edge cases before bad code enters production.",
      icon: ShieldCheck,
      tag: "Security Guard",
    },
    {
      title: "Multi-Model Intelligence via OpenRouter",
      description:
        "Plug-and-play access to high-performance frontier coding LLMs including Claude 3.5 Sonnet, DeepSeek, and Google Gemini through OpenRouter with custom temperature and system prompts.",
      icon: Cpu,
      tag: "OpenRouter LLM",
    },
    {
      title: "Production GitHub Integration",
      description:
        "Official GitHub App architecture with secure webhooks and installation token exchange. Reviews are posted as native GitHub review comments with one-click commit suggestions.",
      icon: GitPullRequest,
      tag: "GitHub App",
    },
    {
      title: "Real-time Metrics & Repo Management",
      description:
        "Monitor all synced repositories, inspect chunk distribution, trigger manual branch re-syncs, and explore full historical PR audit logs from a responsive dashboard.",
      icon: BarChart3,
      tag: "Dashboard UI",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
            <Sparkles className="size-3" />
            Core Capabilities
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Engineered for Modern Engineering Teams
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Built from the ground up to eliminate review latency, catch subtle architecture bugs, and enforce code quality automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border/80 bg-card p-7 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
