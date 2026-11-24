"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { githubRepoKeys } from "@/features/github/lib/repos-query";
import { syncRepoCodebase } from "../actions/repo-sync";
import { Button } from "@/components/ui/button";
import { RepoSyncStatus } from "../types";
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";

type SyncRepoButtonProps = {
  repoFullName: string;
  branch: string;
  syncStatus: RepoSyncStatus | null;
};

function isSyncing(status: RepoSyncStatus | null, mutationPending: boolean) {
  if (mutationPending) {
    return true;
  }

  return status === "pending" || status === "syncing";
}

function getButtonLabel(
  status: RepoSyncStatus | null,
  mutationPending: boolean,
) {
  if (isSyncing(status, mutationPending)) {
    return "Syncing…";
  }

  if (status === "synced") {
    return "Re-sync";
  }

  if (status === "failed") {
    return "Retry Sync";
  }

  return "Sync";
}

const SyncRepoButton = ({
  repoFullName,
  branch,
  syncStatus,
}: SyncRepoButtonProps) => {
  const queryClient = useQueryClient();

  const syncRepo = useMutation({
    mutationFn: () => syncRepoCodebase(repoFullName, branch),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: githubRepoKeys.all });
      toast.info(
        `Sync started for ${repoFullName}. Indexing codebase in background…`,
      );
    },
    onError: (error) => {
      toast.error(`Failed to start sync: ${error.message}`);
    },
  });

  const syncing = isSyncing(syncStatus, syncRepo.isPending);

  return (
    <Button
      size="sm"
      variant={syncStatus === "failed" ? "destructive" : "outline"}
      disabled={syncing}
      onClick={() => syncRepo.mutate()}
    >
      {syncing && <RefreshCw className="mr-1.5 h-3.5 w-3.5 animate-spin" />}
      {getButtonLabel(syncStatus, syncRepo.isPending)}
    </Button>
  );
};

export default SyncRepoButton;
