"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is DiffMind different from standard linters or static analyzers?",
      answer:
        "Linters like ESLint or SonarQube only check isolated syntax rules on a single file at a time. DiffMind leverages Pinecone Vector RAG to understand your entire repository's architecture, types, and dependencies. It reasons about business logic, multi-file dependencies, performance regressions, and security flaws just like a senior engineer.",
    },
    {
      question: "Why is Inngest required when deploying to Vercel?",
      answer:
        "Vercel serverless functions have strict execution limits (10 to 60 seconds). Analyzing multi-file unified diffs, querying vector embeddings, and calling large language models can exceed these limits. Inngest provides durable, step-based execution in the background with automatic retries and rate limiting, guaranteeing zero timeout errors.",
    },
    {
      question: "What permissions does the GitHub App require?",
      answer:
        "The GitHub App only requires read access to repository contents/metadata and read/write access to Pull Requests so it can receive webhook events and publish inline review comments. It does not push code directly to your branches.",
    },
    {
      question: "Which LLM models are supported?",
      answer:
        "Because DiffMind connects via OpenRouter, you can use any top-tier coding model—such as Claude 3.5 Sonnet, GPT-4o, DeepSeek V3, or Gemini 1.5 Pro—by simply configuring the REVIEW_MODEL environment variable in your Vercel settings.",
    },
    {
      question: "Can I run and deploy this project for free?",
      answer:
        "Yes! The tech stack was intentionally chosen for extreme cost-efficiency. Next.js runs on Vercel's Hobby tier, Neon Postgres offers a generous free tier, Pinecone provides 1 free starter vector index, and Inngest provides 50,000 monthly events for free.",
    },
  ];

  return (
    <section id="faq" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
            <HelpCircle className="size-3" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Got questions about deployment, security, or codebase indexing? Here are the answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-border/80 bg-card overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left font-medium text-foreground transition-colors hover:text-primary"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
