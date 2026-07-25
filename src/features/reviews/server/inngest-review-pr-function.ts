import { inngest } from "@/features/inngest/client";
import { prisma } from "@/lib/db";
import { getPullRequestFiles } from "./pr-files";
import { chunkPrFiles } from "../utils/chunk-codes";
import { generateReview } from "./generate-review";

export const reviewPullRequest = inngest.createFunction(
  {
    id: "review-pull-request",
    triggers: { event: "github/pr.received" },
  },
  async ({ event, step }) => {
    const pullRequestId = event.data.pullRequestId;

    const pullRequest = await step.run("mark processing", async () => {
      return await prisma.pullRequest.update({
        where: { id: pullRequestId },
        data: { status: "processing" },
      });
    });
    const chunk = await step.run("breakdown-code", async () => {
      const files = await getPullRequestFiles(
        pullRequest.installationId,
        pullRequest.repoFullName,
        pullRequest.prNumber,
      );
      return chunkPrFiles(pullRequest.prNumber, files);
    });
    if (chunk.length === 0) {
      await step.run("mark-reviewed-no-code", async () => {
        await prisma.pullRequest.update({
          where: { id: pullRequestId },
          data: { status: "reviewed" },
        });
      });
      return { pullRequestId, status: "reviewed", reason: "No code to review" };
    }
    await step.sleep("wait-for-vector-to-index", "10s");

    const review = await step.run("generate-ai-review", async () => {
      return generateReview({
        repoFullName: pullRequest.repoFullName,
        title: pullRequest.title,
      });
    });
  },
);
