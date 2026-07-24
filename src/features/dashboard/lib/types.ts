export type RepoVisibility = "public" | "private";

export type RepoSyncStatus = "synced" | "syncing" | "failed" | "pending";

export type DashboardRepo = {
  id: string;
  name: string;
  full_name: string;
  visibility: RepoVisibility;
  defaultBranch: string;

  updated_at: string;
  language: string | null;
  stars: number;
  syncStatus?: RepoSyncStatus | null;
};

export type GithubInstallationStatus = {
  connected: boolean;
  accountLogin?: string | null;
  installedAt?: string | null;
};

export type SubscriptionPlan = "free" | "pro";

export type UserSubscription = {
  plan: SubscriptionPlan;
  status: "active" | "trialing" | "canceled";
  renewsAt?: string | null;
};
