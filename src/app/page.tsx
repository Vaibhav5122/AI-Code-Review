import type { Metadata } from "next";
import Script from "next/script";
import { LandingNavbar } from "@/components/landing/navbar";
import { LandingHero } from "@/components/landing/hero";
import { LandingWorkflow } from "@/components/landing/workflow";
import { LandingFeatures } from "@/components/landing/features";
import { LandingArchitecture } from "@/components/landing/architecture-section";
import { LandingFaq } from "@/components/landing/faq";
import { LandingCtaBanner } from "@/components/landing/cta-banner";
import { LandingFooter } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "DiffMind — Context-Aware Automated GitHub Pull Request Reviews",
  description:
    "Autonomous code reviewer for GitHub pull requests. Uses Pinecone vector embeddings for full-codebase RAG context, Inngest for durable serverless execution, and frontier LLMs for security, performance, and architecture feedback.",
  keywords: [
    "DiffMind",
    "diffmind",
    "AI Code Reviewer",
    "GitHub PR Review Bot",
    "Automated Code Review",
    "RAG Code Review",
    "Pinecone Vector Search",
    "Inngest Next.js",
    "Code Quality",
    "Security Analysis",
    "GitHub App Reviewer",
  ],
  alternates: {
    canonical: "https://diffmind.vbxv.me",
  },
  openGraph: {
    title: "DiffMind — Context-Aware Automated GitHub Pull Request Reviews",
    description:
      "Automate pull request reviews with intelligent codebase context, Pinecone vector indexing, and seamless GitHub integration.",
    url: "https://diffmind.vbxv.me",
    siteName: "DiffMind",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiffMind — Context-Aware Automated GitHub PR Reviews",
    description:
      "Automate pull request reviews with intelligent codebase context, Pinecone vector indexing, and seamless GitHub integration.",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "DiffMind",
        "url": "https://diffmind.vbxv.me",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Cloud / Web",
        "description":
          "DiffMind is an automated, context-aware code review system powered by Next.js, Inngest, Pinecone, and LLMs. Listens to GitHub Webhooks, vectors codebase memory, and delivers inline PR review feedback.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "featureList": [
          "Full-codebase RAG context via Pinecone vector indexing",
          "Automated GitHub Webhook integration with zero-timeout Inngest workflows",
          "Comprehensive security, vulnerability, and bug detection",
          "Actionable one-click inline code suggestion comments",
          "Support for leading coding LLMs via OpenRouter",
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is DiffMind different from standard linters?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike linters that evaluate isolated syntax in single files, DiffMind vectors your entire repository into Pinecone to cross-reference multi-file types, dependencies, and business logic.",
            },
          },
          {
            "@type": "Question",
            "name": "Can this be deployed on Vercel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, DiffMind is built on Next.js 16 and deploys seamlessly on Vercel with Inngest handling long-running background tasks to bypass serverless execution timeouts.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Structured Data for SEO & AI Search Agents */}
      <Script
        id="structured-data-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LandingNavbar />

      <main className="flex-1">
        <LandingHero />
        <LandingWorkflow />
        <LandingFeatures />
        <LandingArchitecture />
        <LandingFaq />
        <LandingCtaBanner />
      </main>

      <LandingFooter />
    </div>
  );
}
