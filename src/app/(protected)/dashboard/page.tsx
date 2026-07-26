/**
 * Dashboard Overview page (`/dashboard`).
 *
 * Server component that renders mock overview data for testing.
 */

import type { Metadata } from "next";

import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { OverviewContent } from "@/features/dashboard/components/overview-content";
import { requireAuth } from "@/features/auth/actions";

import type {
  OverviewData,
  OverviewActivityStatus,
} from "@/features/overview/types/overview";

export const metadata: Metadata = {
  title: "Overview · Dashboard",
};

const pick = <T,>(values: readonly T[]): T =>
  values[Math.floor(Math.random() * values.length)]!;

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function createMockOverview(): OverviewData {
  const connected = Math.random() > 0.2;

  const plan = pick(["free", "pro"] as const);

  const statuses: OverviewActivityStatus[] = [
    "approved",
    "changes_requested",
    "rate_limited",
  ];

  const repos = [
    "vaibhav/coderabbit-clone",
    "vaibhav/portfolio",
    "vaibhav/auth-service",
    "vaibhav/ecommerce-api",
    "vaibhav/next-dashboard",
  ];

  const totalCount = randomInt(3, 20);
  const publicCount = randomInt(0, totalCount);

  const reviewsLimit = plan === "free" ? 10 : null;

  return {
    installation: {
      connected,
      accountLogin: connected ? "vaibhav-dev" : null,
      installedAt: connected
        ? new Date(Date.now() - 7 * 86_400_000).toISOString()
        : null,
    },

    repos: connected
      ? {
          totalCount,
          publicCount,
          privateCount: totalCount - publicCount,
          hasMorePages: totalCount > 10,
        }
      : null,

    reviewsUsed:
      reviewsLimit !== null ? randomInt(0, reviewsLimit) : randomInt(10, 100),

    reviewsLimit,

    plan,

    recentActivity: connected
      ? Array.from({ length: 5 }, (_, index) => ({
          id: `review-${index + 1}`,
          repoFullName: pick(repos),
          prNumber: String(randomInt(1, 100)),
          status: pick(statuses),
          reviewedAt: new Date(
            Date.now() - randomInt(1, 72) * 60 * 60 * 1000,
          ).toISOString(),
        }))
      : [],
  };
}

export default async function DashboardOverviewPage() {
  await requireAuth();

  const overview: OverviewData = createMockOverview();

  return (
    <>
      <DashboardHeader
        title="Overview"
        description="Summary of reviews and connected repositories."
      />

      <OverviewContent overview={overview} />
    </>
  );
}
