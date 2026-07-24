import { App } from "octokit";

let githubApp: App | null = null;

export const getGithubApp = () => {
  if (!githubApp) {
    githubApp = new App({
      appId: process.env.GITHUB_APP_ID as string,
      privateKey: process.env.GITHUB_APP_PRIVATE_KEY?.replace(
        /\n/g,
        "\n",
      ) as string,
      webhooks: {
        secret: process.env.GITHUB_WEBHOOK_SECRET as string,
      },
    });
  }
  return githubApp;
};

export function getGithubInstallUrl(userId: string) {
  const appName = process.env.GITHUB_APP_NAME;
  const url = new URL(`https://github.com/apps/${appName}/installations/new`);
  url.searchParams.append("state", userId);
  return url.toString();
}
