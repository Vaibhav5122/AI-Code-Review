import { inngest } from "@/features/inngest/client";
import { serve } from "inngest/next";
import { processTask } from "./function";
import { syncRepoCodebaseFunction } from "@/features/repo-sync/server/repo-sync-function";
import { reviewPullRequest } from "@/features/reviews/server/review-pr-function";

// Allow Inngest steps to run up to 60s (Vercel Hobby limit) instead of default 10-15s
export const maxDuration = 60;

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [processTask, reviewPullRequest, syncRepoCodebaseFunction],
});
