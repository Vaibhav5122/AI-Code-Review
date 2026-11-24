import { Bot, Check, CheckCircle2, GitCommit, GitPullRequest, Sparkles, AlertTriangle, ShieldCheck, Layers } from "lucide-react";

export function PrPreview() {
  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl border border-border/70 bg-card/60 p-2 sm:p-4 shadow-2xl backdrop-blur-xl">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-emerald-500/10 to-teal-500/20 blur-2xl opacity-50 -z-10" />

      {/* GitHub PR Window Mockup */}
      <div className="overflow-hidden rounded-xl border border-border/80 bg-background shadow-inner">
        {/* Window Top Bar */}
        <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="size-3 rounded-full bg-red-500/80 inline-block" />
              <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-2 text-xs font-mono text-muted-foreground border-l border-border/70">
              <GitPullRequest className="size-3.5 text-primary" />
              <span>pull/42: feat(auth): add session caching & token refresh</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Reviewed in 2.4s
            </span>
          </div>
        </div>

        {/* Diff Content & AI Comment */}
        <div className="p-4 sm:p-6 space-y-4 font-mono text-xs sm:text-sm">
          {/* File Header */}
          <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2 border border-border/60">
            <span className="text-foreground font-medium flex items-center gap-2">
              <span className="text-muted-foreground">src/features/auth/</span>session.ts
            </span>
            <span className="text-[11px] text-muted-foreground">12 additions, 3 deletions</span>
          </div>

          {/* Code Diff lines */}
          <div className="rounded-lg border border-border/70 bg-zinc-950 text-zinc-200 overflow-x-auto text-[13px] leading-relaxed py-2">
            <div className="px-4 py-0.5 text-zinc-500 font-normal">@@ -14,6 +14,8 @@ export async function validateSession(token: string)</div>
            <div className="px-4 py-0.5 text-zinc-400">
              {" const session = await db.session.findUnique({ where: { token } });"}
            </div>
            <div className="px-4 py-0.5 bg-red-950/40 text-red-300 border-l-2 border-red-500">
              - if (session.expiresAt &lt; new Date()) return null;
            </div>
            <div className="px-4 py-0.5 bg-emerald-950/40 text-emerald-300 border-l-2 border-emerald-500">
              + if (isExpired(session.expiresAt)) return null;
            </div>
            <div className="px-4 py-0.5 bg-emerald-950/40 text-emerald-300 border-l-2 border-emerald-500">
              + await refreshUserSession(session.id); // Potential N+1 query vulnerability!
            </div>
            <div className="px-4 py-0.5 text-zinc-400"> return session;</div>
          </div>

          {/* AI Reviewer Bot In-Line Comment Card */}
          <div className="rounded-xl border border-primary/30 bg-primary/[0.03] p-4 sm:p-5 shadow-sm space-y-3 font-sans transition-all">
            {/* Comment Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow">
                  <Bot className="size-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs sm:text-sm text-foreground">
                      diffmind[bot]
                    </span>
                    <span className="rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-medium text-primary border border-primary/20">
                      BOT
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    analyzed via RAG • 2 minutes ago
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <Layers className="size-3.5 text-primary" />
                <span>Pinecone context: auth-service (0.94)</span>
              </div>
            </div>

            {/* Comment Body */}
            <div className="space-y-3 text-xs sm:text-sm text-foreground">
              <div className="flex items-start gap-2 text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-lg text-xs">
                <AlertTriangle className="size-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Performance &amp; Concurrency Alert:</strong> Calling <code className="font-mono bg-amber-500/20 px-1 rounded">refreshUserSession</code> synchronously inside validation path triggers an uncached database update on every request.
                </span>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Based on your repository&apos;s background sync patterns in <code className="font-mono text-foreground bg-muted px-1 py-0.5 rounded text-[11px]">src/lib/session-store.ts</code>, session updates should be debounced or offloaded to an asynchronous Inngest task to avoid connection pool exhaustion under high concurrency.
              </p>

              {/* Code Suggestion Box */}
              <div className="rounded-lg border border-border/80 bg-zinc-950 p-3 text-xs font-mono text-zinc-300 space-y-1">
                <div className="text-[11px] text-zinc-400 font-sans font-medium flex items-center justify-between">
                  <span>Suggested optimization:</span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="size-3" /> Auto-applicable
                  </span>
                </div>
                <div className="pt-1 text-emerald-400">
                  + queueBackgroundSessionRefresh(session.id); // Offloaded to Inngest
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow transition hover:opacity-90"
                >
                  <Check className="size-3.5" /> Commit Suggestion
                </button>
                <span className="text-[11px] text-muted-foreground">
                  Verified with OpenRouter model
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
