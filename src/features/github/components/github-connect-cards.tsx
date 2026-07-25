import { ExternalLinkIcon, UnplugIcon } from "lucide-react";

import { GitHubIcon } from "@/features/auth/components/github-sign-in-form";
import type { GithubInstallationStatus } from "@/features/dashboard/lib/types";
import { getGithubInstallUrl } from "../utils/github-app";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  statusBadge,
  statusButtonClass,
} from "@/features/dashboard/lib/status-style";
import { Button } from "@/components/ui/button";
import { disconnectGithubApp } from "../actions";

type GithubConnectCardProps = {
  userId: string;
  installation: GithubInstallationStatus;
};

function ConnectedDetails({
  accountLogin,
}: {
  accountLogin: string | null | undefined;
}) {
  return (
    <p className="text-xs text-muted-foreground">
      Installed for
      <span className="font-medium  dark:text-green-400">@{accountLogin}</span>.
      The app can read repository metadata and post review comments on pull
      requests. It cannot read or write code.
    </p>
  );
}
function DisconnectedDetails() {
  return (
    <ul className="list-inside list-disc space-y-1 text-muted-foreground text-xs">
      <li>Access public and private repositories you selected</li>
      <li>Review webhooks for pull requests events</li>
      <li>Post ai generated review comments on PRs</li>
    </ul>
  );
}

function ConnectedActions() {
  return (
    <form action={disconnectGithubApp}>
      <Button
        type="submit"
        variant={"outline"}
        className={statusButtonClass.danger}
      >
        <UnplugIcon />
        Disconnect Github App
      </Button>
    </form>
  );
}

function DisconnectedActions({ installUrl }: { installUrl: string }) {
  return (
    <Button
      nativeButton={false}
      render={<a href={installUrl} className={statusButtonClass.success} />}
    >
      <GitHubIcon />
      Install Github App
      <ExternalLinkIcon className="size-3 opacity-80" />
    </Button>

    // <a
    //   href={installUrl}
    //   className={cn(
    //     "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
    //     statusButtonClass.success,
    //   )}
    // >
    //   <GitHubIcon />
    //   Install Github App
    //   <ExternalLinkIcon className="size-3 opacity-80" />
    // </a>
  );
}

function ConnectionActions({
  connected,
  installUrl,
}: {
  connected: boolean;
  installUrl: string;
}) {
  if (connected) {
    return <ConnectedActions />;
  }
  return <DisconnectedActions installUrl={installUrl} />;
}

export function ConnectionDetails({
  connected,
  accountLogin,
}: {
  connected: boolean;
  accountLogin: string | null | undefined;
}) {
  if (connected) {
    return <ConnectedDetails accountLogin={accountLogin} />;
  }
  return <DisconnectedDetails />;
}

export function GithubConnectCard({
  userId,
  installation,
}: GithubConnectCardProps) {
  const { connected, accountLogin } = installation;
  const installUrl = getGithubInstallUrl(userId);

  let cardBorderClass = "border-border";
  let iconWrapperClass = "bg-muted border-border";
  let statusTone: "success" | "neutral" = "neutral";
  let statusLabel = "Not connected";

  if (connected) {
    cardBorderClass = "border-green-500/30";
    iconWrapperClass =
      "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/40";
    statusTone = "success";
    statusLabel = `Connected to ${accountLogin}`;
  }

  return (
    <div className={`flex flex-col flex-1 gap-4 rounded-md border p-4 `}>
      <Card className={cn("max-w-2xl transition-colors", cardBorderClass)}>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-none border",
                  iconWrapperClass,
                )}
              >
                <GitHubIcon />
              </span>
              <div>
                <CardTitle>Github App</CardTitle>
                <CardDescription>
                  Install the AI Code Reviewer app in your GitHub account or
                  organization to access public and private repositories
                </CardDescription>
              </div>
            </div>
            <span className={statusBadge(statusTone)}>{statusLabel}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ConnectionDetails
            connected={connected}
            accountLogin={accountLogin}
          />
        </CardContent>
        <CardFooter className="flex  flex-wrap gap-2">
          <ConnectionActions connected={connected} installUrl={installUrl} />
        </CardFooter>
      </Card>
    </div>
  );
}
