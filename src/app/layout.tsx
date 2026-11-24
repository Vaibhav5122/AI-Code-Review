import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DiffMind — Context-Aware Automated GitHub PR Reviews",
    template: "%s · DiffMind",
  },
  description:
    "Automate peer code reviews on GitHub with DiffMind. Powered by Retrieval-Augmented Generation (RAG), vector indexing with Pinecone, and serverless background orchestration with Inngest.",
  metadataBase: new URL(process.env.BETTER_AUTH_URL || "https://diffmind.vbxv.me"),
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
  ],
  authors: [{ name: "DiffMind" }],
  openGraph: {
    title: "DiffMind — Context-Aware Automated GitHub PR Reviews",
    description:
      "Automate pull request reviews with intelligent codebase context, Pinecone vector indexing, and seamless GitHub integration.",
    siteName: "DiffMind",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiffMind — Context-Aware Automated GitHub PR Reviews",
    description:
      "Automate pull request reviews with intelligent codebase context, Pinecone vector indexing, and seamless GitHub integration.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        {/* // shadcn ui tooltip provider */}
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
